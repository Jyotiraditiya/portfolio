"use client";

import React, { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';
import Hero from '@/components/Hero';
import About from '../components/About';
import Contact from '@/components/Contact';
import ProjectsSection from "@/components/ProjectsSection";
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Certification from '../components/Certification';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';
import SectionIndicator from '../components/SectionIndicator';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message.');
    }
  };

  return (
    <main>
      <Hero />
      <ProjectsSection />
      <Contact />
    </main>
  );
}

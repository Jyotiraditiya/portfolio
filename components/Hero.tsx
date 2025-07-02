"use client";

import React from 'react';
import Image from 'next/image';
import ResumeDownload from './ResumeDownload';

const bounceWords = (text: string, baseDelay = 0.05) =>
  text.split(' ').map((word, i) => (
    <span
      key={i}
      className="inline-block animate-bounceIn"
      style={{
        animationDelay: `${i * baseDelay + 0.2}s`,
        animationFillMode: 'both',
        marginRight: '0.25em',
      }}
    >
      {word}
    </span>
  ));

const Hero = () => (
  <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-20 md:py-32 max-w-5xl mx-auto">
    <div>
      <h1
        className="whitespace-nowrap text-5xl md:text-6xl font-extrabold mb-6 text-purple-800 leading-tight overflow-x-auto"
        style={{
          position: "relative",
          top: "-12px",
          left: "-12px",
        }}
      >
        {bounceWords("JYOTIRADITIYA MISRA")}
      </h1>
      <p className="text-xl text-gray-700 mb-8 max-w-xl">
        {bounceWords(
          "I design and develop elegant, scalable digital experiences with React, Next.js, and cutting-edge web technologies.",
          0.03
        )}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <a
          href="#projects"
          className="inline-block px-8 py-3 rounded-lg bg-purple-600 text-white font-semibold shadow hover:bg-purple-700 transition"
        >
          View Projects
        </a>
        <ResumeDownload />
      </div>
    </div>
    <div className="flex-shrink-0">
      <div className="relative w-[400px] h-[400px] flex items-center justify-center">
        {/* Decorative gradient ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400 via-purple-200 to-purple-600 blur-2xl opacity-60 z-0" />
        {/* Enlarged, full circle image with no border */}
        <Image
          src="/jyotiraditya.jpg"
          alt="Jyotiraditya Misra"
          width={360}
          height={360}
          className="relative z-10 rounded-full shadow-2xl object-cover"
        />
      </div>
    </div>
    <style jsx global>{`
      @keyframes bounceIn {
        0% {
          opacity: 0;
          transform: translateY(60px) scale(0.8);
        }
        60% {
          opacity: 1;
          transform: translateY(-20px) scale(1.05);
        }
        80% {
          transform: translateY(10px) scale(0.97);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      .animate-bounceIn {
        animation: bounceIn 0.7s cubic-bezier(0.68,-0.55,0.27,1.55) both;
      }
    `}</style>
  </section>
);

export default Hero;
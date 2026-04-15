'use client'
import { useState } from 'react'
import axios from 'axios'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({name:'', email:'', message:''})
  async function handleSubmit(e:any){
    e.preventDefault()
    try{
      await axios.post('/api/contact', {
        name: form.name,
        email: form.email,
        message: form.message,
      },{
        headers: {
          'Content-Type': 'application/json'
        }
      })
      setSent(true)
    }catch(err){
      console.error('SMTP Error:', err)
    }
  }
  return (
    <section className="mt-12" id="contact">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact</h2>
      <div className="max-w-xl mx-auto">
        
        {/* Contact Form */}
        <div className="relative card-glossy p-6 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent opacity-20 pointer-events-none" />
          {sent ? <div className="text-accent">Thanks! I'll get back to you.</div> : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input className="bg-white/5 backdrop-blur-md p-3 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition" placeholder="Name" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} />
              <input className="bg-white/5 backdrop-blur-md p-3 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition" placeholder="Email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} />
              <textarea className="bg-white/5 backdrop-blur-md p-3 rounded-lg border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition" placeholder="Message" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} />
              <button className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:opacity-90 transition-all duration-300 shadow-glow">Send</button>
            </form>
          )}
        </div>

        {/* Contact Dashboard */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">

          {/* GitHub */}
          <a href="https://github.com/Jyotiraditiya" target="_blank" className="group card-glossy p-5 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow flex flex-col items-center justify-center text-white hover:scale-105 transition-all duration-300">
            <FaGithub className="text-2xl mb-2 group-hover:scale-110 transition" />
            <span className="text-sm text-gray-300 group-hover:text-white">GitHub</span>
          </a>

          {/* LinkedIn */}
          <a href="https://linkedin.com/in/" target="_blank" className="group card-glossy p-5 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow flex flex-col items-center justify-center text-white hover:scale-105 transition-all duration-300">
            <FaLinkedin className="text-2xl mb-2 group-hover:scale-110 transition" />
            <span className="text-sm text-gray-300 group-hover:text-white">LinkedIn</span>
          </a>

          {/* LeetCode */}
          <a href="https://leetcode.com/Jyotiraditiya" target="_blank" className="group card-glossy p-5 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow flex flex-col items-center justify-center text-white hover:scale-105 transition-all duration-300">
            <SiLeetcode className="text-2xl mb-2 group-hover:scale-110 transition" />
            <span className="text-sm text-gray-300 group-hover:text-white">LeetCode</span>
          </a>

        </div>

        {/* Contact Info Cards */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Email Card */}
          <div className="card-glossy p-6 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow text-white hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaEnvelope /> Email
            </h3>
            <a href="mailto:misrajyotiraditya.com" className="text-gray-300 hover:text-white transition">
              misrajyotiraditya.com
            </a>
          </div>

          {/* Phone Card */}
          <div className="card-glossy p-6 rounded-xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-glow text-white hover:scale-105 transition-all duration-300">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <FaPhone /> Phone
            </h3>
            <a href="tel:+918303367186" className="text-gray-300 hover:text-white transition">
              +91 8303xxxxxxx
            
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

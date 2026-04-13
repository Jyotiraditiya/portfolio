'use client'
import { useState } from 'react'
import axios from 'axios'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({name:'', email:'', message:''})
  async function handleSubmit(e:any){
    e.preventDefault()
    try{
      await axios.post('/api/contact', form)
      setSent(true)
    }catch(e){
      console.error(e)
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

      </div>
    </section>
  )
}

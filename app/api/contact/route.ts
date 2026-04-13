import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'

export async function POST(req:Request){
  try{
    const data = await req.json()
    // send email (configure env vars SMTP_HOST etc.)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
    })
    await transporter.sendMail({ from: data.email, to: process.env.CONTACT_EMAIL, subject: `Contact from ${data.name}`, text: data.message })
    return NextResponse.json({ok:true})
  }catch(e){
    return NextResponse.json({ok:false, error: String(e)}, {status:500})
  }
}

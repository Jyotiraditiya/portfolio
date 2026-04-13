<<<<<<< HEAD
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
=======
import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactFormData = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    await sendMail({ name, email, message });

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
>>>>>>> 001f000ff8ef0df662c9e3bdb6607f22ee568512

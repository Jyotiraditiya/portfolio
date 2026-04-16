import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      )
    }

    console.log("EMAIL_USER:", process.env.EMAIL_USER)
    console.log("EMAIL_PASS exists:", !!process.env.EMAIL_PASS)

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    })
    console.log("Email sent successfully")

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("SMTP ERROR:", error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    hasGmailUser: !!process.env.GMAIL_USER,
    hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
    gmailUser: process.env.GMAIL_USER ? process.env.GMAIL_USER.replace(/(.{3}).*(@.*)/, '$1***$2') : 'Not set',
    nodeEnv: process.env.NODE_ENV,
  });
}

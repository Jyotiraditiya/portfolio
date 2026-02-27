import { NextResponse } from 'next/server';
import { verifyConnection } from '@/lib/mail';

export async function GET() {
  const isConnected = await verifyConnection();

  if (isConnected) {
    return NextResponse.json(
      { status: 'ok', smtp: 'connected' },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { status: 'error', smtp: 'disconnected' },
    { status: 503 }
  );
}
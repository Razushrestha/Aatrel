import { NextResponse } from 'next/server';

export async function GET() {
  // Mock data endpoint — replace with real data source or proxy to remote API
  const payload = {
    co2: '37.4 Bt',
    credits: '1.2M+',
    population: '8.1B',
    pollution: 'High',
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(payload, { status: 200 });
}

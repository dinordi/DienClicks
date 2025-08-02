import { NextResponse } from 'next/server';
import { getConcertEvents } from '@/lib/services';

export async function GET() {
  try {
    const events = await getConcertEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching concert events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch concert events' },
      { status: 500 }
    );
  }
}

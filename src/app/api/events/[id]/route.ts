import { NextResponse } from 'next/server';
import { getConcertEventById } from '@/lib/services';

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const event = await getConcertEventById(params.id);
    if (!event) {
      return NextResponse.json(
        { error: 'Event not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(event);
  } catch (error) {
    console.error('Error fetching concert event:', error);
    return NextResponse.json(
      { error: 'Failed to fetch concert event' },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { getConcertEventById } from '@/lib/services';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const event = await getConcertEventById(id);
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

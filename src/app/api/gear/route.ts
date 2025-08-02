import { NextResponse } from 'next/server';
import { getGear } from '@/lib/services';

export async function GET() {
  try {
    const gear = await getGear();
    return NextResponse.json(gear);
  } catch (error) {
    console.error('Error fetching gear:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gear' },
      { status: 500 }
    );
  }
}

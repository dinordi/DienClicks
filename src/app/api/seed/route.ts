import { NextResponse } from 'next/server';
// import { seedDatabase } from '@/lib/seed';

export async function POST() {
  try {
    // await seedDatabase();
    return NextResponse.json({ message: 'Database seeded functionality is temporarily disabled' });
  } catch (error) {
    console.error('Error seeding database:', error);
    return NextResponse.json(
      { error: 'Failed to seed database', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}

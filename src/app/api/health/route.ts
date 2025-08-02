import { NextResponse } from 'next/server';
import { getDb } from '@/lib/database';
import { getMinioClient } from '@/lib/minio';

export async function GET() {
  try {
    // Test database connection
    const db = getDb();
    const dbResult = await db.query('SELECT NOW() as current_time');
    
    // Test MinIO connection  
    const minio = getMinioClient();
    const buckets = await minio.listBuckets();
    
    return NextResponse.json({
      status: 'healthy',
      database: {
        connected: true,
        timestamp: dbResult.rows[0].current_time
      },
      minio: {
        connected: true,
        buckets: buckets.length
      }
    });
  } catch (error) {
    console.error('Health check failed:', error);
    return NextResponse.json(
      { 
        status: 'unhealthy',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

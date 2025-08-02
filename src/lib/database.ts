import { Pool } from 'pg';

let pool: Pool | null = null;

export function getDb() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    });
  }
  return pool;
}

export async function initDatabase() {
  const db = getDb();
  
  // Create tables if they don't exist
  await db.query(`
    CREATE TABLE IF NOT EXISTS venues (
      id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      capacity INTEGER NOT NULL,
      type VARCHAR(50) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS gear (
      id VARCHAR(255) PRIMARY KEY,
      type VARCHAR(50) NOT NULL,
      brand VARCHAR(100) NOT NULL,
      model VARCHAR(255) NOT NULL,
      description TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS concert_events (
      id VARCHAR(255) PRIMARY KEY,
      artist VARCHAR(255) NOT NULL,
      venue VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      description TEXT,
      cover_photo VARCHAR(255),
      setlist TEXT[], -- Array of strings
      notes TEXT,
      gear TEXT[], -- Array of strings
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  await db.query(`
    CREATE TABLE IF NOT EXISTS concert_photos (
      id VARCHAR(255) PRIMARY KEY,
      event_id VARCHAR(255) REFERENCES concert_events(id) ON DELETE CASCADE,
      src VARCHAR(255) NOT NULL,
      alt VARCHAR(255) NOT NULL,
      artist VARCHAR(255) NOT NULL,
      venue VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      description TEXT,
      gear VARCHAR(255),
      width INTEGER NOT NULL,
      height INTEGER NOT NULL,
      sort_order INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);

  console.log('Database tables initialized successfully');
}

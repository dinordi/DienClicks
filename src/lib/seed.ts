import { getDb, initDatabase } from '@/lib/database';
import { concertEvents, venues, gear } from '@/data/portfolio';

export async function seedDatabase() {
  console.log('Initializing database and MinIO...');
  
  // Initialize database tables
  await initDatabase();
  
  // Initialize MinIO buckets
//   await initMinIO();
  
  const db = getDb();
  
  console.log('Seeding venues...');
  // Insert venues
  for (const venue of venues) {
    await db.query(`
      INSERT INTO venues (id, name, location, capacity, type)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id) DO UPDATE SET
        name = EXCLUDED.name,
        location = EXCLUDED.location,
        capacity = EXCLUDED.capacity,
        type = EXCLUDED.type
    `, [venue.id, venue.name, venue.location, venue.capacity, venue.type]);
  }
  
  console.log('Seeding gear...');
  // Insert gear
  for (const item of gear) {
    await db.query(`
      INSERT INTO gear (id, type, brand, model, description)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (id) DO UPDATE SET
        type = EXCLUDED.type,
        brand = EXCLUDED.brand,
        model = EXCLUDED.model,
        description = EXCLUDED.description
    `, [item.id, item.type, item.brand, item.model, item.description]);
  }
  
  console.log('Seeding concert events...');
  // Insert concert events
  for (const event of concertEvents) {
    await db.query(`
      INSERT INTO concert_events (id, artist, venue, date, description, cover_photo, setlist, notes, gear)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      ON CONFLICT (id) DO UPDATE SET
        artist = EXCLUDED.artist,
        venue = EXCLUDED.venue,
        date = EXCLUDED.date,
        description = EXCLUDED.description,
        cover_photo = EXCLUDED.cover_photo,
        setlist = EXCLUDED.setlist,
        notes = EXCLUDED.notes,
        gear = EXCLUDED.gear
    `, [
      event.id,
      event.artist,
      event.venue,
      event.date,
      event.description,
      event.coverPhoto,
      event.setlist,
      event.notes,
      event.gear
    ]);
    
    // Insert photos for this event
    for (let i = 0; i < event.photos.length; i++) {
      const photo = event.photos[i];
      await db.query(`
        INSERT INTO concert_photos (id, event_id, src, alt, artist, venue, date, description, width, height, sort_order)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (id) DO UPDATE SET
          event_id = EXCLUDED.event_id,
          src = EXCLUDED.src,
          alt = EXCLUDED.alt,
          artist = EXCLUDED.artist,
          venue = EXCLUDED.venue,
          date = EXCLUDED.date,
          description = EXCLUDED.description,
          width = EXCLUDED.width,
          height = EXCLUDED.height,
          sort_order = EXCLUDED.sort_order
      `, [
        photo.id,
        event.id,
        photo.src,
        photo.alt,
        photo.artist,
        photo.venue,
        photo.date,
        photo.description,
        photo.width,
        photo.height,
        i
      ]);
      // Insert photo_gear associations (parse gear string to gear IDs if possible)
      if (photo.gear) {
        // Assume photo.gear is a string like "cameraId + lensId" or just a single gearId
        const gearIds = photo.gear.split('+').map(g => g.trim()).filter(Boolean);
        for (const gearId of gearIds) {
          // Only insert if gearId exists in gear table
          const exists = gear.some(g => g.id === gearId);
          if (exists) {
            await db.query(`
              INSERT INTO photo_gear (photo_id, gear_id)
              VALUES ($1, $2)
              ON CONFLICT DO NOTHING
            `, [photo.id, gearId]);
          }
        }
      }
    }
  }
  
  console.log('Database seeded successfully!');
}

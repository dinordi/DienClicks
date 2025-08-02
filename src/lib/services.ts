
import { getDb } from '@/lib/database';
import { ConcertEvent } from '@/types';
import { Venue, Gear } from '@/types';
import { getPresignedImageUrl } from '@/lib/minio';

export async function getVenues(): Promise<Venue[]> {
  const db = getDb();
  const result = await db.query('SELECT * FROM venues ORDER BY name');
  return result.rows;
}

export async function getGear(): Promise<Gear[]> {
  const db = getDb();
  const result = await db.query('SELECT * FROM gear ORDER BY brand, model');
  return result.rows;
}

export async function getConcertEvents(): Promise<ConcertEvent[]> {
  const db = getDb();
  
  // Get concert events
  const eventsResult = await db.query(`
    SELECT * FROM concert_events 
    ORDER BY date DESC
  `);
  
  const events: ConcertEvent[] = [];
  
  for (const eventRow of eventsResult.rows) {
    // Get photos for this event
    const photosResult = await db.query(`
      SELECT * FROM concert_photos 
      WHERE event_id = $1 
      ORDER BY sort_order, created_at
    `, [eventRow.id]);

    // Generate pre-signed URLs for each photo
    const photos = await Promise.all(
      photosResult.rows.map(async row => {
        // src is in the format "bucket_name/filename.jpg"
        console.log("row.src", row.src);
        const objectParts = row.src.split('/');
        const bucket = objectParts[1];
        const objectName = objectParts[2];

        console.log(`Generating pre-signed URL for photo ${row.id} in bucket ${bucket}, object ${objectName}`);
        let url = '';
        try {
          url = await getPresignedImageUrl(bucket, objectName);
        } catch (e) {
          console.error(`Failed to generate pre-signed URL for photo ${row.id}:`, e);
        }
        console.log(`Photo ${row.id} pre-signed URL: ${url}`);
        return {
          id: row.id,
          src: row.src,
          url,
          alt: row.alt,
          artist: row.artist,
          venue: row.venue,
          date: row.date.toISOString().split('T')[0],
          description: row.description,
          gear: row.gear,
          width: row.width,
          height: row.height,
        };
      })
    );


    const coverBucket = eventRow.cover_photo.split('/')[1];
    const coverObjectName = eventRow.cover_photo.split('/')[2];
    const signedCoverPhoto = await getPresignedImageUrl(coverBucket, coverObjectName);

    const event: ConcertEvent = {
      id: eventRow.id,
      artist: eventRow.artist,
      venue: eventRow.venue,
      date: eventRow.date.toISOString().split('T')[0],
      description: eventRow.description,
      coverPhoto: signedCoverPhoto,
      photos,
      setlist: eventRow.setlist,
      notes: eventRow.notes,
      gear: eventRow.gear,
    };

    events.push(event);
  }
  
  return events;
}

export async function getConcertEventById(id: string): Promise<ConcertEvent | null> {
  const db = getDb();
  
  const eventResult = await db.query(`
    SELECT * FROM concert_events WHERE id = $1
  `, [id]);
  
  if (eventResult.rows.length === 0) {
    return null;
  }
  
  const eventRow = eventResult.rows[0];
  
  // Get photos for this event
  const photosResult = await db.query(`
    SELECT * FROM concert_photos 
    WHERE event_id = $1 
    ORDER BY sort_order, created_at
  `, [id]);
  
  return {
    id: eventRow.id,
    artist: eventRow.artist,
    venue: eventRow.venue,
    date: eventRow.date.toISOString().split('T')[0],
    description: eventRow.description,
    coverPhoto: eventRow.cover_photo,
    photos: photosResult.rows.map(row => ({
      id: row.id,
      src: row.src,
      alt: row.alt,
      artist: row.artist,
      venue: row.venue,
      date: row.date.toISOString().split('T')[0],
      description: row.description,
      gear: row.gear,
      width: row.width,
      height: row.height,
    })),
    setlist: eventRow.setlist,
    notes: eventRow.notes,
    gear: eventRow.gear,
  };
}

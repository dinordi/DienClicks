export interface ConcertPhoto {
  id: string;
  src: string;
  url?: string; // Pre-signed URL for secure access
  alt: string;
  artist: string;
  venue: string;
  date: string;
  description?: string;
  gear?: string;
  width: number;
  height: number;
}

export interface ConcertEvent {
  id: string;
  artist: string;
  venue: string;
  date: string;
  description?: string;
  coverPhoto: string;
  photos: ConcertPhoto[];
  setlist?: string[];
  notes?: string;
  gear?: string[];
}

export interface Venue {
  id: string;
  name: string;
  location: string;
  capacity: number;
  type: "arena" | "hall" | "club" | "festival" | "outdoor";
}

export interface Gear {
  id: string;
  type: "camera" | "lens" | "accessory" | "smartphone";
  brand: string;
  model: string;
  description?: string;
}

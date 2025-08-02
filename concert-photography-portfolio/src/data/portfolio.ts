import { ConcertEvent, Venue, Gear } from "@/types";

// Sample venues data
export const venues: Venue[] = [
  {
    id: "ziggo-dome",
    name: "Ziggo Dome",
    location: "Amsterdam, Netherlands", 
    capacity: 17000,
    type: "arena"
  },
  {
    id: "afas-live",
    name: "AFAS Live",
    location: "Amsterdam, Netherlands",
    capacity: 6000,
    type: "hall"
  },
  {
    id: "013-tilburg",
    name: "013 Tilburg",
    location: "Tilburg, Netherlands",
    capacity: 3000,
    type: "hall"
  },
  {
    id: "melkweg",
    name: "Melkweg",
    location: "Amsterdam, Netherlands",
    capacity: 1500,
    type: "club"
  }
];

// Sample gear data
export const gear: Gear[] = [
  {
    id: "camera-1",
    type: "camera",
    brand: "Sony",
    model: "Cybershot RX100 VII",
    description: "Compact camera with excellent low-light performance"
  },
  {
    id: "smartphone-1", 
    type: "smartphone",
    brand: "Apple",
    model: "iPhone 16 Pro",
    description: "Professional telephoto zoom lens perfect for concert photography"
  }
];

// Sample concert events data
export const concertEvents: ConcertEvent[] = [
  {
    id: "ga-afas-2024",
    artist: "Glass Animals",
    venue: "AFAS Live",
    date: "2024-10-26",
    description: "An electrifying performance showcasing their latest album with incredible stage production and lighting.",
    coverPhoto: "/concert-photos/ga-afas-cover.jpg",
    photos: [
      {
        id: "bmth-1",
        src: "/concert-photos/bmth-1.jpg",
        alt: "Glass Animals lead singer performing at AFAS Live",
        artist: "Glass Animals",
        venue: "AFAS Live", 
        date: "2024-07-15",
        description: "Oli Sykes commanding the stage during the opening song",
        gear: "Canon EOS R5 + Sigma 70-200mm f/2.8",
        width: 1920,
        height: 1280
      },
      {
        id: "bmth-2",
        src: "/concert-photos/bmth-2.jpg", 
        alt: "Dramatic lighting during Glass Animals performance",
        artist: "Glass Animals",
        venue: "AFAS Live",
        date: "2024-07-15",
        description: "Incredible stage lighting creating dramatic silhouettes",
        gear: "Canon EOS R5 + RF 24-70mm f/2.8L",
        width: 1920,
        height: 1280
      },
      {
        id: "bmth-3",
        src: "/concert-photos/bmth-3.jpg",
        alt: "Glass Animals crowd shot at AFAS Live",
        artist: "Glass Animals", 
        venue: "AFAS Live",
        date: "2024-07-15",
        description: "Passionate crowd singing along to every word",
        gear: "Canon EOS R5 + RF 85mm f/1.2L",
        width: 1920,
        height: 1280
      }
    ],
    setlist: ["Can You Feel My Heart", "Throne", "Happy Song", "Drown", "Shadow Moses"],
    notes: "Shot from the pit during the first three songs. The lighting design was exceptional with lots of opportunities for dramatic shots.",
    gear: ["Canon EOS R5", "Sigma 70-200mm f/2.8 DG DN Art", "Canon RF 24-70mm f/2.8L IS USM", "Canon RF 85mm f/1.2L USM"]
  },
  {
    id: "sabrina-carpenter-ziggo-2024",
    artist: "Sabrina Carpenter", 
    venue: "Ziggo Dome",
    date: "2024-06-20",
    description: "An amazing performance by the American singer-songwriter, showcasing her latest hits with stunning visuals and choreography.",
    coverPhoto: "/concert-photos/arctic-cover.jpg",
    photos: [
      {
        id: "arctic-1",
        src: "/concert-photos/arctic-1.jpg",
        alt: "Sabrina Carpenter performing at Ziggo Dome",
        artist: "Sabrina Carpenter",
        venue: "Ziggo Dome",
        date: "2024-06-20",
        description: "Sabrina's iconic stage presence during 'Espresso'",
        gear: "Canon EOS R5 + Sigma 70-200mm f/2.8",
        width: 1920,
        height: 1280
      },
      {
        id: "arctic-2",
        src: "/concert-photos/arctic-2.jpg",
        alt: "Sabrina Carpenter guitarist performing at Ziggo Dome",
        artist: "Sabrina Carpenter",
        venue: "Ziggo Dome", 
        date: "2024-06-20",
        description: "Jamie Cook's guitar work highlighted by stage lighting",
        gear: "Canon EOS R5 + RF 24-70mm f/2.8L",
        width: 1920,
        height: 1280
      }
    ],
    setlist: ["Do I Wanna Know?", "R U Mine?", "Crying Lightning", "Fluorescent Adolescent", "505"],
    notes: "Ziggo Dome's acoustics were perfect for Sabrina Carpenter' sound. Great variety in lighting throughout the set.",
    gear: ["Canon EOS R5", "Sigma 70-200mm f/2.8 DG DN Art", "Canon RF 24-70mm f/2.8L IS USM"]
  },
  {
    id: "muse-013-2024",
    artist: "Mother Mother",
    venue: "013 Tilburg", 
    date: "2024-05-10",
    description: "An intimate yet powerful performance showcasing Muse's incredible range and stage presence.",
    coverPhoto: "/concert-photos/muse-cover.jpg", 
    photos: [
      {
        id: "muse-1",
        src: "/concert-photos/muse-1.jpg",
        alt: "Matt Bellamy of Muse performing at 013 Tilburg",
        artist: "Muse",
        venue: "013 Tilburg",
        date: "2024-05-10", 
        description: "Matt Bellamy's passionate performance during 'Knights of Cydonia'",
        gear: "Canon EOS R5 + RF 85mm f/1.2L",
        width: 1920,
        height: 1280
      },
      {
        id: "muse-2",
        src: "/concert-photos/muse-2.jpg",
        alt: "Muse bass guitar performance at 013 Tilburg", 
        artist: "Muse",
        venue: "013 Tilburg",
        date: "2024-05-10",
        description: "Chris Wolstenholme's bass lines driving the performance",
        gear: "Canon EOS R5 + Sigma 70-200mm f/2.8",
        width: 1920,
        height: 1280
      }
    ],
    setlist: ["Uprising", "Knights of Cydonia", "Starlight", "Time Is Running Out", "Hysteria"],
    notes: "013's smaller venue created an intimate atmosphere. Perfect for capturing emotional close-ups.",
    gear: ["Canon EOS R5", "Canon RF 85mm f/1.2L USM", "Sigma 70-200mm f/2.8 DG DN Art"]
  }
];

// Bio and about information
export const photographerInfo = {
  name: "Concert Photographer",
  tagline: "Live Music Moments Captured in the Spotlight", 
  bio: "Passionate about capturing the raw energy and emotion of live music performances. With access to some of the Netherlands' most prestigious venues including Ziggo Dome, AFAS Live, and 013 Tilburg, I specialize in documenting the magic that happens when artists connect with their audience.",
  experience: "5+ years of concert photography",
  venuesShot: ["Ziggo Dome", "AFAS Live", "013 Tilburg", "Melkweg", "Paradiso", "TivoliVredenburg"],
  specialties: ["Low-light photography", "Stage lighting mastery", "Crowd dynamics", "Artist portraiture"],
  contact: {
    email: "hello@concertphotographer.com",
    instagram: "@concertphotographer",
    location: "Amsterdam, Netherlands"
  }
};

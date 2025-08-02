import { getConcertEvents } from "@/lib/services";
import { photographerInfo } from "@/data/portfolio";
import { ConcertEvent } from "@/types";
import HomePageClient from "./home-client";

export default async function Home() {
  try {
    const events = await getConcertEvents();
    return <HomePageClient events={events} />;
  } catch (error) {
    console.error('Error loading events:', error);
    // Fallback to static data if database is not available
    const { concertEvents } = await import('@/data/portfolio');
    return <HomePageClient events={concertEvents} />;
  }
}

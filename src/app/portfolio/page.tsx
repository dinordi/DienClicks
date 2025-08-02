import { getConcertEvents } from "@/lib/services";
import { ConcertEvent } from "@/types";
import PortfolioPageClient from "./portfolio-client";

export default async function Portfolio() {
  try {
    const events = await getConcertEvents();
    return <PortfolioPageClient events={events} />;
  } catch (error) {
    console.error('Error loading events:', error);
    // Fallback to static data if database is not available
    const { concertEvents } = await import('@/data/portfolio');
    return <PortfolioPageClient events={concertEvents} />;
  }
}

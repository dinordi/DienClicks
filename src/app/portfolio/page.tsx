import { getConcertEvents } from "@/lib/services";
import PortfolioPageClient from "./portfolio-client";

export default async function Portfolio() {
  const events = await getConcertEvents();
  return <PortfolioPageClient events={events} />;
}

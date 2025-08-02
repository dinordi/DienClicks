import PortfolioPageClient from "./portfolio-client";

// Force dynamic rendering to prevent build-time database calls
export const dynamic = 'force-dynamic';

export default async function Portfolio() {
  return <PortfolioPageClient />;
}

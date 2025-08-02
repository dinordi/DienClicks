import HomePageClient from "./home-client";

// Force dynamic rendering to prevent build-time database calls
export const dynamic = 'force-dynamic';

export default async function Home() {
  return <HomePageClient />;
}

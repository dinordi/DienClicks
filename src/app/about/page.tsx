import AboutClient from "./about-client";

// Force dynamic rendering to prevent build-time database calls
export const dynamic = 'force-dynamic';

export default async function About() {
  return <AboutClient />;
}

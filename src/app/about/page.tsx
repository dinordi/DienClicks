import { getVenues, getGear } from "@/lib/services";
import AboutClient from "./about-client";

export default async function About() {
  const venues = await getVenues();
  const gear = await getGear();
  const photographerInfo = {
    tagline: "Capturing the energy of live music.",
    experience: "5+ years",
    contact: {
      email: "photographer@example.com",
      instagram: "@photographer",
      location: "Amsterdam, NL"
    },
    specialties: [
      "Low-light photography",
      "Stage lighting mastery",
      "Crowd dynamics",
      "Artist portraiture"
    ],
    bio: "What started as a passion for music evolved into a career capturing the raw energy and emotion of live performances. Every concert is a unique story waiting to be told through the lens.",
    venuesShot: venues.map(v => v.name)
  };
  return <AboutClient photographerInfo={photographerInfo} gear={gear} />;
}

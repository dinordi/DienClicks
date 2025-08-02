"use client";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Gear, Venue } from "@/types";
import { useEffect, useState } from "react";

interface PhotographerInfo {
  tagline: string;
  experience: string;
  contact: {
    email: string;
    instagram: string;
    location: string;
  };
  specialties: string[];
  bio: string;
  venuesShot: string[];
}

export default function AboutClient() {
  const [gear, setGear] = useState<Gear[]>([]);
  const [venues, setVenues] = useState<Venue[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [gearResponse, venuesResponse] = await Promise.all([
          fetch('/api/gear'),
          fetch('/api/venues')
        ]);
        
        if (gearResponse.ok && venuesResponse.ok) {
          const gearData = await gearResponse.json();
          const venuesData = await venuesResponse.json();
          setGear(gearData);
          setVenues(venuesData);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const photographerInfo: PhotographerInfo = {
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
  // ...existing About page JSX, using photographerInfo and gear as props...
  // For brevity, you can paste the entire About page JSX here, replacing all uses of photographerInfo and gear with the props
  // ...
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="py-12 text-center">
      <h1 className="text-4xl font-bold mb-2">{photographerInfo.tagline}</h1>
      <p className="text-lg text-gray-600">{photographerInfo.experience}</p>
      </section>

      {/* Contact & Specialties */}
      <section className="flex flex-col md:flex-row justify-between gap-8 py-8">
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <ul className="space-y-2">
        <li>
          <strong>Email:</strong> <a href={`mailto:${photographerInfo.contact.email}`} className="text-blue-600 underline">{photographerInfo.contact.email}</a>
        </li>
        <li>
          <strong>Instagram:</strong> <a href={photographerInfo.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{photographerInfo.contact.instagram}</a>
        </li>
        <li>
          <strong>Location:</strong> {photographerInfo.contact.location}
        </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-4">Specialties</h2>
        <ul className="flex flex-wrap gap-2">
        {photographerInfo.specialties.map((spec, idx) => (
          <li key={idx} className="bg-gray-200 rounded-full px-4 py-1 text-sm">{spec}</li>
        ))}
        </ul>
      </div>
      </section>

      {/* Bio */}
      <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700 max-w-2xl">{photographerInfo.bio}</p>
      </section>

      {/* Gear */}
      <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">My Gear</h2>
      {loading ? (
        <div className="space-y-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-4 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      ) : (
        <ul className="list-disc list-inside space-y-1">
          {gear.map((item, idx) => (
          <li key={idx}>{item.description}</li>
          ))}
        </ul>
      )}
      </section>

      {/* Venues */}
      <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Venues I&apos;ve Shot At</h2>
      {loading ? (
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-6 w-20 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      ) : (
        <ul className="flex flex-wrap gap-2">
          {photographerInfo.venuesShot.map((venue, idx) => (
          <li key={idx} className="bg-gray-100 rounded px-3 py-1 text-sm">{venue}</li>
          ))}
        </ul>
      )}
      </section>
    </LayoutWrapper>
  );
}

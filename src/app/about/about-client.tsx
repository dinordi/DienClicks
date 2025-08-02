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
    tagline: "Capturing the magic of live music with a dreamy touch.",
    experience: "5+ years",
    contact: {
      email: "hello@dienclicks.com",
      instagram: "@dienclicks",
      location: "Amsterdam, NL"
    },
    specialties: [
      "Low-light photography",
      "Dreamy stage captures", 
      "Soft concert aesthetics",
      "Artist portraiture",
      "Pink-tinted magic"
    ],
    bio: "What started as a passion for music evolved into capturing the sweet, ethereal moments of live performances. Every concert tells a story of joy, energy, and dreams - and I love bringing that light-hearted magic to life through my lens. With a soft touch and a love for pink hues, I create concert photography that feels as warm and welcoming as the artists themselves.",
    venuesShot: venues.map(v => v.name)
  };
  // ...existing About page JSX, using photographerInfo and gear as props...
  // For brevity, you can paste the entire About page JSX here, replacing all uses of photographerInfo and gear with the props
  // ...
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="py-24 pink-gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">{photographerInfo.tagline}</h1>
          <p className="text-xl text-muted-foreground">{photographerInfo.experience} of dreamy concert photography</p>
        </div>
      </section>

      {/* Contact & Specialties */}
      <section className="py-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="concert-card">
              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-6 gradient-text">Let's Connect</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span><strong>Email:</strong> <a href={`mailto:${photographerInfo.contact.email}`} className="text-pink-600 hover:text-pink-800 underline">{photographerInfo.contact.email}</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span><strong>Instagram:</strong> <a href={photographerInfo.contact.instagram} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 underline">{photographerInfo.contact.instagram}</a></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span><strong>Location:</strong> {photographerInfo.contact.location}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="concert-card">
              <div className="p-8">
                <h2 className="text-3xl font-semibold mb-6 gradient-text">My Specialties</h2>
                <div className="flex flex-wrap gap-3">
                  {photographerInfo.specialties.map((spec, idx) => (
                    <span key={idx} className="bg-pink-100 text-pink-700 border border-pink-200 rounded-full px-4 py-2 text-sm font-medium">{spec}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-semibold mb-8 gradient-text">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{photographerInfo.bio}</p>
          </div>
        </div>
      </section>

      {/* Gear */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-100/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="concert-card max-w-4xl mx-auto">
            <div className="p-8">
              <h2 className="text-3xl font-semibold mb-6 gradient-text text-center">My Gear</h2>
              {loading ? (
                <div className="space-y-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="h-4 bg-pink-200/50 rounded animate-pulse"></div>
                  ))}
                </div>
              ) : (
                <div className="space-y-3">
                  {gear.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span className="text-muted-foreground">{item.description}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Venues */}
      <section className="py-16 pink-gradient-bg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl font-semibold mb-8 gradient-text">Venues I&apos;ve Shot At</h2>
            {loading ? (
              <div className="flex flex-wrap gap-3 justify-center">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="h-8 w-24 bg-pink-200/50 rounded-full animate-pulse"></div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-3 justify-center">
                {photographerInfo.venuesShot.map((venue, idx) => (
                  <span key={idx} className="bg-white/80 backdrop-blur-sm text-pink-700 border border-pink-200 rounded-full px-4 py-2 text-sm font-medium shadow-sm">{venue}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

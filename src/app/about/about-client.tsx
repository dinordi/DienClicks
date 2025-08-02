"use client";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Gear } from "@/types";

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

interface AboutClientProps {
  photographerInfo: PhotographerInfo;
  gear: Gear[];
}

export default function AboutClient({ photographerInfo, gear }: AboutClientProps) {
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
      <ul className="list-disc list-inside space-y-1">
        {gear.map((item, idx) => (
        <li key={idx}>{item.description}</li>
        ))}
      </ul>
      </section>

      {/* Venues */}
      <section className="py-8">
      <h2 className="text-2xl font-semibold mb-4">Venues I&apos;ve Shot At</h2>
      <ul className="flex flex-wrap gap-2">
        {photographerInfo.venuesShot.map((venue, idx) => (
        <li key={idx} className="bg-gray-100 rounded px-3 py-1 text-sm">{venue}</li>
        ))}
      </ul>
      </section>
    </LayoutWrapper>
  );
}

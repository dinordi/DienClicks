"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Camera, MapPin, Calendar, Music } from "lucide-react";
import { ConcertEvent } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function PortfolioPageClient() {
  const [events, setEvents] = useState<ConcertEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        if (!response.ok) {
          throw new Error('Failed to fetch events');
        }
        const data = await response.json();
        setEvents(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  if (loading) {
    return (
      <LayoutWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
            <p className="mt-4 text-lg">Loading portfolio...</p>
          </div>
        </div>
      </LayoutWrapper>
    );
  }

  if (error) {
    return (
      <LayoutWrapper>
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-500 text-lg">Error: {error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-4"
            >
              Try Again
            </Button>
          </div>
        </div>
      </LayoutWrapper>
    );
  }
  return (
    <LayoutWrapper>
      {/* Header Section */}
      <section className="py-24 pink-gradient-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A dreamy collection of concert photography with a soft, light-hearted touch
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
                <Camera className="h-4 w-4 text-pink-500" />
                <span>{events.length} Concert Events</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm rounded-full px-4 py-2">
                <Music className="h-4 w-4 text-pink-500" />
                <span>Multiple Genres</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="space-y-16">
            {events.map((event, eventIndex) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: eventIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Event Header */}
                <div className="text-center space-y-4">
                  <h2 className="text-4xl md:text-5xl font-bold gradient-text">{event.artist}</h2>
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-muted-foreground">
                    <div className="flex items-center space-x-2 bg-pink-50 rounded-full px-4 py-2">
                      <MapPin className="h-5 w-5 text-pink-500" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2 bg-pink-50 rounded-full px-4 py-2">
                      <Calendar className="h-5 w-5 text-pink-500" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  {event.description && (
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {event.photos.map((photo, photoIndex) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: photoIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className="concert-card group">
                        <div className="p-0">
                          <div className="relative aspect-[3/4] overflow-hidden">
                            <div className="absolute inset-0 pink-gradient-bg flex items-center justify-center">
                              <Image
                                src={photo.url || "/placeholder-image.jpg"}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                            </div>
                            <div className="image-overlay">
                              <div className="p-4 text-white">
                                <h4 className="font-semibold text-sm mb-1">{photo.alt}</h4>
                                {photo.description && (
                                  <p className="text-xs text-pink-100 mb-2">{photo.description}</p>
                                )}
                                {photo.gear && (
                                  <p className="text-xs text-pink-200">{photo.gear}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Setlist */}
                  {event.setlist && event.setlist.length > 0 && (
                    <div className="concert-card">
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gradient-text">
                          <Music className="h-5 w-5 mr-2 text-pink-500" />
                          Setlist Highlights
                        </h3>
                        <div className="space-y-2">
                          {event.setlist.slice(0, 5).map((song, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center text-xs border-pink-200 text-pink-600 bg-pink-50">
                                {index + 1}
                              </Badge>
                              <span className="text-sm">{song}</span>
                            </div>
                          ))}
                          {event.setlist.length > 5 && (
                            <p className="text-sm text-muted-foreground mt-2">
                              +{event.setlist.length - 5} more songs
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Gear & Notes */}
                  <div className="concert-card">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gradient-text">
                        <Camera className="h-5 w-5 mr-2 text-pink-500" />
                        Gear & Notes
                      </h3>
                      <div className="space-y-4">
                        {event.gear && event.gear.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Equipment Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.gear.map((item, index) => (
                                <Badge key={index} variant="secondary" className="text-xs bg-pink-100 text-pink-700 border-pink-200">
                                  {item}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        {event.notes && (
                          <div>
                            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Notes</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {event.notes}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Separator between events */}
                {eventIndex < events.length - 1 && (
                  <Separator className="my-16 bg-pink-200/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold">
              Interested in Concert Photography Services?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let&apos;s discuss how I can capture your next live music event with professional quality and artistic vision.
            </p>
            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
              <Link href="/contact">
                Get In Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

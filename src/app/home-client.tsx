"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { Camera, MapPin, Calendar, ArrowRight } from "lucide-react";
import { ConcertEvent } from "@/types";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function HomePageClient() {
  const [events, setEvents] = useState<ConcertEvent[]>([]);
  const [loading, setLoading] = useState(true);

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
        console.error('Error fetching events:', err);
        // Set empty array as fallback
        setEvents([]);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  useEffect(() => {
    if (events.length === 0) {
      console.warn('No events found');
    }
    events.forEach(event => {
      if (!event.coverPhoto) {
        console.warn(`Event ${event.id} is missing cover photo`);
      }
      else
      {
        // Make into signed URL if needed
      }
    });
  }, [events]);

  const featuredEvents = events.slice(0, 3);

  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pink-gradient-bg">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="inline-flex p-4 rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg shadow-pink-500/20 mb-6">
                <Camera className="h-16 w-16 text-pink-500" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Live Music</span>
              <br />
              <span className="text-foreground">Captured</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sweet moments in the spotlight, where music meets magic
            </p>
            
            <p className="text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto">
              Concert photography with a soft touch - capturing the energy and emotion of live performances as if you were there.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 rounded-xl border-0 hover:from-pink-500 hover:to-rose-600 transition-all duration-300">
                <Link href="/portfolio" className="flex items-center space-x-2">
                  <span>View Portfolio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400 rounded-xl bg-white/50 backdrop-blur-sm shadow-sm">
                <Link href="/contact">
                  Get In Touch
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center bg-white/20 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-pink-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-100/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Featured Work</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Recent concert photography with a dreamy, light-hearted touch
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              // Loading skeleton
              Array.from({ length: 3 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="concert-card">
                    <div className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <div className="absolute inset-0 pink-gradient-bg flex items-center justify-center">
                          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-400"></div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="h-6 bg-pink-200/50 rounded-lg mb-2 animate-pulse"></div>
                        <div className="h-4 bg-pink-200/30 rounded w-2/3 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : featuredEvents.length > 0 ? (
              featuredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="concert-card group">
                  <div className="p-0">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 pink-gradient-bg flex items-center justify-center">
                        <Image
                          src={event.coverPhoto}
                          alt={event.artist}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="image-overlay flex items-center justify-center">
                        <Button variant="outline" size="sm" className="bg-white/90 border-pink-200 text-pink-700 hover:bg-white hover:border-pink-300 rounded-xl shadow-lg backdrop-blur-sm">
                          View Event
                        </Button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-pink-100 text-pink-700 border-pink-200 rounded-full px-3 py-1">
                          {event.venue}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(event.date).toLocaleDateString()}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-2">{event.artist}</h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3 mr-1 text-pink-400" />
                          {event.venue}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {event.photos.length} photos
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))) : (
              // No events fallback
              <div className="col-span-full text-center py-12">
                <div className="inline-flex p-4 rounded-3xl bg-pink-100 mb-4">
                  <Camera className="h-16 w-16 text-pink-400" />
                </div>
                <p className="text-lg text-muted-foreground">No featured events available at the moment.</p>
                <p className="text-sm text-muted-foreground/70 mt-2">Check back soon for new concert photography!</p>
              </div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button asChild size="lg" variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm">
              <Link href="/portfolio" className="flex items-center space-x-2">
                <span>View All Work</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with soft pink gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-rose-50/30 to-pink-100/50"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">Venues I&apos;ve Shot At</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The Netherlands&apos; most prestigious music venues, captured with love
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {["Ziggo Dome", "AFAS Live", "013 Tilburg", "Paradiso", "Melkweg", "TivoliVredenburg"].map((venue, index) => (
              <motion.div
                key={venue}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-pink-200/40 hover:border-pink-300/60 transition-all duration-300 soft-shadow hover:shadow-lg hover:shadow-pink-500/20 group">
                  <p className="font-medium text-sm text-foreground group-hover:text-pink-600 transition-colors duration-300">{venue}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

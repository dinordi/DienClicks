"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { concertEvents } from "@/data/portfolio";
import { Camera, MapPin, Calendar, Clock, Users, Music } from "lucide-react";

export default function Portfolio() {
  return (
    <LayoutWrapper>
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A collection of my concert photography work from Amsterdam's premier venues
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>{concertEvents.length} Concert Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <Music className="h-4 w-4" />
                <span>{concertEvents.reduce((acc, event) => acc + event.photos.length, 0)} Photos</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{new Set(concertEvents.map(event => event.venue)).size} Venues</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {concertEvents.map((event, eventIndex) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: eventIndex * 0.1 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Event Header */}
                <div className="text-center space-y-4">
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      {event.venue}
                    </Badge>
                    <Badge variant="outline" className="border-white/20 text-white">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </Badge>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold">{event.artist}</h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    {event.description}
                  </p>
                  
                  {/* Event Stats */}
                  <div className="flex flex-wrap justify-center gap-6 pt-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Camera className="h-4 w-4" />
                      <span>{event.photos.length} Photos</span>
                    </div>
                    {event.setlist && (
                      <div className="flex items-center space-x-2">
                        <Music className="h-4 w-4" />
                        <span>{event.setlist.length} Songs</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Photo Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {event.photos.map((photo, photoIndex) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: photoIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300 group">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                              <Camera className="h-12 w-12 text-gray-600" />
                            </div>
                            <div className="image-overlay flex flex-col items-center justify-center p-4 text-center">
                              <h4 className="text-white font-semibold mb-2">{photo.artist}</h4>
                              <p className="text-gray-300 text-sm mb-4">{photo.description}</p>
                              {photo.gear && (
                                <p className="text-gray-400 text-xs">{photo.gear}</p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Event Details */}
                {(event.notes || event.gear || event.setlist) && (
                  <Card className="bg-card/30 backdrop-blur-sm border-border/30">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Notes and Gear */}
                        <div className="space-y-6">
                          {event.notes && (
                            <div>
                              <h4 className="text-lg font-semibold mb-3 flex items-center">
                                <Camera className="h-5 w-5 mr-2" />
                                Photography Notes
                              </h4>
                              <p className="text-muted-foreground">{event.notes}</p>
                            </div>
                          )}
                          
                          {event.gear && (
                            <div>
                              <h4 className="text-lg font-semibold mb-3">Gear Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {event.gear.map((item, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {item}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Setlist */}
                        {event.setlist && (
                          <div>
                            <h4 className="text-lg font-semibold mb-3 flex items-center">
                              <Music className="h-5 w-5 mr-2" />
                              Setlist Highlights
                            </h4>
                            <ul className="space-y-2 text-muted-foreground">
                              {event.setlist.map((song, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="text-xs text-muted-foreground mr-3 w-6">
                                    {String(index + 1).padStart(2, '0')}
                                  </span>
                                  {song}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Separator between events */}
                {eventIndex < concertEvents.length - 1 && (
                  <div className="flex justify-center pt-8">
                    <Separator className="w-24" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interested in Concert Photography Services?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how I can capture your next live music event with professional quality and artistic vision.
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

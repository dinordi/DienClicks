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

interface PortfolioPageClientProps {
  events: ConcertEvent[];
}

export default function PortfolioPageClient({ events }: PortfolioPageClientProps) {
  return (
    <LayoutWrapper>
      {/* Header Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              A collection of my concert photography work from Amsterdam&apos;s premier venues
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>{events.length} Concert Events</span>
              </div>
              <div className="flex items-center space-x-2">
                <Music className="h-4 w-4" />
                <span>Multiple Genres</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
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
                  <h2 className="text-4xl md:text-5xl font-bold">{event.artist}</h2>
                  <div className="flex flex-wrap justify-center gap-4 text-lg text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-5 w-5" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
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
                      <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300">
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                              <Camera className="h-12 w-12 text-gray-600" />
                            </div>
                            <div className="image-overlay">
                              <div className="p-4 text-white">
                                <h4 className="font-semibold text-sm mb-1">{photo.alt}</h4>
                                {photo.description && (
                                  <p className="text-xs text-gray-300 mb-2">{photo.description}</p>
                                )}
                                {photo.gear && (
                                  <p className="text-xs text-gray-400">{photo.gear}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Setlist */}
                  {event.setlist && event.setlist.length > 0 && (
                    <Card className="bg-card/30 backdrop-blur-sm border-border/30">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4 flex items-center">
                          <Music className="h-5 w-5 mr-2" />
                          Setlist Highlights
                        </h3>
                        <div className="space-y-2">
                          {event.setlist.slice(0, 5).map((song, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center text-xs">
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
                      </CardContent>
                    </Card>
                  )}

                  {/* Gear & Notes */}
                  <Card className="bg-card/30 backdrop-blur-sm border-border/30">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Camera className="h-5 w-5 mr-2" />
                        Gear & Notes
                      </h3>
                      <div className="space-y-4">
                        {event.gear && event.gear.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium mb-2 text-muted-foreground">Equipment Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.gear.map((item, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
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
                    </CardContent>
                  </Card>
                </div>

                {/* Separator between events */}
                {eventIndex < events.length - 1 && (
                  <Separator className="my-16" />
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

"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { gear, photographerInfo } from "@/data/portfolio";
import { 
  Camera, 
  MapPin, 
  Clock, 
  Award, 
  Zap, 
  Eye, 
  Users, 
  Instagram,
  Mail
} from "lucide-react";

export default function About() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mx-auto mb-8 flex items-center justify-center">
              <Camera className="h-16 w-16 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {photographerInfo.tagline}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{photographerInfo.experience}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>{photographerInfo.contact.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Camera className="h-4 w-4" />
                <span>{photographerInfo.specialties.length} Specialties</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8">My Story</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  {photographerInfo.bio}
                </p>
                <p>
                  What started as a passion for music evolved into a career capturing the raw energy and emotion of live performances. Every concert is a unique story waiting to be told through the lens.
                </p>
                <p>
                  My approach combines technical expertise with an artistic eye, always seeking those split-second moments that define a performance - the guitarist's intense focus, the crowd's unified energy, the dramatic interplay of light and shadow.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-card/30 backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="text-center p-4 rounded-lg bg-muted/30">
                          <div className="text-2xl font-bold text-white">{photographerInfo.venuesShot.length}+</div>
                          <div className="text-muted-foreground">Venues</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/30">
                          <div className="text-2xl font-bold text-white">100+</div>
                          <div className="text-muted-foreground">Concerts</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/30">
                          <div className="text-2xl font-bold text-white">5+</div>
                          <div className="text-muted-foreground">Years</div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-muted/30">
                          <div className="text-2xl font-bold text-white">1000+</div>
                          <div className="text-muted-foreground">Photos</div>
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Contact</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{photographerInfo.contact.email}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <Instagram className="h-4 w-4" />
                          <span>{photographerInfo.contact.instagram}</span>
                        </div>
                        <div className="flex items-center space-x-3 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{photographerInfo.contact.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Specialties</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Years of experience have honed these specific skills in concert photography
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {photographerInfo.specialties.map((specialty, index) => {
              const icons = [Zap, Eye, Users, Award];
              const Icon = icons[index % icons.length];
              
              return (
                <motion.div
                  key={specialty}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-border transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <Icon className="h-12 w-12 mx-auto mb-4 text-white" />
                      <h3 className="text-xl font-semibold mb-3">{specialty}</h3>
                      <p className="text-muted-foreground text-sm">
                        {specialty === "Low-light photography" && "Mastering challenging lighting conditions to capture stunning shots without flash"}
                        {specialty === "Stage lighting mastery" && "Working with dynamic concert lighting to create dramatic and artistic compositions"}
                        {specialty === "Crowd dynamics" && "Capturing the energy and emotion of live audiences in their natural state"}
                        {specialty === "Artist portraiture" && "Creating compelling portraits that showcase the performer's personality and stage presence"}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gear Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Gear</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional equipment chosen specifically for concert photography challenges
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gear.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border-border/30 hover:border-border/60 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className="border-white/20 text-white capitalize">
                        {item.type}
                      </Badge>
                      <Camera className="h-5 w-5 text-muted-foreground" />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">
                      {item.brand} {item.model}
                    </h3>
                    
                    {item.description && (
                      <p className="text-muted-foreground text-sm">
                        {item.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Venues Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Venues I've Worked With</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by Amsterdam's most prestigious music venues and beyond
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {photographerInfo.venuesShot.map((venue, index) => (
              <motion.div
                key={venue}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Card className="p-6 bg-card/20 backdrop-blur-sm border-border/20 hover:border-border/40 transition-all duration-300 h-full">
                  <CardContent className="p-0 flex items-center justify-center h-full">
                    <p className="font-medium text-sm">{venue}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LayoutWrapper } from "@/components/layout-wrapper";
import { photographerInfo } from "@/data/portfolio";
import { 
  Mail, 
  MapPin, 
  Instagram, 
  Camera, 
  Send,
  Clock,
  MessageSquare
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    venue: "",
    eventDate: "",
    eventType: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      venue: "",
      eventDate: "",
      eventType: "",
      message: ""
    });
    
    setIsSubmitting(false);
    
    // In a real app, you would send this data to your backend
    alert("Thank you for your message! I'll get back to you within 24 hours.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Let&apos;s Work Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Ready to capture your next live music event? Let&apos;s discuss your photography needs.
            </p>
            <div className="flex justify-center">
              <Camera className="h-16 w-16 text-white" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center">
                    <MessageSquare className="h-6 w-6 mr-2" />
                    Get In Touch
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="venue">Venue</Label>
                        <Input
                          id="venue"
                          name="venue"
                          value={formData.venue}
                          onChange={handleChange}
                          placeholder="e.g., Ziggo Dome, AFAS Live"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Event Date</Label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={handleChange}
                          className="bg-background/50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="eventType">Event Type</Label>
                      <Input
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        placeholder="e.g., Concert, Festival, Private Event"
                        className="bg-background/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your event, requirements, and any specific shots you have in mind..."
                        rows={6}
                        required
                        className="bg-background/50"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-white text-black hover:bg-gray-200"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Contact Details */}
              <Card className="bg-card/30 backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-5 w-5 text-white" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">{photographerInfo.contact.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <Instagram className="h-5 w-5 text-white" />
                      <div>
                        <p className="font-medium">Instagram</p>
                        <p className="text-muted-foreground">{photographerInfo.contact.instagram}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-5 w-5 text-white" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{photographerInfo.contact.location}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-card/30 backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center">
                    <Clock className="h-6 w-6 mr-2" />
                    Response Time
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I typically respond to all inquiries within <strong className="text-white">24 hours</strong>.
                    </p>
                    <p>
                      For urgent requests or events happening within the next week, please mention it in your message for priority handling.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Services */}
              <Card className="bg-card/30 backdrop-blur-sm border-border/30">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Services Available</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Concert Photography</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Festival Coverage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Artist Portraits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Behind-the-Scenes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      <span>Press/Media Coverage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about concert photography services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What venues do you have access to?",
                answer: "I have photo accreditation with major venues including Ziggo Dome, AFAS Live, 013 Tilburg, and many others across the Netherlands."
              },
              {
                question: "Do you provide RAW files?",
                answer: "I deliver professionally edited high-resolution images. RAW files can be provided upon request for an additional fee."
              },
              {
                question: "How quickly will I receive the photos?",
                answer: "For concerts, edited photos are typically delivered within 3-5 business days. Rush delivery is available for urgent needs."
              },
              {
                question: "Can you shoot without flash?",
                answer: "Absolutely! Concert photography requires no flash. I specialize in working with existing stage lighting to create dramatic, professional images."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/30 backdrop-blur-sm border-border/30">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

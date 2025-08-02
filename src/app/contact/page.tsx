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
      <section className="py-24 pink-gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-300/20 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Let&apos;s Work Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Ready to capture your next live music event with a dreamy touch? Let&apos;s discuss your photography needs.
            </p>
            <div className="inline-flex p-4 rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg shadow-pink-500/20">
              <Camera className="h-16 w-16 text-pink-500" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="concert-card">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gradient-text">
                    <MessageSquare className="h-6 w-6 mr-2 text-pink-500" />
                    Get In Touch
                  </h3>
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
                          className="bg-pink-50/50 border-pink-200 focus:border-pink-400 rounded-xl"
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
                          className="bg-pink-50/50 border-pink-200 focus:border-pink-400 rounded-xl"
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
                          className="bg-pink-50/50 border-pink-200 focus:border-pink-400 rounded-xl"
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
                          className="bg-pink-50/50 border-pink-200 focus:border-pink-400 rounded-xl"
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
                        className="bg-pink-50/50 border-pink-200 focus:border-pink-400 rounded-xl"
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
                        className="bg-pink-50/50 border-pink-200 focus:border-pink-400 rounded-xl"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 rounded-xl border-0 hover:from-pink-500 hover:to-rose-600 transition-all duration-300"
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
                </div>
              </div>
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
              <div className="concert-card">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-xl bg-pink-100">
                        <Mail className="h-5 w-5 text-pink-500" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">{photographerInfo.contact.email}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-xl bg-pink-100">
                        <Instagram className="h-5 w-5 text-pink-500" />
                      </div>
                      <div>
                        <p className="font-medium">Instagram</p>
                        <p className="text-muted-foreground">{photographerInfo.contact.instagram}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-xl bg-pink-100">
                        <MapPin className="h-5 w-5 text-pink-500" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">{photographerInfo.contact.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="concert-card">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gradient-text">
                    <Clock className="h-6 w-6 mr-2 text-pink-500" />
                    Response Time
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      I typically respond to all inquiries within <strong className="text-foreground gradient-text">24 hours</strong>.
                    </p>
                    <p>
                      For urgent requests or events happening within the next week, please mention it in your message for priority handling.
                    </p>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="concert-card">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">Services Available</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Concert Photography</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Festival Coverage</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Artist Portraits</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Behind-the-Scenes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>Press/Media Coverage</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative overflow-hidden">
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
              <span className="gradient-text">Frequently Asked Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Common questions about dreamy concert photography services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What venues do you have access to?",
                answer: "I have photo accreditation with major venues including Ziggo Dome, AFAS Live, 013 Tilburg, and many others across the Netherlands. Each venue brings its own magical atmosphere to capture."
              },
              {
                question: "Do you provide RAW files?",
                answer: "I deliver professionally edited high-resolution images with my signature dreamy touch. RAW files can be provided upon request for an additional fee."
              },
              {
                question: "How quickly will I receive the photos?",
                answer: "For concerts, beautifully edited photos are typically delivered within 3-5 business days. Rush delivery is available for urgent needs."
              },
              {
                question: "Can you shoot without flash?",
                answer: "Absolutely! Concert photography requires no flash. I specialize in working with existing stage lighting to create dreamy, soft, and magical images that capture the mood perfectly."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="h-full concert-card">
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-3 gradient-text">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
}

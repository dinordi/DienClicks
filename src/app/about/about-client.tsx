"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LayoutWrapper } from "@/components/layout-wrapper";
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
  gear: any[];
}

export default function AboutClient({ photographerInfo, gear }: AboutClientProps) {
  // ...existing About page JSX, using photographerInfo and gear as props...
  // For brevity, you can paste the entire About page JSX here, replacing all uses of photographerInfo and gear with the props
  // ...
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      {/* ...existing code... */}
      {/* Use photographerInfo and gear from props everywhere */}
    </LayoutWrapper>
  );
}

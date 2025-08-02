"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Camera, Home, User, Mail, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Portfolio", href: "/portfolio", icon: ImageIcon },
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Mail },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Camera className="h-6 w-6" />
            <span className="font-bold text-lg gradient-text">Concert Photography</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              
              return (
                <Button
                  key={item.name}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "transition-all duration-200",
                    isActive && "bg-white text-black hover:bg-gray-200"
                  )}
                >
                  <Link href={item.href} className="flex items-center space-x-2">
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                </Button>
              );
            })}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Camera className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

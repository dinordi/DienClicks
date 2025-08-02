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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-pink-200/30 shadow-sm shadow-pink-100/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 text-white shadow-lg shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-300">
              <Camera className="h-5 w-5" />
            </div>
            <span className="font-bold text-lg gradient-text">DienClicks</span>
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
                    "transition-all duration-300 rounded-xl",
                    isActive 
                      ? "bg-gradient-to-r from-pink-400 to-rose-500 text-white shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50" 
                      : "hover:bg-pink-50 hover:text-pink-700 dark:hover:bg-pink-900/20 dark:hover:text-pink-300"
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
            <Button variant="ghost" size="sm" className="rounded-xl hover:bg-pink-50 hover:text-pink-700">
              <Camera className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

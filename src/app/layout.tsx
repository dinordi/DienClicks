import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Concert Photography Portfolio | Live Music Moments",
  description: "Professional concert photographer capturing live music moments at venues like Ziggo Dome, AFAS Live, and 013 Tilburg. Showcasing the energy and emotion of live performances.",
  keywords: ["concert photography", "live music", "photography portfolio", "Ziggo Dome", "AFAS Live", "013 Tilburg", "music photographer"],
  authors: [{ name: "Concert Photographer" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Concert Photography Portfolio | Live Music Moments",
    description: "Professional concert photographer capturing live music moments at top venues",
    siteName: "Concert Photography Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio",
  description: "A cyberpunk-themed portfolio showcasing my work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="scanline"></div>
        <audio
          autoPlay
          loop
          style={{ display: 'none' }}
        >
          <source src="/cyberpunk-ambient.mp3" type="audio/mpeg" />
        </audio>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Space_Grotesk, Ubuntu } from 'next/font/google';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-ubuntu',
});

export const metadata: Metadata = {
  title: 'Flarial - Enhanced Minecraft Client | Performance & Features',
  description: 'Experience Minecraft with enhanced performance, FPS boost, and quality-of-life improvements. Download our free, safe, and optimized Minecraft client today.',
  keywords: ['Minecraft client', 'Minecraft PvP client', 'FPS boost Minecraft', 'Minecraft performance', 'custom Minecraft client', 'safe Minecraft client', 'free Minecraft client'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} ${ubuntu.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

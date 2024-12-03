'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full z-50 bg-[#0F0607]/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="Flarial Logo" 
              width={32} 
              height={32} 
              priority
              style={{ width: '2rem', height: 'auto' }}
              className="h-auto" 
            />
            <span className="ml-2 text-white font-medium navbar-font">Flarial</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors navbar-font">
              Home
            </Link>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-300 hover:text-white transition-colors navbar-font"
            >
              Features
            </button>
            <Link href="/blog" className="text-gray-300 hover:text-white transition-colors navbar-font">
              Blog
            </Link>
            <div className="flex items-center gap-4 ml-4">
              <a
                href="https://discord.gg/flarialmc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05C3.6 19.11 5.7 19.9 7.67 20.46c.03 0 .06-.01.07-.03.39-.53.74-1.09 1.04-1.69.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.3.59.65 1.15 1.04 1.69.02.02.04.03.07.03 1.97-.56 4.07-1.35 6.01-3.11.02-.02.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.02-.02-.03-.04-.03zM8.52 14.91c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.97-2.42 2.16-2.42 1.2 0 2.18 1.09 2.16 2.42 0 1.33-.96 2.42-2.16 2.42zm7.97 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.97-2.42 2.16-2.42 1.2 0 2.18 1.09 2.16 2.42 0 1.33-.96 2.42-2.16 2.42z"/>
                </svg>
              </a>
              <a
                href="https://raw.githubusercontent.com/flarialmc/newcdn/main/launcher/latest.zip"
                className="bg-[#9B1D1F] text-white px-4 py-2 rounded-lg hover:bg-[#8a1a1c] transition-colors font-ubuntu"
              >
                Download
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white transition-colors navbar-font"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('features')}
                className="text-gray-300 hover:text-white transition-colors navbar-font text-left"
              >
                Features
              </button>
              <Link 
                href="/blog" 
                className="text-gray-300 hover:text-white transition-colors navbar-font"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="https://raw.githubusercontent.com/flarialmc/newcdn/main/launcher/latest.zip"
                className="bg-[#9B1D1F] text-white px-4 py-2 rounded-lg hover:bg-[#8a1a1c] transition-colors font-ubuntu w-full text-left"
              >
                Download
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
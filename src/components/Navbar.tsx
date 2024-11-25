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
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.553.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </a>
              <button
                onClick={() => scrollToSection('download')}
                className="bg-[#9B1D1F] text-white px-4 py-2 rounded-lg hover:bg-[#8a1a1c] transition-colors font-ubuntu"
              >
                Download
              </button>
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
              <button
                onClick={() => scrollToSection('download')}
                className="bg-[#9B1D1F] text-white px-4 py-2 rounded-lg hover:bg-[#8a1a1c] transition-colors font-ubuntu w-full text-left"
              >
                Download
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B1D1F]/95 via-[#771515]/90 to-black/95" />
        {/* Add bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F0607] to-transparent" />
        <Image
          src="/background.webp"
          alt="Background"
          fill
          className="object-cover opacity-30"
          quality={100}
          sizes="100vw"
        />
        
        <div className="container mx-auto text-center relative z-10 px-4">
          <Image
            src="/logo.svg"
            alt="Flarial Logo"
            width={180}
            height={180}
            style={{ width: '180px', height: 'auto' }}
            className="mx-auto mb-8 animate-float"
            priority
          />
          <h1 className="text-7xl font-bold mb-4 text-white font-space-grotesk animate-fade-in">
            Flarial Client
          </h1>
          <p className="text-xl mb-12 text-white font-ubuntu max-w-2xl mx-auto animate-fade-in-delayed">
            A utility client for Minecraft Windows 10 & 11 Edition
          </p>
          <div className="flex gap-6 justify-center items-center">
            <a
              href="https://raw.githubusercontent.com/flarialmc/newcdn/ma/launcher/latest.zip"
              className="bg-white text-[#9B1D1F] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-ubuntu flex items-center gap-2 hover:scale-105 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 4H4v12h12V8h-6V4zM9 14H6v-2h3v2zm0-4H6V8h3v2zm5 4h-3v-2h3v2zm0-4h-3V8h3v2z"/>
              </svg>
              Download
            </a>
            <a
              href="https://ko-fi.com/flarialmc"
              className="bg-[#29ABE0] text-white px-8 py-3 rounded-lg hover:bg-[#228ab4] transition-all duration-300 font-ubuntu flex items-center gap-2 hover:scale-105 font-medium relative overflow-hidden border-2 border-[#29ABE0]/50"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
              </svg>
              Donate
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-[#0F0607] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 font-space-grotesk text-[#9B1D1F]">
              Features That Set Us Apart
            </h2>
            <p className="text-xl text-gray-300 font-ubuntu">
              Experience Minecraft like never before with our carefully crafted features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 font-ubuntu">
            <div className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-[#9B1D1F]/20 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#9B1D1F]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#9B1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-100">Performance Boost</h3>
              <p className="text-gray-300 leading-relaxed">
                Experience Minecraft like never before with our advanced FPS boost technology. 
                Enjoy smooth gameplay even on lower-end systems with our optimized client.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-[#9B1D1F]/20 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#9B1D1F]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#9B1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-100">Custom Modifications</h3>
              <p className="text-gray-300 leading-relaxed">
                Enhance your gameplay with carefully selected quality-of-life improvements
                and modern features that respect Minecraft's core experience.
              </p>
            </div>
            <div className="p-8 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 hover:border-[#9B1D1F]/20 hover:-translate-y-1">
              <div className="w-14 h-14 bg-[#9B1D1F]/10 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#9B1D1F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-100">Safety First</h3>
              <p className="text-gray-300 leading-relaxed">
                Play with confidence knowing our client is 100% safe and transparent.
                Regular updates and community-driven development ensure your security.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="endorsements" className="py-24 bg-[#0F0607] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 font-space-grotesk text-[#9B1D1F]">
              Trusted By The Best
            </h2>
            <p className="text-xl text-gray-300 font-ubuntu">
              See what influential players have to say about Flarial
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i}
                className="p-8 bg-gray-800 rounded-xl shadow-lg border border-gray-700 flex flex-col hover:border-[#9B1D1F]/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gray-700 rounded-full"></div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-100">Minecraft Pro {i}</h3>
                    <p className="text-gray-400">@minecraftpro{i}</p>
                  </div>
                </div>
                <p className="text-gray-300 flex-grow">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="videos" className="py-24 bg-[#0F0607] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 font-space-grotesk text-[#9B1D1F]">
              Videos Featuring Flarial
            </h2>
            <p className="text-xl text-gray-300 font-ubuntu">
              Watch content creators showcase Flarial in action
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace these video IDs with actual Flarial videos */}
            {[
              'dQw4w9WgXcQ',
              'dQw4w9WgXcQ',
              'dQw4w9WgXcQ'
            ].map((videoId, index) => (
              <div key={index} className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-[#9B1D1F]/20 transition-all duration-300">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={`Flarial Feature Video ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-gradient-to-b from-[#0F0607] to-[#20090C] relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-8 font-space-grotesk text-[#9B1D1F]">
              The Flarial Story
            </h2>
            <div className="space-y-8 font-ubuntu">
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Born from the passion of Minecraft enthusiasts, Flarial is more than just another 
                  Minecraft client - it's a community-driven project dedicated to enhancing your 
                  gameplay experience while maintaining the game's integrity.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Our team of experienced developers works tirelessly to create a client that 
                  combines performance optimization, useful features, and absolute safety. Whether 
                  you're a casual player or competitive PvPer, Flarial is designed with you in mind.
                </p>
              </div>
              <div className="bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Join thousands of satisfied players who have already discovered the perfect 
                  balance between vanilla Minecraft and enhanced gameplay with Flarial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

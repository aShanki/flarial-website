import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#9B1D1F]/95 via-[#771515]/90 to-black/95 animate-gradient" />
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
              href="https://raw.githubusercontent.com/flarialmc/newcdn/main/launcher/latest.zip"
              className="bg-white text-[#9B1D1F] px-8 py-3 rounded-lg hover:bg-gray-100 transition-all duration-300 font-ubuntu flex items-center gap-2 hover:scale-105 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 4H4v12h12V8h-6V4zM9 14H6v-2h3v2zm0-4H6V8h3v2zm5 4h-3v-2h3v2zm0-4h-3V8h3v2z"/>
              </svg>
              Download
            </a>
            <a
              href="https://discord.gg/flarialmc"
              className="bg-[#5865F2] text-white px-8 py-3 rounded-lg hover:bg-[#4752C4] transition-all duration-300 font-ubuntu flex items-center gap-2 hover:scale-105 font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.553.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Discord
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

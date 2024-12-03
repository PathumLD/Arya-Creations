import React from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';
import { FloatingElements } from '../backgrounds/FloatingElements';
import { MetallicPattern } from '../backgrounds/MetallicPattern';

export function Hero() {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 object-cover w-full h-full"
        src="https://videos.pexels.com/video-files/6046358/6046358-sd_640_360_24fps.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <MetallicPattern />
      <FloatingElements count={15} />

      {/* Content */}
      <div className="container relative px-6 mx-auto text-center">
        <AnimatedSection delay={200}>
          <h1 className="mb-6 text-4xl font-bold md:text-6xl text-zinc-100">
            Transforming Metal into
            <span className="block mt-2 text-transparent bg-gradient-to-r from-zinc-200 to-zinc-400 bg-clip-text">
              Timeless Art
            </span>
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={400}>
          <p className="max-w-2xl mx-auto mb-8 text-lg md:text-xl text-zinc-300">
            We breathe new life into discarded metal, creating stunning sculptures that tell stories of transformation and beauty.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600}>
          <a
            href="#gallery"
            className="inline-block px-8 py-3 transition-all duration-300 transform rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-100 hover:scale-105"
          >
            Explore Our Work
          </a>
        </AnimatedSection>
      </div>

      <div className="absolute -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-zinc-400" />
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { GalleryItem } from './GalleryItem';
import { AnimatedSection } from '../shared/AnimatedSection';
import { FloatingElements } from '../backgrounds/FloatingElements';
import { MetallicPattern } from '../backgrounds/MetallicPattern';
import { Link } from '../layout/Link';
import { projects } from '../../data/projects';

const featuredProjects = projects.filter(project => project.featured);

export function Gallery() {
  const [selectedSculpture, setSelectedSculpture] = useState(null);

  return (
    <section id="gallery" className="relative py-20 overflow-hidden bg-zinc-800">
      <MetallicPattern variant="light" />
      <FloatingElements count={12} />

      <div className="container relative px-6 mx-auto">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-16">
            <h2 className="text-3xl font-bold md:text-4xl text-zinc-100">
              Featured Works
            </h2>
            <Link href="/projects" className="flex items-center space-x-2 group text-zinc-300 hover:text-zinc-100">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featuredProjects.map((sculpture, index) => (
            <GalleryItem
              key={sculpture.id}
              sculpture={sculpture}
              onClick={() => setSelectedSculpture(sculpture)}
              delay={index * 200}
            />
          ))}
        </div>
      </div>

      {selectedSculpture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div className="relative w-full max-w-4xl animate-fade-in">
            <button
              className="absolute right-0 transition-colors duration-200 -top-12 text-zinc-300 hover:text-zinc-100"
              onClick={() => setSelectedSculpture(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedSculpture.image}
              alt={selectedSculpture.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 mb-3 text-sm rounded-full bg-zinc-700 text-zinc-300">
                {selectedSculpture.category}
              </span>
              <h3 className="mb-2 text-2xl font-bold text-zinc-100">{selectedSculpture.title}</h3>
              <p className="text-zinc-300">{selectedSculpture.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
import React, { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { Link } from '../layout/Link';
import { AnimatedSection } from '../shared/AnimatedSection';
import { FloatingElements } from '../backgrounds/FloatingElements';
import { MetallicPattern } from '../backgrounds/MetallicPattern';
import { projects } from '../../data/projects';

export function ProjectsPage() {
  const [selectedSculpture, setSelectedSculpture] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map(s => s.category))];
  const filteredSculptures = selectedCategory === 'All' 
    ? projects 
    : projects.filter(s => s.category === selectedCategory);

  return (
    <section className="relative min-h-screen bg-zinc-900 pt-24 pb-20 overflow-hidden">
      <MetallicPattern variant="dark" />
      <FloatingElements count={15} />

      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between mb-12">
          <Link href="/" className="flex items-center space-x-2 text-zinc-300 hover:text-zinc-100">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-100">All Projects</h1>
        </div>

        <AnimatedSection delay={200}>
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-zinc-100 text-zinc-900'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSculptures.map((sculpture, index) => (
            <AnimatedSection key={sculpture.id} delay={index * 100}>
              <div
                className="group relative cursor-pointer bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                onClick={() => setSelectedSculpture(sculpture)}
              >
                <div className="aspect-[4/3] sm:aspect-square">
                  <img
                    src={sculpture.image}
                    alt={sculpture.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-2 py-1 bg-zinc-700/80 text-zinc-300 text-xs rounded-full mb-2">
                      {sculpture.category}
                    </span>
                    <h3 className="text-lg font-bold text-zinc-100 mb-1">{sculpture.title}</h3>
                    <p className="text-sm text-zinc-300 line-clamp-2">{sculpture.description}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {selectedSculpture && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full animate-fade-in">
            <button
              className="absolute -top-12 right-0 text-zinc-300 hover:text-zinc-100 transition-colors duration-200"
              onClick={() => setSelectedSculpture(null)}
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedSculpture.image}
              alt={selectedSculpture.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center">
              <span className="inline-block px-3 py-1 bg-zinc-700 text-zinc-300 text-sm rounded-full mb-3">
                {selectedSculpture.category}
              </span>
              <h3 className="text-2xl font-bold text-zinc-100 mb-2">{selectedSculpture.title}</h3>
              <p className="text-zinc-300">{selectedSculpture.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
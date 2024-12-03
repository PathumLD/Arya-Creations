import React from 'react';
import { AnimatedSection } from '../shared/AnimatedSection';

interface GalleryItemProps {
  sculpture: {
    id: number;
    title: string;
    description: string;
    image: string;
    category: string;
  };
  onClick: () => void;
  delay: number;
}

export function GalleryItem({ sculpture, onClick, delay }: GalleryItemProps) {
  return (
    <AnimatedSection delay={delay}>
      <div
        className="group relative cursor-pointer bg-zinc-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
        onClick={onClick}
      >
        <div className="aspect-square">
          <img
            src={sculpture.image}
            alt={sculpture.title}
            className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6 backdrop-blur-sm">
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
  );
}
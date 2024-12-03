import React from 'react';
import { Wrench, Recycle, Award } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';
import { FloatingElements } from '../backgrounds/FloatingElements';
import { MetallicPattern } from '../backgrounds/MetallicPattern';

export function About() {
  return (
    <section id="about" className="relative py-20 bg-zinc-900 overflow-hidden">
      <MetallicPattern variant="dark" />
      <FloatingElements count={10} />

      <div className="container mx-auto px-6 relative">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-100 mb-16">
            Our Story
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <AnimatedSection delay={200}>
              <p className="text-zinc-300 leading-relaxed">
                At Arya Creation, we believe in the extraordinary potential of ordinary materials. Our journey began with a simple vision: to transform discarded metal into breathtaking works of art that challenge perceptions and inspire change.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={400}>
              <p className="text-zinc-300 leading-relaxed">
                Each piece we create tells a unique story of transformation, combining traditional craftsmanship with innovative techniques to give new life to forgotten materials.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={600}>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <Wrench className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
                  <p className="text-zinc-300">Craftsmanship</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <Recycle className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
                  <p className="text-zinc-300">Sustainability</p>
                </div>
                <div className="text-center transform hover:scale-105 transition-transform duration-300">
                  <Award className="h-8 w-8 text-zinc-400 mx-auto mb-2" />
                  <p className="text-zinc-300">Excellence</p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1605117882932-f9e32b03fea9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                alt: "Sculpting Process",
                delay: 200
              },
              {
                src: "https://images.unsplash.com/photo-1582457601528-849198f26391?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                alt: "Workshop",
                delay: 400
              },
              {
                src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                alt: "Tools",
                delay: 600
              },
              {
                src: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                alt: "Final Product",
                delay: 800
              }
            ].map((image, index) => (
              <AnimatedSection key={index} delay={image.delay}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="rounded-lg object-cover h-48 w-full transform hover:scale-105 transition-transform duration-500"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
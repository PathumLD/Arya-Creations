import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { AnimatedSection } from '../shared/AnimatedSection';
import { FloatingElements } from '../backgrounds/FloatingElements';
import { MetallicPattern } from '../backgrounds/MetallicPattern';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-20 bg-zinc-900 overflow-hidden">
      <MetallicPattern variant="dark" />
      <FloatingElements count={8} />

      <div className="container mx-auto px-6 relative">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-100 mb-16">
            Get in Touch
          </h2>
        </AnimatedSection>

        <div className="max-w-2xl mx-auto backdrop-blur-sm bg-zinc-800/50 p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <AnimatedSection delay={200}>
              <div>
                <label htmlFor="name" className="block text-zinc-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-300"
                  required
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div>
                <label htmlFor="email" className="block text-zinc-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-300"
                  required
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={600}>
              <div>
                <label htmlFor="message" className="block text-zinc-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all duration-300 resize-none"
                  required
                ></textarea>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={800}>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-zinc-100 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </AnimatedSection>
          </form>
        </div>
      </div>
    </section>
  );
}
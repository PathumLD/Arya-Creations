import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, ChevronDown } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed lg:px-6 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/30 backdrop-blur-lg shadow-md' : 'bg-transparent'
    }`}>
      <nav className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Hammer className="w-8 h-8 text-zinc-200" />
            <span className="text-xl font-bold text-zinc-200">Arya Creation</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="items-center hidden space-x-8 md:flex">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#gallery">Gallery</Link>
            <Link href="#contact">Contact</Link>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-zinc-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute left-0 right-0 flex items-center justify-center text-lg md:hidden top-full bg-black/75 backdrop-blur-xl">
            <div className="flex flex-col px-6 py-4 space-y-12">
              <Link href="#home" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="#about" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="#gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
              <Link href="#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
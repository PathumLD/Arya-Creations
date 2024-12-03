import React, { useState, useEffect } from 'react';
import { Cog } from 'lucide-react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / totalScroll) * 100;
      
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <div className="h-32 w-1 bg-zinc-600 rounded-full relative">
        <div
          className="absolute w-1 bg-zinc-600 rounded-full transition-all duration-300"
          style={{ height: `${scrollProgress}%`, bottom: 0 }}
        ></div>
        <Cog
          className={`absolute -left-2.5 text-zinc-400 transition-all duration-300 ${
            scrollDirection === 'down' ? 'animate-spin-slow' : 'animate-spin-reverse-slow'
          }`}
          style={{ top: `${scrollProgress}%`, transform: 'translateY(-50%)' }}
        />
      </div>
    </div>
  );
}
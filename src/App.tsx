import React from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/home/Hero';
import { About } from './components/about/About';
import { Gallery } from './components/gallery/Gallery';
import { Contact } from './components/contact/Contact';
import { ProjectsPage } from './components/projects/ProjectsPage';
import { ScrollProgress } from './components/shared/ScrollProgress';

function App() {
  const path = window.location.pathname;

  if (path === '/projects') {
    return (
      <div className="min-h-screen bg-zinc-900 text-zinc-100">
        <Header />
        <ProjectsPage />
        <ScrollProgress />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <ScrollProgress />
    </div>
  );
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';

function App() {
  return (
    <div className="relative min-h-screen bg-[#101820] text-[#f6f1e8] selection:bg-[#c4d600] selection:text-[#101820]">
      
      {/* 1. The Fixed Visual Background layer */}
      {/* This uses the mesh-bg class from your index.css to create a beautiful static gradient behind the scrolling content */}
      <div className="fixed inset-0 mesh-bg pointer-events-none z-0 opacity-60" />

      {/* 2. Global Utilities */}
      <CursorGlow />
      <ScrollProgress />
      
      {/* 3. The Navigation */}
      <Navbar />

      {/* 4. The Staked Scrolling Content */}
      <main className="relative z-10 flex flex-col w-full overflow-hidden">
        {/* Sections render one after another */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
    </div>
  );
}

export default App;
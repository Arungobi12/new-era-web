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
    <div className="relative min-h-screen bg-[var(--ink)] text-[color:var(--paper)] selection:bg-[var(--lime)] selection:text-[var(--ink)]">

      {/* Fixed background */}
      <div className="fixed inset-0 mesh-bg pointer-events-none z-0 opacity-60" />

      {/* Subtle vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-70" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,46,46,0.10),transparent_55%),radial-gradient(circle_at_20%_90%,rgba(124,58,237,0.10),transparent_55%)]" />
      </div>



      <CursorGlow />
      <ScrollProgress />

      <Navbar />

      <main className="relative z-10 flex flex-col w-full overflow-hidden">
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
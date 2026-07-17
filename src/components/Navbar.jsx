import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home', page: 'home' },
  { label: 'Profile', href: '#profile', page: 'profile' },
  { label: 'Stack', href: '#stack', page: 'stack' },
  { label: 'Work', href: '#work', page: 'work' },
  { label: 'Contact', href: '#contact', page: 'contact' },
];

const Navbar = () => {
  // Add state to track the active section
  const [activePage, setActivePage] = useState('home');

  // Watch the scroll position and update the active tab automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.page));
      // Add a slight offset so it triggers right before the section hits the very top
      const scrollPosition = window.scrollY + 200; 

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActivePage(navLinks[i].page);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Run once on mount to set initial state
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#f8f7ff]/10 bg-[#07070a]/80 backdrop-blur-2xl">

      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070a]">
          <span className="grid size-9 place-items-center rounded-full bg-[#ff2e2e] text-sm font-black text-[#07070a] transition group-hover:rotate-6">
            AG
          </span>
          <span className="hidden text-sm font-black uppercase tracking-[0.24em] text-[#f8f7ff] sm:block">
            S Arun Gobi
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full border border-[#f8f7ff]/15 bg-[#f8f7ff]/5 p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition 
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7c3aed] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070a] 
              ${
                activePage === link.page
                  ? 'bg-[#f8f7ff]/20 text-[#f8f7ff]' 
                  : 'text-[#f8f7ff]/60 hover:bg-[#f8f7ff]/10 hover:text-[#f8f7ff]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social Links & CTA */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/arungobi12"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-[#f8f7ff]/15 text-[#f8f7ff] transition hover:border-[#7c3aed] hover:text-[#7c3aed]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-[#f8f7ff]/15 text-[#f8f7ff] transition hover:border-[#ff2e2e] hover:text-[#ff2e2e]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-[#f8f7ff]/20 px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#f8f7ff] transition hover:bg-[#ff2e2e] sm:inline-flex"
          >
            Let&apos;s build
          </a>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex gap-2 overflow-x-auto border-t border-[#f8f7ff]/10 px-4 py-2 md:hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`shrink-0 rounded-full px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] transition ${
              activePage === link.page
                ? 'bg-[#f8f7ff]/20 text-[#f8f7ff]' 
                : 'bg-[#f8f7ff]/5 text-[#f8f7ff]/65 hover:bg-[#f8f7ff]/10 hover:text-[#f8f7ff]'
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
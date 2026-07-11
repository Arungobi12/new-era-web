import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference">
      <div className="text-2xl font-bold tracking-tighter">S ARUN GOBI</div>
      <div className="flex gap-8 text-sm font-semibold tracking-widest uppercase">
        <a href="#about" className="hover:opacity-50 transition-opacity">About</a>
        <a href="#projects" className="hover:opacity-50 transition-opacity">Work</a>
        <a href="https://github.com/arungobi12" target="_blank" rel="noreferrer" className="hover:opacity-50 transition-opacity">Github</a>
      </div>
    </nav>
  );
};

export default Navbar;
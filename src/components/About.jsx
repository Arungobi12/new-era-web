import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-white text-black py-32 px-12 min-h-screen flex flex-col justify-center items-center text-center">
      <p className="uppercase tracking-widest text-sm font-semibold mb-8">(Who I Am)</p>
      <h2 className="text-[7vw] font-black leading-[0.9] tracking-tighter uppercase max-w-6xl">
        Data Driven.<br /> Technology Built.
      </h2>
      <p className="mt-12 text-2xl font-serif max-w-3xl leading-relaxed">
        I am a developer specializing in full-stack architecture and data analytics. From leading teams to victory at the Smart India Hackathon to deploying enterprise-level web applications, I turn complex problems into seamless digital realities.
      </p>
    </section>
  );
};

export default About;
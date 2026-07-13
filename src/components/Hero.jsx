import { useEffect, useState } from 'react';
import { FaArrowDown, FaArrowRight, FaCode, FaDatabase, FaLayerGroup } from 'react-icons/fa6';
import heroGraphic from '../assets/hero.png';
import AnimatedTitle from './AnimatedTitle';

const words = ['interfaces', 'systems', 'dashboards', 'experiences'];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((current) => (current + 1) % words.length);
    }, 1700);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[#101820] pt-24">
      <div className="mesh-bg absolute inset-0 -z-10" />
      <div className="mx-auto grid min-h-[calc(100svh-6rem)] max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="animate-rise">
          <div className="mb-8 flex flex-wrap gap-3">
            {['Full-stack developer', 'Data analytics', 'React UI'].map((item) => (
              <span key={item} className="rounded-full border border-[#f6f1e8]/12 bg-[#f6f1e8]/6 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f6f1e8]/70">
                {item}
              </span>
            ))}
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.9] tracking-tight text-[#f6f1e8] sm:text-7xl lg:text-[6.8rem]">
            <AnimatedTitle text="I design and build useful" />
            <br />
            <span className="word-swap inline-block text-[#ff6b4a]" key={words[wordIndex]}>{words[wordIndex]}.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#f6f1e8]/68 sm:text-xl">
            Portfolio of S Arun Gobi, a developer who blends product thinking, full-stack code, and data clarity into web experiences that feel sharp and work hard.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a href="#work" className="inline-flex h-13 items-center justify-center gap-3 rounded-full bg-[#ff6b4a] px-6 text-sm font-black uppercase tracking-[0.14em] text-[#101820] transition hover:bg-[#c4d600]">
              See work <FaArrowRight />
            </a>
            <a href="#profile" className="inline-flex h-13 items-center justify-center gap-3 rounded-full border border-[#f6f1e8]/15 px-6 text-sm font-black uppercase tracking-[0.14em] text-[#f6f1e8] transition hover:border-[#00b2a9] hover:text-[#00b2a9]">
              Explore profile <FaArrowDown />
            </a>
          </div>
        </div>

        <div className="animate-rise relative [animation-delay:120ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-[#00b2a9]/15 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#f6f1e8]/12 bg-[#f6f1e8]/8 p-4 shadow-2xl shadow-black/30">
            <div className="rounded-[1.5rem] bg-[#f6f1e8] p-5 text-[#101820]">
              <div className="flex items-center justify-between border-b border-[#101820]/10 pb-4">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#101820]/55">Live capability board</p>
                <span className="rounded-full bg-[#c4d600] px-3 py-1 text-xs font-black">Open</span>
              </div>

              <img src={heroGraphic} alt="Layered technology graphic" className="float-layer mx-auto my-8 w-full max-w-[320px]" />

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  [FaCode, 'Frontend', 'React systems'],
                  [FaDatabase, 'Data', 'Insight flows'],
                  [FaLayerGroup, 'Product', 'Clean delivery'],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-2xl border border-[#101820]/10 bg-[#101820] p-4 text-[#f6f1e8]">
                    <Icon className="text-[#00b2a9]" />
                    <p className="mt-4 text-sm font-black">{title}</p>
                    <p className="mt-1 text-xs text-[#f6f1e8]/55">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-[#f6f1e8]/10 bg-[#f6f1e8]/5 py-4">
        <div className="ticker-track text-sm font-black uppercase tracking-[0.24em] text-[#f6f1e8]/55">
          <span>React</span><span>APIs</span><span>Dashboards</span><span>Product UI</span><span>Deployment</span>
          <span>React</span><span>APIs</span><span>Dashboards</span><span>Product UI</span><span>Deployment</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;

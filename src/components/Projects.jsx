import { useMemo, useState } from 'react';
import { FaArrowRight, FaGithub } from 'react-icons/fa6';
import AnimatedTitle from './AnimatedTitle';
import Reveal from './Reveal';

const projects = [
  {
    title: 'Smart India Hackathon Build',
    label: 'Product sprint',
    color: '#ff6b4a',
    description: 'A rapid problem-solving platform concept shaped for teamwork, clarity, and presentation under pressure.',
    result: 'Structured workflows, strong pitch flow, and a usable product direction.',
    stack: ['React', 'Team flow', 'Product thinking', 'Presentation'],
  },
  {
    title: 'Analytics Command Center',
    label: 'Data interface',
    color: '#00b2a9',
    description: 'A dashboard system for turning metrics into readable insight with filtering, visual hierarchy, and decision cards.',
    result: 'Cleaner data reading, faster comparison, and stronger executive summaries.',
    stack: ['Charts', 'APIs', 'Dashboards', 'Reports'],
  },
  {
    title: 'Personal Portfolio OS',
    label: 'Brand system',
    color: '#c4d600',
    description: 'A polished portfolio experience built around personality, proof, work samples, and a direct contact path.',
    result: 'A stronger first impression for recruiters, collaborators, and clients.',
    stack: ['Vite', 'React', 'Tailwind', 'Responsive UI'],
  },
];

const Projects = () => {
  const [active, setActive] = useState(0);
  const selected = projects[active];

  const activeTop = useMemo(() => {
    // Estimate vertical spacing from UI (button height + gap). Kept simple for a clean look.
    return active * 94; // px offset approximation
  }, [active]);

  return (
    <section id="work" className="min-h-screen bg-[#f6f1e8] px-5 pb-24 pt-32 text-[#101820] sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff6b4a]">Selected Work</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
                <AnimatedTitle text="Projects framed like case studies, not just cards." accentWords={['case', 'studies']} />
              </h2>
            </div>
            <a
              href="https://github.com/arungobi12"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-13 items-center justify-center gap-3 rounded-full border border-[#101820]/15 px-6 text-sm font-black uppercase tracking-[0.14em] transition hover:bg-[#101820] hover:text-[#f6f1e8]"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative">
            <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-full w-1">
              <div
                className="absolute left-0 top-0 h-[72px] w-1 rounded-full bg-[#ff6b4a] shadow-[0_0_0_6px_rgba(255,107,74,0.12)] transition-all duration-500"
                style={{ transform: `translateY(${activeTop}px)` }}
              />
            </div>

            <div className="grid gap-3 pl-6">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`rounded-[1.5rem] border p-5 text-left transition ${
                    active === index
                      ? 'border-[#101820] bg-[#101820] text-[#f6f1e8]'
                      : 'border-[#101820]/10 bg-white hover:border-[#101820]/35'
                  } ${active === index ? 'shine-border' : ''}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <p
                      className="text-xs font-black uppercase tracking-[0.2em]"
                      style={{ color: active === index ? project.color : '#ff6b4a' }}
                    >
                      {project.label}
                    </p>
                    <span className="text-sm font-black">0{index + 1}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-black">{project.title}</h3>
                </button>
              ))}
            </div>
          </div>

          <Reveal>
            <article key={selected.title} className="animate-reveal rounded-[2rem] border border-[#101820]/10 bg-white p-6 shadow-2xl shadow-[#101820]/8">
              <div className="min-h-[360px] rounded-[1.5rem] p-6 text-[#101820]" style={{ background: selected.color }}>
                <p className="text-xs font-black uppercase tracking-[0.24em] opacity-70">{selected.label}</p>
                <h3 className="mt-16 max-w-2xl text-4xl font-black leading-tight sm:text-6xl">{selected.title}</h3>
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
                <div>
                  <p className="text-lg leading-8 text-[#101820]/68">{selected.description}</p>
                  <p className="mt-5 rounded-2xl bg-[#f6f1e8] p-4 text-base font-bold leading-7 text-[#101820]">
                    {selected.result}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#101820]/45">Stack</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.stack.map((item, i) => (
                      <span
                        key={item}
                        style={{ animationDelay: `${i * 60}ms` }}
                        className="rounded-full border border-[#101820]/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#101820]/62 chip-in"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="mt-8 inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.16em] text-[#101820]"
                  >
                    Discuss similar work <FaArrowRight />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;

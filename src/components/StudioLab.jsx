import { useState } from 'react';
import { FaChartSimple, FaCodeBranch, FaDesktop, FaRocket } from 'react-icons/fa6';

const modes = [
  {
    title: 'Portfolio / Brand',
    icon: FaDesktop,
    output: 'A sharp personal site with hero story, proof, projects, contact flow, and recruiter-friendly structure.',
    timeline: '3-5 days',
    focus: ['Visual identity', 'Responsive sections', 'SEO basics', 'Deployment'],
  },
  {
    title: 'Dashboard',
    icon: FaChartSimple,
    output: 'A data interface that turns messy information into readable cards, charts, filters, and decisions.',
    timeline: '1-2 weeks',
    focus: ['Metrics design', 'Charts', 'API data', 'Export-ready views'],
  },
  {
    title: 'Full-stack App',
    icon: FaCodeBranch,
    output: 'A practical application with frontend screens, backend logic, authentication flow, and clean handoff.',
    timeline: '2-4 weeks',
    focus: ['React UI', 'API routes', 'Database shape', 'User workflow'],
  },
  {
    title: 'Launch Polish',
    icon: FaRocket,
    output: 'A final pass for speed, copy, responsive layout, interaction details, accessibility, and presentation.',
    timeline: '2-4 days',
    focus: ['Performance', 'UX fixes', 'Motion details', 'Final review'],
  },
];

const StudioLab = () => {
  const [activeMode, setActiveMode] = useState(0);
  const selected = modes[activeMode];
  const Icon = selected.icon;

  return (
    <section id="lab" className="relative overflow-hidden bg-[#f5f3ee] px-5 py-24 text-[#111217] sm:px-8 lg:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(124,58,237,0.08),transparent_35%,rgba(20,184,166,0.11))]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#6d28d9]">Build Lab</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              Choose a goal. See how I would shape it.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#55545d]">
              This makes the portfolio more than a gallery. It shows how I think, estimate, and turn an idea into a deliverable.
            </p>
          </div>

          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {modes.map((mode, index) => {
                const ModeIcon = mode.icon;

                return (
                  <button
                    key={mode.title}
                    type="button"
                    onClick={() => setActiveMode(index)}
                    className={`min-h-28 border p-4 text-left transition ${
                      activeMode === index
                        ? 'border-[#6d28d9] bg-[#111217] text-white'
                        : 'border-black/10 bg-white text-[#111217] hover:border-[#6d28d9]/40'
                    }`}
                  >
                    <ModeIcon className={activeMode === index ? 'text-[#2dd4bf]' : 'text-[#6d28d9]'} />
                    <span className="mt-5 block text-sm font-black">{mode.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="animate-reveal border border-black/10 bg-white p-6 shadow-2xl shadow-black/5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#6d28d9]">Selected path</p>
                  <h3 className="mt-3 text-3xl font-black">{selected.title}</h3>
                </div>
                <div className="grid size-14 place-items-center bg-[#111217] text-xl text-[#2dd4bf]">
                  <Icon />
                </div>
              </div>
              <p className="mt-6 text-lg leading-8 text-[#55545d]">{selected.output}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-[0.45fr_1fr]">
                <div className="border border-black/10 bg-[#f5f3ee] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#6d28d9]">Timeline</p>
                  <p className="mt-3 text-2xl font-black">{selected.timeline}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selected.focus.map((item) => (
                    <span key={item} className="border border-black/10 bg-[#f5f3ee] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#55545d]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioLab;

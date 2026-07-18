import { FaCode, FaDatabase, FaPenNib, FaServer, FaShieldHalved, FaChartLine } from 'react-icons/fa6';
import AnimatedTitle from './AnimatedTitle';
import Reveal from './Reveal';

const features = [
  {
    icon: FaCode,
    title: 'Interface work',
    label: 'From idea to usable UI',
    points: ['Hierarchy & layout systems', 'React component design', 'Motion that clarifies, not distracts'],
  },
  {
    icon: FaServer,
    title: 'Backend & systems',
    label: 'Reliable logic + clean handoff',
    points: ['API design & integrations', 'Auth flows & validation', 'Maintainable architecture'],
  },
  {
    icon: FaDatabase,
    title: 'Data clarity',
    label: 'Dashboards that read fast',
    points: ['Metrics → decisions', 'Filtering & visual hierarchy', 'Reports that tell a story'],
  },
  {
    icon: FaPenNib,
    title: 'Design taste',
    label: 'Polished feel, readable content',
    points: ['Copy clarity & typography', 'Brand-consistent visuals', 'Accessible interaction patterns'],
  },
  {
    icon: FaShieldHalved,
    title: 'Reliability',
    label: 'Performance + correctness',
    points: ['Testing basics & edge cases', 'Performance-minded UI', 'Ship-ready workflow'],
  },
  {
    icon: FaChartLine,
    title: 'Product delivery',
    label: 'From iteration to release',
    points: ['User-focused journeys', 'Fast iteration loops', 'Handoff notes + documentation'],
  },
];

const Features = () => {
  return (
    <section id="features" className="min-h-screen bg-[#f6f1e8] px-5 pb-24 pt-32 text-[#101820] sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.0fr_1.0fr] lg:items-end">
          <Reveal>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff6b4a]">Features</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              <AnimatedTitle text="Built like a studio: design, system, and delivery." accentWords={['studio']} />
            </h2>
          </Reveal>

          <Reveal delayMs={120} as="p" className="max-w-xl text-xl leading-9 text-[#101820]/68">
            A portfolio should explain what you do—and how it comes together. These are the capabilities I bring to product work.
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <Reveal
                key={f.title}
                as="article"
                delayMs={idx * 90}
                className="group rounded-[1.75rem] border border-[#101820]/10 bg-white p-6 shadow-2xl shadow-[#101820]/5 transition hover:-translate-y-1 hover:border-[#ff6b4a]/50"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="grid size-12 place-items-center rounded-2xl bg-[#101820] text-[#f6f1e8]">
                    <Icon className="text-[#ff6b4a]" />
                  </div>
                  <span className="text-sm font-black text-[#101820]/45">0{idx + 1}</span>
                </div>

                <h3 className="mt-6 text-2xl font-black">{f.title}</h3>
                <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-[#101820]/50">{f.label}</p>

                <ul className="mt-5 space-y-2">
                  {f.points.map((p) => (
                    <li key={p} className="flex gap-3 text-base leading-7 text-[#101820]/68">
                      <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[#00b2a9] shadow-[0_0_0_6px_rgba(0,178,169,0.12)]" />
                      {p}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 h-px w-full bg-[#101820]/10" />
                <p className="mt-5 text-sm font-bold text-[#101820]">
                  See relevant work in <a href="#work" className="underline underline-offset-4 decoration-[#ff6b4a]/60">Projects</a>.
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;


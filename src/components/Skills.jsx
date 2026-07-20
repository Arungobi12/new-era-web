import { FaChartLine, FaCode, FaDatabase, FaPenNib, FaServer, FaShieldHalved } from 'react-icons/fa6';
import AnimatedTitle from './AnimatedTitle';
import Reveal from './Reveal';

const groups = [
  { icon: FaCode, title: 'Interface', score: '95', items: ['React', 'Vite', 'Tailwind', 'Responsive layouts'] },
  { icon: FaServer, title: 'Backend', score: '82', items: ['APIs', 'Auth flow', 'Server logic', 'Integrations'] },
  { icon: FaDatabase, title: 'Data', score: '88', items: ['Analytics', 'Dashboards', 'Reports', 'Models'] },
  { icon: FaPenNib, title: 'Design Sense', score: '90', items: ['Hierarchy', 'Motion', 'Copy clarity', 'Brand feel'] },
  { icon: FaShieldHalved, title: 'Reliability', score: '84', items: ['Testing basics', 'Git workflow', 'Performance', 'Handoff'] },
  { icon: FaChartLine, title: 'Product', score: '91', items: ['User journeys', 'Metrics', 'Iteration', 'Delivery'] },
];

const Skills = () => {
  return (
    <section id="stack" className="min-h-screen bg-[#101820] px-5 pb-24 pt-32 text-[#f6f1e8] sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal variant="skills" className="block" delayMs={0}>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c4d600]">Stack</p>
            <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight sm:text-6xl">
              <AnimatedTitle text="A practical skill map for building modern web products." accentWords={['skill', 'modern']} />
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {groups.map((group, idx) => {
              const Icon = group.icon;
              const scoreNum = Number(group.score);

              return (
                <Reveal
                  key={group.title}
                  as="article"
                  variant="skills"
                  delayMs={idx * 110}
                  className="rounded-[1.75rem] border border-[#f6f1e8]/10 bg-[#f6f1e8]/6 p-5"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="grid size-12 place-items-center rounded-2xl bg-[#00b2a9] text-[#101820]">
                      <Icon />
                    </div>
                    <p className="text-4xl font-black text-[#ff6b4a]">{group.score}</p>
                  </div>

                  <div className="mt-3">
                    <div className="h-2 w-full overflow-hidden rounded-full bg-[#f6f1e8]/10">
                      <div
                        className="h-full origin-left rounded-full bg-[#00b2a9]/70"
                        style={{ width: `${scoreNum}%`, transformOrigin: 'left center' }}
                      />
                    </div>
                  </div>

                  <h3 className="mt-6 text-2xl font-black">{group.title}</h3>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item, i) => (
                      <span
                        key={item}
                        className="rounded-full bg-[#101820] px-3 py-2 text-xs font-bold text-[#f6f1e8]/68 ring-1 ring-[#f6f1e8]/10"
                        style={{ animation: `chip-in 420ms cubic-bezier(0.2, 0.8, 0.2, 1) both`, animationDelay: `${i * 60}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

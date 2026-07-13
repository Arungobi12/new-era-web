import { FaBolt, FaBullseye, FaLayerGroup } from 'react-icons/fa6';

const highlights = [
  {
    icon: FaBullseye,
    title: 'Outcome-first thinking',
    text: 'Every section, screen, and feature is shaped around what the visitor or user should do next.',
  },
  {
    icon: FaLayerGroup,
    title: 'Full-stack clarity',
    text: 'I can connect the visible interface with the system behind it, so projects feel cohesive.',
  },
  {
    icon: FaBolt,
    title: 'Fast polish',
    text: 'I build quickly, but keep enough structure for the work to be extended, explained, and shipped.',
  },
];

const Signature = () => {
  return (
    <section className="overflow-hidden bg-[#08090d] text-white">
      <div className="border-y border-white/10 py-8">
        <div className="signature-marquee text-6xl font-black uppercase leading-none tracking-tight text-white/10 sm:text-8xl lg:text-9xl">
          <span>Build useful software with taste</span>
          <span>Build useful software with taste</span>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-5 px-5 py-20 sm:px-8 lg:grid-cols-3">
        {highlights.map((item) => {
          const Icon = item.icon;

          return (
            <article key={item.title} className="group border border-white/10 bg-white/[0.035] p-6 transition hover:-translate-y-1 hover:border-[#2dd4bf]/50 hover:bg-white/[0.06]">
              <div className="flex size-12 items-center justify-center border border-white/10 bg-[#111217] text-[#2dd4bf] transition group-hover:border-[#2dd4bf]/50">
                <Icon />
              </div>
              <h3 className="mt-8 text-2xl font-black text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-white/62">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Signature;

import AnimatedTitle from './AnimatedTitle';
import Reveal from './Reveal';

const proof = [
  ['01', 'SIH mindset', 'Comfortable with fast problem solving, teamwork, and presenting ideas clearly.'],
  ['02', 'Builder range', 'Can move from interface design to API logic, analytics, and deployment.'],
  ['03', 'User focus', 'I care about clear flows, readable content, and software that feels easy to use.'],
];

const About = () => {
  return (
    <section id="profile" className="min-h-screen bg-[#f6f1e8] px-5 pb-24 pt-32 text-[#101820] sm:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal className="reveal-target" as="div" delayMs={0}>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#ff6b4a]">Profile</p>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.98] tracking-tight sm:text-6xl">
                <AnimatedTitle text="I turn raw ideas into clean products with structure, speed, and taste." accentWords={['clean', 'products']} />
              </h2>
            </div>
          </Reveal>

          <Reveal as="p" delayMs={120} className="max-w-2xl text-xl leading-9 text-[#101820]/68">
            I am S Arun Gobi, a full-stack developer with a strong interest in data analytics and practical product design. I like building interfaces that look polished, systems that behave reliably, and project stories that are easy for recruiters, clients, and teams to understand.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {proof.map(([number, title, text], idx) => (
            <Reveal
              key={title}
              as="article"
              delayMs={idx * 80}
              className="group rounded-[1.75rem] border border-[#101820]/10 bg-white p-6 transition hover:-translate-y-1 hover:border-[#ff6b4a]/50"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-black text-[#ff6b4a]">{number}</p>
                <span className="h-2 w-16 rounded-full bg-[#00b2a9] transition group-hover:w-24" />
              </div>
              <h3 className="mt-8 text-2xl font-black">{title}</h3>
              <p className="mt-4 text-base leading-7 text-[#101820]/62">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

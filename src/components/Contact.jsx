import { useMemo, useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import AnimatedTitle from './AnimatedTitle';
import Reveal from './Reveal';

const Contact = () => {
  const [form, setForm] = useState({ name: '', type: 'Portfolio website', message: '' });
  const mailHref = useMemo(() => {
    const subject = encodeURIComponent(`${form.type} inquiry from ${form.name || 'Portfolio visitor'}`);
    const body = encodeURIComponent(form.message || 'Hi Arun, I saw your portfolio and would like to connect.');
    return `mailto:arungobi12@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden bg-[#101820] px-5 pb-24 pt-32 text-[#f6f1e8] sm:px-8 lg:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,107,74,0.18),transparent_30%),radial-gradient(circle_at_80%_40%,rgba(0,178,169,0.16),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c4d600]">Contact</p>
              <h2 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight sm:text-7xl">
                <AnimatedTitle text="Have an idea worth building?" accentWords={['idea']} />
              </h2>
              <p className="mt-7 max-w-2xl text-xl leading-9 text-[#f6f1e8]/68">
                Send the rough version. I can help shape the interface, system, dashboard, or portfolio into something clear and launch-ready.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="mailto:arungobi12@gmail.com"
                  className="rounded-full bg-[#f6f1e8] px-5 py-3 text-sm font-black text-[#101820] transition hover:bg-[#ff6b4a]"
                >
                  <FaEnvelope className="mr-2 inline" /> Email
                </a>
                <a
                  href="https://github.com/arungobi12"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#f6f1e8]/15 px-5 py-3 text-sm font-black transition hover:border-[#00b2a9] hover:text-[#00b2a9]"
                >
                  <FaGithub className="mr-2 inline" /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#f6f1e8]/15 px-5 py-3 text-sm font-black transition hover:border-[#c4d600] hover:text-[#c4d600]"
                >
                  <FaLinkedinIn className="mr-2 inline" /> LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="rounded-[2rem] border border-[#f6f1e8]/10 bg-[#f6f1e8] p-5 text-[#101820]">
              <div className="grid gap-3">
                <input
                  value={form.name}
                  onChange={(event) => setForm({ ...form, name: event.target.value })}
                  className="shine-border h-14 rounded-2xl border border-[#101820]/10 bg-white px-4 text-sm font-bold outline-none transition focus:border-[#ff6b4a]"
                  placeholder="Your name"
                />
                <select
                  value={form.type}
                  onChange={(event) => setForm({ ...form, type: event.target.value })}
                  className="shine-border h-14 rounded-2xl border border-[#101820]/10 bg-white px-4 text-sm font-bold outline-none transition focus:border-[#ff6b4a]"
                >
                  <option>Portfolio website</option>
                  <option>Dashboard</option>
                  <option>Full-stack app</option>
                  <option>Freelance project</option>
                </select>
                <textarea
                  value={form.message}
                  onChange={(event) => setForm({ ...form, message: event.target.value })}
                  className="shine-border min-h-36 resize-none rounded-2xl border border-[#101820]/10 bg-white p-4 text-sm font-bold outline-none transition focus:border-[#ff6b4a]"
                  placeholder="Tell me what you want to build"
                />
                <a
                  href={mailHref}
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-[#101820] text-sm font-black uppercase tracking-[0.16em] text-[#f6f1e8] transition hover:bg-[#ff6b4a] hover:text-[#101820]"
                >
                  Compose message
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={160} as="footer" className="mt-16 flex flex-col justify-between gap-4 border-t border-[#f6f1e8]/10 pt-8 text-sm font-bold text-[#f6f1e8]/55 sm:flex-row">
          <p>S Arun Gobi. Built with React, Tailwind CSS, and too much attention to detail.</p>
          <a href="#home" className="text-[#f6f1e8] transition hover:text-[#ff6b4a]">Back to top</a>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;

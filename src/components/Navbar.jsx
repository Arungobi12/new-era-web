import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { label: 'Home', href: '#home', page: 'home' },
  { label: 'Profile', href: '#profile' },
  { label: 'Stack', href: '#stack' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ activePage = 'home' }) => {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#f6f1e8]/10 bg-[#101820]/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid size-9 place-items-center bg-[#ff6b4a] text-sm font-black text-[#101820] transition group-hover:rotate-6">
            AG
          </span>
          <span className="hidden text-sm font-black uppercase tracking-[0.24em] text-[#f6f1e8] sm:block">
            S Arun Gobi
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-[#f6f1e8]/10 bg-[#f6f1e8]/5 p-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.18em] transition hover:bg-[#f6f1e8] hover:text-[#101820] ${
                activePage === (link.page || link.href.replace('#', ''))
                  ? 'bg-[#f6f1e8] text-[#101820]'
                  : 'text-[#f6f1e8]/60'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/arungobi12"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid size-10 place-items-center rounded-full border border-[#f6f1e8]/15 text-[#f6f1e8] transition hover:border-[#00b2a9] hover:text-[#00b2a9]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid size-10 place-items-center rounded-full border border-[#f6f1e8]/15 text-[#f6f1e8] transition hover:border-[#c4d600] hover:text-[#c4d600]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-[#f6f1e8] px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#101820] transition hover:bg-[#ff6b4a] sm:inline-flex"
          >
            Let&apos;s build
          </a>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto border-t border-[#f6f1e8]/10 px-4 py-2 md:hidden">
        {navLinks.map((link) => {
          const page = link.page || link.href.replace('#', '');

          return (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 rounded-full px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.16em] ${
                activePage === page
                  ? 'bg-[#f6f1e8] text-[#101820]'
                  : 'bg-[#f6f1e8]/6 text-[#f6f1e8]/65'
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

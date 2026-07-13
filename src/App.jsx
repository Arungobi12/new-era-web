import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import PageTransition from './components/PageTransition';

const pages = {
  home: Hero,
  profile: About,
  stack: Skills,
  work: Projects,
  contact: Contact,
};

const getPageFromHash = () => {
  const page = window.location.hash.replace('#', '') || 'home';
  return pages[page] ? page : 'home';
};

function App() {
  const [activePage, setActivePage] = useState(getPageFromHash);
  const Page = useMemo(() => pages[activePage], [activePage]);

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#101820] text-[#f6f1e8]">
      <CursorGlow />
      <ScrollProgress />
      <Navbar activePage={activePage} />
      <main>
        <PageTransition pageKey={activePage}>
          <Page />
        </PageTransition>
      </main>
    </div>
  );
}

export default App;

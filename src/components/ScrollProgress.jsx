import { useEffect, useState } from 'react';

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setProgress(Math.min(nextProgress, 100));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#ff6b4a] via-[#00b2a9] to-[#c4d600] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ScrollProgress;

import { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const updatePosition = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('pointermove', updatePosition);
    return () => window.removeEventListener('pointermove', updatePosition);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[60] hidden size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff6b4a]/18 blur-3xl md:block"
      style={{ left: position.x, top: position.y }}
    />
  );
};

export default CursorGlow;

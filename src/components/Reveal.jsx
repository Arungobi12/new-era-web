import { useEffect, useRef, useState } from 'react';

const Reveal = ({
  children,
  as: Component = 'div',
  className = '',
  rootMargin = '0px 0px -10% 0px',
  delayMs = 0,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <Component
      ref={ref}
      className={`${className} ${visible ? 'reveal-visible' : 'reveal-hidden'}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </Component>
  );
};

export default Reveal;

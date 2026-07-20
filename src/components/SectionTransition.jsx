import { useEffect, useRef, useState } from 'react';

/**
 * SectionTransition – wraps each section with a fullscreen transition overlay
 * that plays when the section scrolls into view.
 *
 * @param {object}   props
 * @param {ReactNode} props.children – The section content.
 * @param {'whip-pan'|'glitch'|'wipe'|'wipe-diagonal'|'standard-cut'|'cross-dissolve'|'j-cut'|'l-cut'} props.type
 *   – The transition effect to use for this section.
 * @param {number}   [props.delay=0] – Additional delay before transition starts (ms).
 */
const SectionTransition = ({ children, type = 'cross-dissolve', delay = 0 }) => {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || played) return;

    if (!('IntersectionObserver' in window)) {
      setActive(true);
      setPlayed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !played) {
          // Trigger transition with delay
          setTimeout(() => {
            setActive(true);
            setPlayed(true);

            // Remove active overlay after animation completes
            setTimeout(() => {
              setActive(false);
            }, 1200);
          }, delay);

          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -5% 0px', threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, played]);

  return (
    <div ref={ref} className="section-transition-wrapper relative">
      {/* Transition overlay */}
      {active && (
        <div
          className={`section-overlay section-overlay--${type}`}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
};

export default SectionTransition;


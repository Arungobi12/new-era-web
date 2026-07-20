import { useEffect, useRef, createContext, useContext } from 'react';

export const TransitionCtx = createContext(null);
export const useTransition = () => useContext(TransitionCtx);

const TYPES = [
  'parallax-morph',
  'shadow-flip',
  'radial-wipe',
  'zoom-blur',
  'slide-stack',
  'dissolve-grain',
];

/**
 * Apply transition transform to a DOM element directly.
 * Bypasses React rendering for performance.
 */
function apply(el, type, role, progress) {
  if (!el) return;
  const p = Math.max(0, Math.min(1, progress));

  let opacity, transform, filter, boxShadow, clipPath, transformOrigin;

  switch (type) {
    case 'parallax-morph':
      if (role === 'outgoing') {
        opacity = 1 - p;
        transform = `translateY(${p * -60}px) scale(${1 - p * 0.08})`;
        filter = `blur(${p * 4}px)`;
      } else {
        opacity = p;
        transform = `translateY(${(1 - p) * 60}px) scale(${0.92 + p * 0.08})`;
        filter = 'none';
      }
      break;
    case 'shadow-flip':
      if (role === 'outgoing') {
        opacity = 1 - p;
        transform = `perspective(1200px) rotateX(${p * 15}deg) translateY(${p * -30}px)`;
        filter = `brightness(${1 - p * 0.3})`;
        boxShadow = `0 ${p * 40}px ${p * 60}px rgba(0,0,0,${p * 0.5})`;
      } else {
        opacity = p;
        transform = `perspective(1200px) rotateX(${(1 - p) * -15}deg) translateY(${(1 - p) * 30}px)`;
        filter = `brightness(${0.7 + p * 0.3})`;
        boxShadow = 'none';
      }
      break;
    case 'radial-wipe':
      if (role === 'outgoing') {
        opacity = 1 - p * 0.5;
        clipPath = `circle(${(1 - p) * 100}% at 50% 50%)`;
      } else {
        opacity = 0.3 + p * 0.7;
        clipPath = `circle(${p * 100}% at 50% 50%)`;
      }
      break;
    case 'zoom-blur':
      if (role === 'outgoing') {
        opacity = 1 - p * 0.9;
        transform = `scale(${1 + p * 0.25})`;
        filter = `blur(${p * 12}px)`;
      } else {
        opacity = 0.1 + p * 0.9;
        transform = `scale(${1.25 - p * 0.25})`;
        filter = `blur(${(1 - p) * 12}px)`;
      }
      break;
    case 'slide-stack':
      if (role === 'outgoing') {
        opacity = 1 - p;
        transform = `translateY(${p * -80}px) scaleY(${1 - p * 0.15})`;
        transformOrigin = 'bottom center';
      } else {
        opacity = 0.2 + p * 0.8;
        transform = `translateY(${(1 - p) * 80}px) scaleY(${0.85 + p * 0.15})`;
        transformOrigin = 'top center';
      }
      break;
    case 'dissolve-grain':
      if (role === 'outgoing') {
        opacity = 1 - p;
        filter = `contrast(${1 + p * 0.4}) saturate(${1 - p * 0.6})`;
      } else {
        opacity = 0.1 + p * 0.9;
        filter = `contrast(${1.4 - p * 0.4}) saturate(${0.4 + p * 0.6})`;
      }
      break;
    default:
      opacity = 1;
  }

  el.style.opacity = opacity;
  if (transform) el.style.transform = transform;
  else el.style.transform = 'none';
  if (filter) el.style.filter = filter;
  else el.style.filter = 'none';
  if (clipPath) el.style.clipPath = clipPath;
  else el.style.clipPath = 'none';
  if (boxShadow) el.style.boxShadow = boxShadow;
  else el.style.boxShadow = 'none';
  if (transformOrigin) el.style.transformOrigin = transformOrigin;
}

function reset(el) {
  if (!el) return;
  el.style.opacity = '';
  el.style.transform = '';
  el.style.filter = '';
  el.style.clipPath = '';
  el.style.boxShadow = '';
  el.style.transformOrigin = '';
}

const TransitionManager = ({ children }) => {
  const containerRef = useRef(null);
  const prevPair = useRef(-1);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let raf;

    const tick = () => {
      const pages = container.querySelectorAll('.scroll-page');
      if (pages.length < 2) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const vh = window.innerHeight;
      let pair = -1;
      let progress = 0;

      for (let i = 0; i < pages.length - 1; i++) {
        const incoming = pages[i + 1];
        const rect = incoming.getBoundingClientRect();
        const top = rect.top;

        if (top < vh && top > -vh * 0.5) {
          progress = Math.max(0, Math.min(1, (vh - top) / vh));
          pair = i;
          break;
        }
      }

      // Reset previous pair if changed
      if (pair !== prevPair.current) {
        if (prevPair.current >= 0) {
          reset(pages[prevPair.current]);
          reset(pages[prevPair.current + 1]);
        }
        prevPair.current = pair;
      }

      // Apply current transition
      if (pair >= 0 && pair < TYPES.length) {
        const type = TYPES[pair];
        apply(pages[pair], type, 'outgoing', progress);
        apply(pages[pair + 1], type, 'incoming', progress);
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <TransitionCtx.Provider value={{}}>
      <div ref={containerRef} className="transition-manager">
        {children}
      </div>
    </TransitionCtx.Provider>
  );
};

export default TransitionManager;


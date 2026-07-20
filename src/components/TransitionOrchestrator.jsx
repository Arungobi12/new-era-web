import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * TransitionOrchestrator – central manager that plays full-viewport
 * cinematic transitions BETWEEN sections when the user scrolls.
 *
 * Wraps all page sections, tracks which section is "current", and
 * when the active section changes it renders a fixed overlay that
 * animates to cover → briefly hold → then reveal the new section.
 *
 * @param {object}   props
 * @param {ReactNode} props.children – Section components in order.
 * @param {function} [props.onSectionChange] – Callback with new section index.
 */

// Maps an ordered pair of adjacent section indices → transition effect name
const SECTION_TRANSITIONS = {
  '0-1': 'whip-pan',
  '1-2': 'glitch',
  '2-3': 'wipe',
  '3-4': 'j-cut',
  '4-5': 'l-cut',
  '5-6': 'cross-dissolve',
};

const ANIMATION_DURATION = 1200; // ms – must match CSS animation length

const TransitionOrchestrator = ({ children, onSectionChange }) => {
  const [transition, setTransition] = useState(null);
  const [direction, setDirection] = useState('down');
  const [animKey, setAnimKey] = useState(0);
  const wrapperRef = useRef(null);
  const currentIdx = useRef(0);
  const animating = useRef(false);
  const rafId = useRef(null);
  const sectionBounds = useRef([]);

  // ── Measure each child section's vertical position ──
  const measure = useCallback(() => {
    if (!wrapperRef.current) return;
    const nodes = wrapperRef.current.children;
    const bounds = [];
    for (let i = 0; i < nodes.length; i++) {
      const rect = nodes[i].getBoundingClientRect();
      bounds.push({
        top: rect.top + window.scrollY,
        bottom: rect.bottom + window.scrollY,
      });
    }
    sectionBounds.current = bounds;
  }, []);

  // Re-measure on mount & window resize
  useEffect(() => {
    // Slight delay so layout is settled
    requestAnimationFrame(() => measure());
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  // ── Scroll-based section-change detection ──
  useEffect(() => {
    const onScroll = () => {
      if (animating.current || sectionBounds.current.length === 0) return;

      const scrollY = window.scrollY + window.innerHeight * 0.35;
      let nextIdx = 0;
      for (let i = 0; i < sectionBounds.current.length; i++) {
        const b = sectionBounds.current[i];
        if (b && scrollY >= b.top) nextIdx = i;
      }

      if (nextIdx !== currentIdx.current) {
        const dir = nextIdx > currentIdx.current ? 'down' : 'up';
        const prev = currentIdx.current;
        const pairKey = `${Math.min(prev, nextIdx)}-${Math.max(prev, nextIdx)}`;
        const type = SECTION_TRANSITIONS[pairKey] || 'cross-dissolve';

        animating.current = true;
        currentIdx.current = nextIdx;
        setDirection(dir);
        setTransition(type);
        setAnimKey((k) => k + 1);

        if (onSectionChange) onSectionChange(nextIdx);

        // Clear overlay after animation completes
        setTimeout(() => {
          setTransition(null);
          animating.current = false;
        }, ANIMATION_DURATION);
      }
    };

    const handleScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(onScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSectionChange]);

  return (
    <div ref={wrapperRef} className="orchestrator-wrapper">
      {/* Full-viewport transition overlay */}
      {transition && (
        <div
          key={animKey}
          className={`transition-overlay transition-overlay--${transition} transition-overlay--${direction}`}
          aria-hidden="true"
        />
      )}

      {children}
    </div>
  );
};

export default TransitionOrchestrator;


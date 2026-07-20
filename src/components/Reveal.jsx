import { useEffect, useRef, useState } from 'react';

/**
 * Reveal – scroll-triggered entrance animation component.
 *
 * @param {object}   props
 * @param {ReactNode} props.children    – Content to animate in.
 * @param {string}   [props.as='div']   – HTML element or component to render.
 * @param {string}   [props.className]  – Additional CSS classes.
 * @param {string}   [props.rootMargin='0px 0px -10% 0px'] – IntersectionObserver root margin.
 * @param {number}   [props.delayMs=0]  – Animation delay in milliseconds.
 * @param {'hero'|'features'|'about'|'skills'|'process'|'projects'|'contact'} [props.variant='hero']
 *   – Section variant that selects a unique entrance animation from index.css.
 */
const Reveal = ({
  children,
  as: Component = 'div',
  className = '',
  rootMargin = '0px 0px -10% 0px',
  delayMs = 0,
  variant = 'hero',
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

  const variantClass = `reveal-${variant}`;

  return (
    <Component
      ref={ref}
      className={`${className} ${variantClass} ${visible ? 'reveal-visible' : 'reveal-hidden'}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </Component>
  );
};

export default Reveal;

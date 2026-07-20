/**
 * PageTransition – A wrapper that applies a page-level enter animation.
 * Currently kept for future multi-page routing; not used in single-page layout.
 *
 * @param {object}   props
 * @param {ReactNode} props.children – Content to animate on page enter.
 * @param {string}   [props.pageKey] – Unique key to trigger re-animation on route change.
 */
const PageTransition = ({ children, pageKey }) => {
  return (
    <div key={pageKey} className="page-enter min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition;

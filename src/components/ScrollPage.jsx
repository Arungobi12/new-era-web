/**
 * ScrollPage – section wrapper for scroll-driven transitions.
 * TransitionManager applies effects directly via querySelectorAll('.scroll-page').
 */
const ScrollPage = ({ children, id }) => {
  return (
    <div id={id} className="scroll-page min-h-screen w-full relative">
      {children}
    </div>
  );
};

export default ScrollPage;


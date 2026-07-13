const PageTransition = ({ children, pageKey }) => {
  return (
    <div key={pageKey} className="page-enter min-h-screen">
      {children}
    </div>
  );
};

export default PageTransition;

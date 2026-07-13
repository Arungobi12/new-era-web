const AnimatedTitle = ({ text, className = '', accentWords = [] }) => {
  const words = text.split(' ');
  let letterIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIndex) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const isAccent = accentWords.includes(cleanWord);

        return (
          <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
            {word.split('').map((letter, index) => {
              const delay = `${letterIndex * 22}ms`;
              letterIndex += 1;

              return (
                <span
                  key={`${letter}-${index}`}
                  className={`letter-pop inline-block ${isAccent ? 'text-[#ff6b4a]' : ''}`}
                  style={{ animationDelay: delay }}
                  aria-hidden="true"
                >
                  {letter}
                </span>
              );
            })}
            {wordIndex < words.length - 1 && <span aria-hidden="true">&nbsp;</span>}
          </span>
        );
      })}
    </span>
  );
};

export default AnimatedTitle;

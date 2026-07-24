/**
 * AnimatedTitle – Splits text into letters that pop in with staggered timing.
 * Accent words receive a distinct coral highlight.
 *
 * @param {object}   props
 * @param {string}   props.text         – The heading text to animate.
 * @param {string}   [props.className]  – Additional CSS classes.
 * @param {string[]} [props.accentWords=[]] – Words to highlight in accent colour.
 */
const AnimatedTitle = ({ text, className = '', accentWords = [] }) => {
  const words = text.split(' ');
  let letterIndex = 0;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, wordIndex) => {
        const cleanWord = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
        const isAccent = accentWords.includes(cleanWord);
        const wordOffset = wordIndex * 40;

        return (
          <span key={`${word}-${wordIndex}`} className="inline-block whitespace-nowrap">
            {word.split('').map((letter, index) => {
              const delay = `${letterIndex * 28 + wordOffset}ms`;
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

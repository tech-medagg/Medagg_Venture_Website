import React, { useState, useEffect, useRef } from 'react';

/**
 * TypewriterText — types out text when the element scrolls into view.
 * Props:
 *   text       — string to type
 *   speed      — ms per character (default 55)
 *   delay      — ms to wait before starting after visible (default 0)
 *   className  — optional class on the wrapper span
 *   style      — optional inline style
 */
export const TypewriterText = ({ text = '', speed = 55, delay = 0, className = '', style = {} }) => {
  const [displayed, setDisplayed] = useState('');
  const [showCursor, setShowCursor] = useState(false);
  const [cursorDone, setCursorDone] = useState(false);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          observer.disconnect();

          setTimeout(() => {
            setShowCursor(true);
            let i = 0;
            const interval = setInterval(() => {
              i++;
              setDisplayed(text.slice(0, i));
              if (i >= text.length) {
                clearInterval(interval);
                // Blink cursor briefly then hide
                setTimeout(() => setCursorDone(true), 900);
              }
            }, speed);
          }, delay);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text, speed, delay]);

  return (
    <span ref={ref} className={className} style={{ ...style, display: 'inline' }}>
      {displayed}
      {showCursor && !cursorDone && (
        <span
          style={{
            display: 'inline-block',
            width: '2px',
            height: '1em',
            background: 'var(--color-brand-pink, #EB246B)',
            marginLeft: '2px',
            verticalAlign: 'text-bottom',
            animation: 'tw-blink 0.75s step-end infinite',
          }}
          aria-hidden="true"
        />
      )}
      <style>{`
        @keyframes tw-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

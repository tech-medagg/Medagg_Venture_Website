import React, { useState, useEffect, useRef } from 'react';

const TEXTS = [
  'Strategic Consulting',
  'Transaction Advisory',
  'Channel Partnerships',
  'O&M Contracts',
];

const TYPE_SPEED  = 60;   // ms per character while typing
const DELETE_SPEED = 35;  // ms per character while deleting
const HOLD_DURATION = 3000; // ms to hold the fully typed word
const PAUSE_BEFORE_TYPE = 300; // ms pause after deleting before next word

/**
 * CyclingTypewriter — endlessly cycles through TEXTS with a
 * typewriter type → hold → delete → next animation.
 */
export const CyclingTypewriter = ({ className = '' }) => {
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing'); // 'typing' | 'holding' | 'deleting' | 'pausing'
  const [wordIndex, setWordIndex] = useState(0);
  const charIndex = useRef(0);

  useEffect(() => {
    let timer;

    if (phase === 'typing') {
      const target = TEXTS[wordIndex];
      if (charIndex.current < target.length) {
        timer = setTimeout(() => {
          charIndex.current += 1;
          setDisplayed(target.slice(0, charIndex.current));
        }, TYPE_SPEED);
      } else {
        timer = setTimeout(() => setPhase('holding'), HOLD_DURATION);
      }
    }

    if (phase === 'holding') {
      timer = setTimeout(() => setPhase('deleting'), 0);
    }

    if (phase === 'deleting') {
      if (charIndex.current > 0) {
        timer = setTimeout(() => {
          charIndex.current -= 1;
          setDisplayed((prev) => prev.slice(0, charIndex.current));
        }, DELETE_SPEED);
      } else {
        timer = setTimeout(() => setPhase('pausing'), PAUSE_BEFORE_TYPE);
      }
    }

    if (phase === 'pausing') {
      setWordIndex((prev) => (prev + 1) % TEXTS.length);
      setPhase('typing');
    }

    return () => clearTimeout(timer);
  }, [phase, displayed, wordIndex]);

  return (
    <span className={className} style={{ display: 'inline-flex', alignItems: 'center', gap: '2px' }}>
      {displayed}
      {/* Blinking cursor */}
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '2px',
          height: '0.85em',
          background: 'var(--color-brand-pink, #EB246B)',
          marginLeft: '1px',
          verticalAlign: 'middle',
          animation: 'tw-cursor-blink 0.75s step-end infinite',
        }}
      />
      <style>{`
        @keyframes tw-cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

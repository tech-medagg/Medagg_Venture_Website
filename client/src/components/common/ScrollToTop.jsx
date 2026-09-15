import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    setIsClicked(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    // Reset clicked state after arrow moves up and scroll finishes
    setTimeout(() => {
      setIsClicked(false);
    }, 600);
  };

  // SVG Circle Progress Math
  // cx=26, cy=26, r=22 -> Circumference = 2 * PI * 22 ≈ 138.23
  const strokeDasharray = 138.23;
  const strokeDashoffset = strokeDasharray - (strokeDasharray * scrollProgress) / 100;

  return (
    <button
      type="button"
      className={`scroll-to-top-btn ${isVisible ? 'is-visible' : ''} ${isClicked ? 'is-clicked' : ''}`}
      onClick={handleClick}
      aria-label="Scroll to top of page"
    >
      {/* SVG Progress Ring */}
      <svg className="scroll-top-progress-ring" viewBox="0 0 52 52">
        <defs>
          <linearGradient id="scrollProgressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EB246B" />
            <stop offset="100%" stopColor="#FF4D8D" />
          </linearGradient>
        </defs>
        {/* Background track circle */}
        <circle
          className="scroll-top-ring-bg"
          cx="26"
          cy="26"
          r="22"
          fill="none"
        />
        {/* Animated filling circle */}
        <circle
          className="scroll-top-ring-fill"
          cx="26"
          cy="26"
          r="22"
          fill="none"
          stroke="url(#scrollProgressGradient)"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>

      {/* Arrow Icon */}
      <div className="scroll-top-arrow-wrap">
        <ArrowUp size={20} strokeWidth={2.5} />
      </div>
    </button>
  );
};

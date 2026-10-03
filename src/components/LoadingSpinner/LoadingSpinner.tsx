import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./LoadingSpinner.css";

interface LoadingSpinnerProps {
  duration?: number; // Duration in ms
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ duration = 2400 }) => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const intervalTime = 50;
    const step = 90 / (duration / intervalTime);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 98) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + step, 98);
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <motion.div
      className="bmo-preloader"
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.02,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
      }}
    >
      {/* Background ambient lighting */}
      <div className="preloader-glow preloader-glow-1" />
      <div className="preloader-glow preloader-glow-2" />

      <div className="preloader-container">
        {/* Animated concentric spinner rings + central BMO icon */}
        <div className="spinner-core">
          <div className="spinner-ring-outer" />
          <div className="spinner-ring-inner" />
          <div className="spinner-logo-box">
            <img
              src="/icon-2.png"
              alt="BMO Leads Logo"
              className="spinner-logo-img"
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className="preloader-brand">
          <span className="bmo-text-primary">BMO</span>
          <span className="bmo-text-dark">LEAD</span>
        </div>

        {/* Dynamic Status message with animated dots */}
        <div className="preloader-status">
          <span>Loading workspace</span>
          <div className="preloader-dots">
            <span />
            <span />
            <span />
          </div>
        </div>

        {/* Dynamic visual progress bar */}
        <div className="preloader-progress-track">
          <div
            className="preloader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingSpinner;

import React, { useEffect, useState } from 'react';
import { Coffee } from 'lucide-react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds loading
    const intervalTime = 30;
    const steps = duration / intervalTime;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFadingOut(true);
            setTimeout(() => {
              onComplete();
            }, 600); // Wait for CSS fade out animation
          }, 400); // Small pause at 100%
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`preloader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        {/* Coffee Cup with Rising Steam Animation */}
        <div className="coffee-cup-container">
          <div className="steam-wrapper">
            <span className="steam-line steam-1"></span>
            <span className="steam-line steam-2"></span>
            <span className="steam-line steam-3"></span>
          </div>
          <div className="cup-icon-wrapper">
            <Coffee className="cup-icon" size={60} />
          </div>
        </div>

        {/* Brand Text */}
        <h1 className="preloader-title">
          JUWARA <span className="text-gradient">KOPI</span>
        </h1>
        <p className="preloader-subtitle">Cita Rasa Otentik & Manfaat Sehat</p>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          <span className="progress-text">{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

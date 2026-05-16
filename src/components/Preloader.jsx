import React, { useState, useEffect } from 'react';

const greetings = [
  "Hello",       // English
  "నమస్కారం",      // Telugu
  "नमस्ते",         // Hindi
  "こんにちは",     // Japanese
  "Bonjour",     // French
  "Hola",        // Spanish
  "নমস্কার",       // Bengali
  "வணக்கம்"        // Tamil
];

const Preloader = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFadeOut, setIsFadeOut] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    document.body.classList.add("no-scroll");

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < greetings.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsFadeOut(true);
          setTimeout(() => {
            setIsHidden(true);
            document.body.classList.remove("no-scroll");
          }, 800);
          return prev;
        }
      });
    }, 220);

    return () => {
      clearInterval(interval);
      document.body.classList.remove("no-scroll");
    };
  }, []);

  if (isHidden) return null;

  return (
    <div id="preloader" className={`preloader ${isFadeOut ? 'preloader-hidden' : ''}`}>
      <div className={`preloader-content ${isFadeOut ? 'fade-out' : ''}`}>
        <span id="preloader-text">{greetings[currentIndex]}</span>
      </div>
    </div>
  );
};

export default Preloader;

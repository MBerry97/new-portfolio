/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

const useScrollFromTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const listener = document.addEventListener('scroll', () => {
      const scrollYPosition = window.scrollY;
      setScrollPosition(scrollYPosition);
    });

    return () => {
      document.removeEventListener('scroll', listener as any);
    };
  }, []);

  return scrollPosition;
};

export default useScrollFromTop;

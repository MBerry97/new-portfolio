/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

export default function ThemeMode(
  themeState: boolean,
  setThemeState: React.Dispatch<React.SetStateAction<boolean>>,
) {
  useEffect(() => {
    const getTheme = localStorage.getItem('Theme');
    if (getTheme === 'dark') {
      setThemeState(true);
    }
  }, []);

  useEffect(() => {
    if (themeState) {
      localStorage.setItem('Theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      localStorage.setItem('Theme', 'light');
      document.body.classList.remove('dark-mode');
    }
  }, [themeState]);
}

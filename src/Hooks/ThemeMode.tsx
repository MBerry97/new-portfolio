/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { homeContext } from 'Contexts/Home.context';

export default function ThemeMode() {
  const { themeState, setThemeState } = useContext(homeContext);

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

  return (
    <DarkModeToggle
      checked={themeState}
      onChange={() => setThemeState(!themeState)}
      size={50}
    />
  );
}

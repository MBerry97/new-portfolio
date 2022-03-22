/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { homeContext } from 'Contexts/Home.context';

export default function ThemeToggle() {
  const { themeState, setThemeState } = useContext(homeContext);

  return (
    <DarkModeToggle
      checked={themeState}
      onChange={() => setThemeState(!themeState)}
      size={50}
    />
  );
}

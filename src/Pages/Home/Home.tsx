import NavBar from 'Components/NavBar/NavBar';
import { Provider } from 'Contexts/Home.context';
import React, { useState } from 'react';
import useThemeMode from 'Hooks/useThemeMode';
import About from './About/About';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';

function Home() {
  const [themeState, setThemeState] = useState(false);

  useThemeMode(themeState, setThemeState);

  return (
    <Provider value={{ themeState, setThemeState }}>
      <NavBar themeState={themeState} />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </Provider>
  );
}

export default Home;

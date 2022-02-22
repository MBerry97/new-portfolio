import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';

function Home() {
  return (
    <>
      <Intro />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;

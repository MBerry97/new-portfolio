import Home from 'Pages/Home/Home';
import React from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <div className="App">
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
    </div>
  );
}

export default App;

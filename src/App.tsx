import CustomCursor from 'Components/CustomCursor/CustomCursor';
import CustomCursorManager from 'Components/CustomCursor/Manager';
import Home from 'Pages/Home/Home';
import React from 'react';
import './App.css';

function App() {
  return (
    <CustomCursorManager>
      <div className="App">
        <CustomCursor />
        <Home />
      </div>
    </CustomCursorManager>
  );
}

export default App;

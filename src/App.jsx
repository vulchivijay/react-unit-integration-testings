import React from 'react';
import { useState } from 'react';
import './App.css'

function App() {
  const [textChange, setTextChange] = useState(false);

  const handleTextChange = () => {
    setTextChange(!textChange);
  }

  return (
    <>
      {!textChange && <h1>Vite + React</h1>}
      {textChange && <h1>React + Vite</h1>}
      <div className="card">
        <button onClick={handleTextChange}>Swap Text</button>
      </div>
      <p id="static_text">By Vijaya Kumar Vulchi</p>
      <input type="text" placeholder="Enter name" />
    </>
  )
}

export default App

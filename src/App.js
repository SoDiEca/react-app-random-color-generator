import './App.css';
import randomColor from 'randomcolor';
import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div className="App">
      <h1>Random Color Generator</h1>
      <div
        className="colorBox"
        style={{
          backgroundColor: color,
          height: 350,
          width: 550,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'thin solid grey',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          marginTop: 30,
        }}
      />
      <div>{randomColor()}</div>
      <button onClick={() => setColor(randomColor.randomColor())}>
        Generate
      </button>
    </div>
  );
}

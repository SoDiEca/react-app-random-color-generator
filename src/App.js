import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div
      className="App"
      style={{
        backgroundColor: 'lavender',
        minHeight: '100%',
        minWidth: '100%',
        width: '100%',
        height: 'auto',
        position: 'fixed',
        top: '50',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        className="colorBox"
        style={{
          backgroundColor: color,
          height: 200,
          width: 300,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'thin solid grey',
          borderRadius: '12px',
          position: 'absolute',
          left: '50%',
          top: '45%',
          transform: 'translate(-50%, -50%)',
          marginTop: 30,
        }}
      />
      <h1
        style={{
          position: 'absolute',
          left: '33%',
          top: '7%',
          fontFamily: 'sans-serif',
          fontSize: '40px',
          fontColor: color,
        }}
      >
        Random Color Generator
      </h1>

      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: 'sans-serif',
          fontSize: '25px',
        }}
      >
        {randomColor()}
      </div>
      <button
        style={{
          backgroundColor: 'lightgrey',
          border: 'none',
          color: 'black',
          padding: '20px',
          textAlign: 'center',
          textDecoration: 'none',
          fontSize: '16px',
          margin: '4px 2px',
          borderRadius: '12px',
          cursor: 'pointer',
          position: 'absolute',
          left: '46%',
          top: '75%',
        }}
        onClick={() => setColor(randomColor.randomColor())}
      >
        Generate
      </button>
      <div className="ColorBox" />
    </div>
  );
}

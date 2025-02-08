import React, { useState, useEffect } from 'react';

const Prototype1PWA: React.FC = () => {
  // A simple counter state with persistence
  const [counter, setCounter] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('');

  // On mount, load the counter value from localStorage (if it exists)
  useEffect(() => {
    const storedCounter = localStorage.getItem('counter');
    if (storedCounter !== null) {
      setCounter(parseInt(storedCounter, 10));
    }
  }, []);

  // Whenever the counter changes, store the value in localStorage
  useEffect(() => {
    localStorage.setItem('counter', counter.toString());
  }, [counter]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        color: '#47201C',
      }}
    >
      <h1>A Simple, Interactive PWA</h1>
      <h2>Counter: {counter}</h2>
      <div style={{ margin: '10px' }}>
        <button
          onClick={() => setCounter(counter + 1)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            marginRight: '10px',
            cursor: 'pointer',
          }}
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(0)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          Reset
        </button>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <input
          type="text"
          placeholder="Type something..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{
            padding: '10px',
            fontSize: '16px',
            width: '250px',
            marginBottom: '10px',
          }}
        />
        <p style={{ fontSize: '18px' }}>You typed: {inputText}</p>
      </div>
    </div>
  );
};

export default Prototype1PWA;

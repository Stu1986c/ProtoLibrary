// pages/pwa/prototype1.tsx
import React, { useState, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import styles from '../../app/Prototype1PWA.module.css';

const Prototype1PWA: React.FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [inputText, setInputText] = useState<string>('');

  // Load counter from localStorage on mount
  useEffect(() => {
    const storedCounter = localStorage.getItem('counter');
    if (storedCounter !== null) {
      setCounter(parseInt(storedCounter, 10));
    }
  }, []);

  // Save counter to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('counter', counter.toString());
  }, [counter]);

  return (
    <div className={styles.container}>
      <h1>A Simple, Interactive PWA</h1>
      <h2>Counter: {counter}</h2>
      <div className={styles.buttonGroup}>
        <button
          onClick={() => setCounter(counter + 1)}
          className={styles.button}
        >
          Increment
        </button>
        <button
          onClick={() => setCounter(0)}
          className={styles.button}
        >
          Reset
        </button>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type something..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className={styles.inputField}
        />
        <p className={styles.typedText}>You typed: {inputText}</p>
      </div>
    </div>
  );
};

export default Prototype1PWA;

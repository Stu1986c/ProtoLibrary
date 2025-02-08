// pages/lab.tsx
import React from 'react';
import styles from '../app/Lab.module.css';

const Lab = () => {
  // For this example, we'll create three rows.
  const rows = [1, 2, 3];

  // Placeholder content
  const placeholderText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const placeholderImage = "/phone placeholder.png";

  return (
    <div className={styles.container}>
      {rows.map((row, index) => (
        <div key={index} className={styles.row}>
          <div className={styles.textBlock}>
            <p>{placeholderText}</p>
          </div>
          <div className={styles.imageBlock}>
            <img src={placeholderImage} alt="Placeholder" />
          </div>
          <div className={styles.textBlock}>
            <p>{placeholderText}</p>
          </div>
          <div className={styles.imageBlock}>
            <img src={placeholderImage} alt="Placeholder" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lab;

// pages/pwa/tamagotchi.tsx
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../app/Cleogotchi.module.css';

const Cleogotchi: React.FC = () => {
  const [energy, setEnergy] = useState<number>(100);
  const [happiness, setHappiness] = useState<number>(50);
  const [fedAnimation, setFedAnimation] = useState<boolean>(false);
  const [playAnimation, setPlayAnimation] = useState<boolean>(false);

  // Deplete Energy: 2 points every 15 seconds
  useEffect(() => {
    const energyInterval = setInterval(() => {
      setEnergy(prev => Math.max(prev - 2, 0));
    }, 5000);
    return () => clearInterval(energyInterval);
  }, []);

  // Deplete Happiness: 5 points every 30 seconds
  useEffect(() => {
    const happinessInterval = setInterval(() => {
      setHappiness(prev => Math.max(prev - 5, 0));
    }, 10000);
    return () => clearInterval(happinessInterval);
  }, []);

  const handleFeed = () => {
    setEnergy(prev => Math.min(prev + 10, 100));
    setFedAnimation(true);
    setTimeout(() => setFedAnimation(false), 1000);
  };

  const handlePlay = () => {
    setHappiness(prev => Math.min(prev + 10, 50));
    setPlayAnimation(true);
    setTimeout(() => setPlayAnimation(false), 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bars}>
        <div className={styles.bar}>
          <label>Energy: {energy}</label>
          <div className={styles.progress}>
            <div
              className={styles.progressFill}
              style={{ width: `${energy}%` }}
            ></div>
          </div>
        </div>
        <div className={styles.bar}>
          <label>Happiness: {happiness}</label>
          <div className={styles.progress}>
            <div
              className={styles.progressFill}
              style={{ width: `${(happiness / 50) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.creatureContainer}>
        <div
          className={`${styles.creature} ${
            fedAnimation ? styles.fedAnimation : ''
          } ${playAnimation ? styles.playAnimation : ''}`}
        >
          {/* Replace with your creature image. Ensure the file exists in /public */}
          <Image
            src="/Baloo.png"
            alt="Cleogotchi"
            width={200}
            height={359}
            priority
          />
        </div>
      </div>
      <div className={styles.controls}>
        <button className={styles.button} onClick={handleFeed}>
          Feed
        </button>
        <button className={styles.button} onClick={handlePlay}>
          Play
        </button>
      </div>
    </div>
  );
};

export default Cleogotchi;

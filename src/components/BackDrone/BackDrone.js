import React from 'react';
import styles from './BackDrone.module.css';

const BackDrone = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.iconWrapper}>
          <svg className={styles.icon} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12l4-4m-4 4 4 4"/>
          </svg>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.backText}>Back to All</div>
          <div><span className={styles.linkText}>Drones</span> / Marut Drones Agricopter AG365</div>
        </div>
      </div>
    </div>
  );
}

export default BackDrone;
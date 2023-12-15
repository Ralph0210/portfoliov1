import React from "react";
import styles from "./Conclusion.module.css";

const Conclusion = ({prop}) => {
  return (
    <div className={styles.conContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.left}>
          <span>CHALLENGES AND SOLUTIONS</span>
          <ul>
          {prop.challenges.map((item, index) => (
            <li key={index}>{item} {prop.solutions[index]}</li>
          ))}
          </ul>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.bottom}>
            <span>IMPACT</span>
            <p>{prop.impact}</p>
          </div>
          <div className={styles.bottom}>
            <span>NEXT STEP</span>
            <p>{prop.nextStep}</p>
          </div>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <span>WHAT I LEARNED</span>
        <ul>
          {prop.learned.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Conclusion;

import React, { useState } from "react";
import styles from "./Conclusion.module.css";
import { Icon } from "@iconify/react";

const Conclusion = ({ prop }) => {
  const [cCounter, setCCounter] = useState(1);
  const [lCounter, setLCounter] = useState(1);

  const clength = prop.challenges.length;
  const llength = prop.learned.length;
  return (
    <div className={styles.conContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.left}>
          <div className={styles.title}>
            <span>CHALLENGES AND SOLUTIONS</span>
          </div>
          <ul>
            <li>
              <h2>{prop.challenges[cCounter - 1]}</h2>
            </li>
            <li>{prop.solutions[cCounter - 1]}</li>
          </ul>
          <span className={styles.count}>
            {cCounter}/{clength}
          </span>
          <div className={styles.control}>
            <Icon
              onClick={() => {
                const newCounter = (cCounter - 1) % clength;
                setCCounter(newCounter === 0 ? clength : newCounter);
              }}
              className={styles.icon}
              icon="tabler:arrow-up"
              rotate={3}
            />
            <Icon
              onClick={() => {
                const newCounter = (cCounter + 1) % clength;
                setCCounter(newCounter === 0 ? clength : newCounter);
              }}
              className={styles.icon}
              icon="tabler:arrow-up"
              rotate={1}
            />
          </div>
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
            <li>
              <h2>{prop.learnedTitle[lCounter - 1]}</h2>
            </li>
            <li>{prop.learned[lCounter - 1]}</li>
          </ul>
          <span className={styles.count}>
            {lCounter}/{llength}
          </span>
          <div className={styles.control}>
            <Icon
              onClick={() => {
                const newCounter = (lCounter - 1) % llength;
                setLCounter(newCounter === 0 ? llength : newCounter);
              }}
              className={styles.icon}
              icon="tabler:arrow-up"
              rotate={3}
            />
            <Icon
              onClick={() => {
                const newCounter = (lCounter + 1) % llength;
                setLCounter(newCounter === 0 ? llength : newCounter);
              }}
              className={styles.icon}
              icon="tabler:arrow-up"
              rotate={1}
            />
          </div>
      </div>
    </div>
  );
};

export default Conclusion;

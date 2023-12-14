import React from 'react'
import styles from './Conclusion.module.css'

const Conclusion = () => {
  return (
    <div className={styles.conContainer}>
        <div className={styles.leftContainer}>
            <div className={styles.left}>
                <span>CHALLENGES AND SOLUTIONS</span>
            </div>
            <div className={styles.left}>
                <span>IMPACT</span>
            </div>
        </div>
        <div className={styles.rightContainer}>
        <span>WHAT I LEARNED</span>
        </div>
    </div>
  )
}

export default Conclusion
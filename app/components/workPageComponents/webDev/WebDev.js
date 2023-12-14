import React from 'react'
import styles from './WebDev.module.css'

const WebDev = ({prop}) => {
  return (
    <div className={styles.webdevContainer}>
        <span>WEBSITE DEVELOPMENT</span>
        <div className={styles.techContainer}>
            {prop.map((item, index) => (
                <div key={index} className={styles.tech}>
                <h2 className={styles.h2}>{item.name}</h2>
                <ul>
                    {item.tech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
            </div>
            ))}
        </div>
    </div>
  )
}

export default WebDev
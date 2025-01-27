import React from 'react'
import styles from './WebDev.module.css'

const ContentComponent = ({
    tag,
    text
  }) => {
    return (
<div>
        <span>{tag}</span>
        <div className={styles.techContainer}>
            {text.map((item, index) => (
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
    );
  };

  const WebDev = ({ prop }) => {
    return (
      <div className={styles.webdevContainer}>
        <ContentComponent
          tag={prop.tag}
          text={prop.text}
        />
      </div>
    );
  };

export default WebDev
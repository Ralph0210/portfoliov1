import React, {useState, useEffect} from 'react'
import styles from './FooterBottom.module.css'
import Link from 'next/link';

function FooterBottom() {
    const [time, setTime] = useState();
    useEffect(() => {
        const updateTime = () => {
          const formattedTime = new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          setTime(formattedTime);
        };
    
        // Update the time initially
        updateTime();
    
        // Update the time every minute (if desired)
        const intervalId = setInterval(updateTime, 60000); // Update every 60 seconds
    
        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);
  return (
    <div className={styles.footerBottom}>
    <div className={styles.footerLeft}>
    <div>
      <span>VERSION</span>
      <p>2024 © Edition</p>
    </div>
    <div>
      <span>RALPH&apos;S TIME</span>
      <p>{time}</p>
    </div>
    </div>
    <div className={styles.socials}>
      <span>SOCIALS</span>
      <div className={styles.socialsContainer}>
        <Link
          href="https://www.linkedin.com/in/ralph-chang-5a49811a3/"
          target="_blank"
        >
          LinkedIn<div className={styles.bounds}></div>
        </Link>
        <Link href="https://www.instagram.com/ralph_cyh/" target="_blank">
          Instagram<div className={styles.bounds}></div>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default FooterBottom
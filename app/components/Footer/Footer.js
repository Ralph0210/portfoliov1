import React, { useState, useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import meIcon from "../../../public/heroIcon.png";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useInView } from "framer-motion";
import { Lora } from "next/font/google";
import FooterBottom from "../FooterBottom/FooterBottom";
const lora = Lora({ subsets: ['latin'] })

const email = "info@ralphchang.com";
const number = "+1 512 466 9511";

const Footer = ({ isInView4 }) => {
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
  const [isctaHovered, setIsctaHovered] = useState(false);
  const [footerStick, setFooterStick] = useState(false)
  
  const footerRef = useRef(null)
  const isInView = useInView(footerRef);

  useEffect(() => {
    if (isInView && !isInView4){
      console.log('set true')
      setFooterStick(true)
    }else if(isInView4 && isInView){
      console.log('set false')
      
      setFooterStick(false)
    }
  }, [isInView4, isInView])


  return (
    // <div >
    <div
      className={styles.footerContainer} ref={footerRef}
      style={footerStick ? {position:"-webkit-sticky", position: "sticky", bottom: "0", zIndex:"0" } : {}}
    >
      <div
        className={styles.footercta}
        onMouseEnter={() => setIsctaHovered(true)}
        onMouseLeave={() => setIsctaHovered(false)}
      >
        <div className={styles.iconContainer}>
        <Image
          src={meIcon}
          alt="me"
          sizes="(max-width: 430px)50px"
          fill
          style={{ objectFit: "cover"}}
        />
        </div>
        <p
          className={`${lora.className} ${styles.cta}`}
          style={isctaHovered ? { marginRight: "5rem" } : {}}
        >
          Let&apos;s work <br className={styles.br}/>together
        </p>
        <Link href="/contact" className={styles.arrowContainer}>
          <Icon
            className={styles.arrow}
            icon="ph:arrow-up-light"
            aria-label="Scroll down"
          />
          <div className={styles.bounds}></div>
        </Link>
      </div>
      <p className={styles.sayHi}>Or just say Hi!</p>

      <div className={styles.contacts}>
        <button
          className={styles.contactsCard}
          onClick={() => navigator.clipboard.writeText(email)}
        >
          {email}
        </button>
        <button
          className={styles.contactsCard}
          onClick={() => navigator.clipboard.writeText(number)}
        >
          {number}
        </button>
      </div>
      <div className={styles.divider}></div>
      {/* <FooterBottom /> */}
      <div className={styles.footerBottom}>
        <div className={styles.footerLeft}>
        <div>
          <span>VERSION</span>
          <p>2023 © Edition</p>
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
    </div>
  );
};

export default Footer;

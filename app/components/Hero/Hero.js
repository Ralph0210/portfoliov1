"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import hero from "../../../public/heroImages/hero.webp";
import styles from "./Hero.module.css";
import { Icon } from "@iconify/react";
import SplitType from "split-type";
import gsap from "gsap";
import Link from "next/link";
import { delay, motion } from "framer-motion";

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });



const bounce = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    scale: [1, 1.1, 1], // Bounces in and out
    y: [0, -10, 0], // Bounces up and down
    // rotate: [0, 10, 0],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      repeatDelay: 7,
    },
  },
};

const bounceVariants = {
  hidden: { opacity: 0.3 },
  hiddenLower: { opacity: 0 },
  showHello: {
    opacity: 1,
    // scale: [1, 1.1, 1],
    y: [-150, -20, 0],
    transition: {
      duration: 0.6,
      type: "spring",
      stiffness: 300,
      damping: 10,
      // ease: "easeInOut",
      delay: 0.5, // No additional delay for "Hello,"
    },
  },
  showComma: {
    opacity: 1,
    // scale: [1, 1.1, 1],
    y: [20,0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 0.8, // Additional delay for "I'm"
    },
  },
  showIm: {
    opacity: 1,
    scale: [1, 1.1, 1],
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 1.5, // Additional delay for "I'm"
    },
  },
  showRalph: {
    opacity: 1,
    scale: [1, 1.1, 1],
    y: [0, -10, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
      delay: 1.9, // Additional delay for "I'm"
    },
  },
  showEx: {
    opacity: 1,
    scale: [1, 1.5, 1],
    // x: [0, 10, -10, 10, 0], // Shake left and right
    y: [0, -20, 0], // Jump up
    rotate: [0, -5, 5, -5, 0], // Small rotation for shake effect
    transition: {
      duration: 0.6, // Adjust as needed
      delay: 2, // Initial delay
    },
  },
};


const Hero = ({ ThemeDark }) => {

  // const heroImages = [hero, hero1, hero2, hero3, hero4, hero5, hero6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const myNameRef = useRef();

  useEffect(() => {
    const myNameText = SplitType.create("#myName");
  }, []);

  useLayoutEffect(() => {
    const myNameElement = myNameRef.current;

    // Check if the myNameElement exists before proceeding
    if (myNameElement) {
      const lineElements = myNameElement.querySelectorAll(".char");
      // console.log("Selected elements:", lineElements);
      // console.log("Number of elements:", lineElements.length);

      let ctx = gsap.context(() => {
        gsap.to(lineElements, {
          y: 0,
          x: 200,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.1,
        });
      }, myNameRef.current);

      return () => ctx.revert();
    }
  }, []);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  //   }, currentImageIndex === 0 ? 3000 : 150);

  //   return () => clearInterval(intervalId);
  // }, [currentImageIndex]);

  // State to track the scroll position
  const [scrollPosition, setScrollPosition] = useState(0);

  // Effect to update the scroll position on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate the translateY based on the scroll position
  const translateY = `translateY(${scrollPosition / 4}px)`;

  return (
    <>
      <div id="hero" className={styles.c}>
        <div className={styles.d}>
          <div className={styles.a}>
            <Image
              placeholder="blur"
              draggable={false}
              src={hero}
              alt="hero"
              style={{
                height: "auto",
                width: "100%",
                transform: translateY,
                backgroundBlendMode: "multiply",
                borderRadius: "0.3rem",
              }}
              className={styles.b}
            />
          </div>
          <ul className={ThemeDark ? styles.inView : ""}>
            <li ref={myNameRef} id="myName">
              {/* Ralph Chang */}
            </li>
            {/* <li>Designer & Developer</li> */}
          </ul>
        </div>
        {/* <div className={styles.heroArrow}>
          <Icon
            className={ThemeDark ? styles.inView : ""}
            icon="ph:arrow-up-light"
            style={{ fontSize: "2.4rem", transform: "rotate(210deg)" }}
            aria-label="Scroll down"
          />
        </div> */}
        <div className={styles.heroTextContainer}>
          {/* <motion.h1
            className={`${lora.className} ${styles.h1}`}
            variants={container}
            initial="hidden"
            animate="show"
          >
            {hello.map((hello, index) => (
              <motion.span
                key={index}
                className={`${lora.className} ${styles.h1}`}
                variants={bounce}
              >
                {hello}
              </motion.span>
            ))}
          </motion.h1> */}

<motion.h1 className={`${lora.className} ${styles.h1}`}>
  <motion.span initial="hiddenLower" variants={bounceVariants} animate="showHello" className={styles.h1}>Hello</motion.span>
  <motion.span initial="hiddenLower" variants={bounceVariants} animate="showComma" className={styles.comma}>,</motion.span>
  <motion.span initial="hidden" variants={bounceVariants} animate="showIm" className={styles.h1}>I&apos;m</motion.span>
  <motion.span initial="hidden" variants={bounceVariants} animate="showRalph" className={styles.h1}>Ralph</motion.span>
  <motion.span initial="hidden" variants={bounceVariants} animate="showEx" className={styles.comma}>!</motion.span>
</motion.h1>


          {/* <p>I explore the intersection of societal challenges and technology to create purposeful, user-centric experiences that make positive difference.</p> */}
          <motion.p
            className={`${lora.className} ${styles.paragraph_container}`}
            // variants={paragraphContainer}
            // initial="hidden"
            // animate="show"
          >
            I&apos;m a Designer & Developer currently based in Seattle, WA. I believe we deserve innovations that are inclusive, empowering, and rooted in kindness.
          </motion.p>
          <Link href="/contact">
            Contact me<div className={styles.bounds}></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Hero;

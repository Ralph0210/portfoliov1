"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Image from "next/image";
import hero from "../../../public/heroImages/hero.webp";
import styles from "./Hero.module.css";
import { Icon } from "@iconify/react";
import SplitType from "split-type";
import gsap from "gsap";
import Link from "next/link";
import { color, delay, motion } from "framer-motion";

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

const paragraphVariants = {
  hidden: { opacity: 0.3 },
  visible: { opacity: 1, transition: { duration: 1.5, delay: 2 } },
};

const svgVariants = {
  // hidden: { rotate: 0 },
  // visible: {
  //   rotate: 0,
  //   transition: { duration: 1.5 },
  // },
};

const pathVariants = {
  hidden: { opacity: 1, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 2.5 },
  },
};

const pathVariantsScribble = {
  hidden: { opacity: 1, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1, ease: "easeInOut", delay: 3.5 },
  },
}

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
      duration: 1,
      type: "spring",
      stiffness: 200,
      damping: 10,
      // ease: "easeInOut",
      delay: 0.5, // No additional delay for "Hello,"
    },
  },
  showComma: {
    opacity: 1,
    // scale: [1, 1.1, 1],
    y: [20, 0],
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

const Hero = ({ ThemeDark, darkMode }) => {
  // const heroImages = [hero, hero1, hero2, hero3, hero4, hero5, hero6];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const myNameRef = useRef();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setHasAnimated(true);
  }, [])

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
        {/* <div className={styles.d}>
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
          <ul className={darkMode ? styles.inView : ""}>
            <li ref={myNameRef} id="myName">
              Ralph Chang
            </li>
            <li>Designer & Developer</li>
          </ul>
        </div> */}
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

          <motion.h1 className={`${lora.className} ${styles.h1} `}>
            <motion.span
              initial="hiddenLower"
              variants={bounceVariants}
              animate="showHello"
              className={styles.h1}
            >
              Hello
            </motion.span>
            <motion.span
              initial="hiddenLower"
              variants={bounceVariants}
              animate="showComma"
              className={styles.comma}
            >
              ,
            </motion.span>
            <motion.span
              initial="hidden"
              variants={bounceVariants}
              animate="showIm"
              className={styles.h1}
            >
              I&apos;m
            </motion.span>
            <motion.span
              initial="hidden"
              variants={bounceVariants}
              animate="showRalph"
              className={styles.ralph}
            >
              Ralph
            </motion.span>
            <motion.span
              initial="hidden"
              variants={bounceVariants}
              animate="showEx"
              className={styles.exclamation}
            >
              !
            </motion.span>
          </motion.h1>

          {/* <p>I explore the intersection of societal challenges and technology to create purposeful, user-centric experiences that make positive difference.</p> */}
          <motion.p
            className={`${lora.className} ${styles.paragraph_container}`}
            variants={paragraphVariants}
            initial="hidden"
            animate="visible"
          >
            It&apos;s nice meeting you here. I&apos;m a{" "}
            <span
              style={{
                color: "#1D2326",
                fontSize: "clamp(1.4rem, 1.5vw, 2rem)",
                fontWeight: "550",
              }}
            >
              Designer & Developer{" "}
            </span>
            who engineers accessible <br /> and engaging solutions through{" "}
            <span style={{ position: "relative", display: "inline-block" }}>
              <span
                style={{
                  color: "#1D2326",
                  fontSize: "clamp(1.4rem, 1.5vw, 2rem)",
                }}
              >
                care,&nbsp;
              </span>

              <motion.svg
                className="circle-svg"
                width="100%"
                height="auto"
                viewBox="0 0 235 82"
                preserveAspectRatio={"none"}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={svgVariants}
                initial="hidden"
                animate="visible"
                style={{
                  position: "absolute",
                  zIndex: -1,
                  left: "-4px",
                  bottom: "-0.5px",
                }}
              >
                <g clipPath="url(#clip0_639_400)">
                  <motion.path
                    d="M118.667 0.933297C106.534 1.59996 76.0006 5.3333 64.6673 7.59996C40.4006 12.2666 13.334 23.7333 5.4673 32.8C-1.19937 40.2666 -1.7327 52.6666 4.40063 58.4C12.4006 65.8666 36.934 73.2 65.6006 76.6666C86.0006 79.0666 139.601 81.3333 158.401 80.5333C207.867 78.4 236.401 64 234.401 42.5333C233.201 30.4 226.001 23.4666 205.734 14.8C188.401 7.3333 168.801 2.79996 147.867 1.3333C138.001 0.666631 129.067 0.133297 128.001 0.266631C126.934 0.399964 122.667 0.666631 118.667 0.933297Z"
                    fill="none"
                    stroke="#EC643C"
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    strokeWidth={5}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_639_400">
                    <rect width="234.667" height="81.3333" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>
            </span>
            <span style={{ position: "relative", display: "inline-block" }}>
              <span
                style={{
                  color: "#1D2326",
                  fontSize: "clamp(1.4rem, 1.5vw, 2rem)",
                }}
              >
                communication,&nbsp;
              </span>

              <motion.svg
              className="scribble-svg"
                width="100%"
                height="auto"
                viewBox="0 0 243 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={pathVariantsScribble}
                initial="hidden"
                animate="visible"
                style={{
                  position: "absolute",
                  zIndex: -1,
                  left: "10px",
                  bottom: "-10px",
                }}
              >
                <g clipPath="url(#clip0_639_412)">
                  <motion.path
                    d="M-1.73331 17.3333 2.93335 17.2 28.1334 14.8C43.0667 13.3333 69.4667 11.4666 86.6667 10.6666C127.867 8.9333 195.067 8.9333 194 10.6666C193.467 11.4666 182.667 12 165.867 12C121.733 12 73.6 15.6 36.2667 21.6C26.6667 23.0666 18.6667 24.8 18.6667 25.3333C18.6667 25.7333 27.4667 26.1333 38.4 26C49.2 25.8666 90 25.7333 129.067 25.6C181.867 25.3333 200 24.9333 200 23.7333"
                    fill="none"
                    stroke="#EC643C"
                    strokeWidth="2"
                    variants={pathVariantsScribble}
                  />
                </g>
                <defs>
                  <clipPath id="clip0_639_412">
                    <rect width="242.667" height="26.6667" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>
            </span>
            and{" "}
            <motion.span
              style={{
                // color: "#EC643C",
                fontSize: "clamp(1.4rem, 1.5vw, 2rem)",
              }}
              initial={{ color: "#1D2326", fontWeight: 400 }}
              animate={{ color: "#EC643C", fontWeight: 550 }}
              transition={{ type: "spring", duration: 1, delay: 4.5 }}
            >
              desgin.
            </motion.span>
          </motion.p>
        </div>

        <div className={styles.additionalContainer}>
          <motion.div
            className={`${lora.className} ${styles.additional} `}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, delay: 3 }}
          >
            <motion.p className={styles.ti}>I believe</motion.p>
            <motion.p className={styles.des}>
              we deserve innovations that are inclusive, empowering, and rooted
              in kindness.
            </motion.p>
          </motion.div>
          <motion.div
            className={`${lora.className} ${styles.additional} `}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 2, delay: 3.5 }}
          >
            <motion.p className={styles.ti}>I am</motion.p>
            <motion.p className={styles.des}>
              a master&apos;s student studying Human-Centered Design and
              Engineering @ UW
            </motion.p>
          </motion.div>
          <motion.div
          className={`${styles.additional}`}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", duration: 1, delay: 4 }}
          >
            <Link href="/contact">
              Say hi too!<div className={styles.bounds}></div>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;

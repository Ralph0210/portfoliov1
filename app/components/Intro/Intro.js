"use client";
import React, { useState, useEffect, useRef, useLayoutEffect, forwardRef } from "react";
import styles from "./Intro.module.css";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Work from "../Work/Work";
import "./Intro.css";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ['latin'] })

gsap.registerPlugin(ScrollTrigger);

const galleryTop = [
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/pl.png"},
  {
    backgroundColor: "#AEB6B5",
    imageURL: "/gallery/sehath.png",
  },
  { backgroundColor: "#A6AEB5", imageURL: "/gallery/scf.png"},
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/project_main_page.png"},
];

const galleryBottom = [
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/greater.png" },
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/sehath.png" },
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/scf.png" },
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/project_main_page.png" },
  { backgroundColor: "#C0B4AC", imageURL: "/gallery/greater.png" }
];

const abilityCard = [
  {
    title: "UI/UX Design",
    description:
      "From visually stunning websites to user-centric interfaces, I create solutions that leave a lasting impact.",
    services: ["User Interface Design", "User Experience Design", "Wireframing & Prototyping", "Interaction Design"],
  },
  {
    title: "Web Development",
    description:
      "I can help turn your vision into a captivating and efficient digital reality.",
    services: ["Front-End Development", "Full-Stack Development", "API Development"],
  },
  {
    title: "Branding",
    description:
      "I bring authenticity and purpose to every brand. Let's collaborate to tell your unique brand story.",
    services: ["Brand Strategy", "SEO / Google Ads"],
  },
];

const Intro = ({ ThemeDark, changeThemeRef, changeThemeRef3, isInView, isInView2 }) => {
  const aboutMeText =
    "I’m a freelance designer & developer from Taiwan. I create digital solutions that empower organizations committed to social responsibility and sustainability.";
  const [isFlipped, setIsFlipped] = useState([false, false, false, false]);
  const textRef = useRef();
  const helloRef = useRef();

  const handleCardClick = (index) => {
    setIsFlipped((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      console.log(newState);
      return newState;
    });
  };

  const galleryRef = useRef();
  const galleryTopRef = useRef();
  const galleryBottomRef = useRef();
  // const aboutMeTextRef = useRef()
  const abilityDeckRef = useRef();
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
  const translateX = `translateX(${scrollPosition / 10 - 200}px)`;
  const translateMinusX = `translateX(${(scrollPosition / 10 + 200) * -1}px)`;

  //scroll animation

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to([galleryTopRef.current, changeThemeRef.current], {
  //       opacity: 0,
  //       scrollTrigger: {
  //         trigger: galleryRef.current,
  //         start: "bottom 80%",
  //         end: "bottom top",
  //         pin: true,
  //         pinSpacing: false,
  //         // markers:true,
  //         scrub: 4,
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(abilityDeckRef.current, {
        x: '-25px',
        scrollTrigger: {
          trigger: changeThemeRef.current,
          start: "top 5%",
          end: "bottom center",
          pin: true,
          pinSpacing: true,
          // markers:true,
          scrub: 6,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".char", {
        opacity: 1,
        stagger: 0.1,
        duration: 0.1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "top center",
          // markers:true,
          scrub: 4,
          toggleActions: "complete complete complete complete",
        },
      });
    }, textRef.current);

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(helloRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: helloRef.current,
          start: "top 80%",
          end: "top center",
          // markers:true,
          scrub: 4,
          toggleActions: "complete complete complete complete",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Select the HTML element
  const bodyElement = document.querySelector('body');
  // Set the color scheme based on user preference
  if (prefersDarkMode) {
    if (isInView || isInView2) {bodyElement.classList.add('dark-mode-for-light') }else{ bodyElement.classList.remove('dark-mode-for-light');}
  } else {
    if (isInView || isInView2){
    bodyElement.classList.add('dark-mode-for-light')}
    else{bodyElement.classList.remove('dark-mode-for-light');}
  }
  }, [isInView, isInView2])

  return (
    <div ref={changeThemeRef} className={styles.introContainer}>

      <div ref={changeThemeRef3} className={styles.aboutMeContainer}>
        <p className={`${styles.hello} ${lora.className}`}>
          Hello there, I&apos;m Ralph.
        </p>
        <div ref={textRef} className="aboutMeText">
          {aboutMeText.split(" ").map((char, index) => (
            <span className="char" key={index}>
              {char}
            </span>
          ))}
        </div>
        <p ref={helloRef} className={styles.place}>
          Currently Living in Austin, TX
        </p>

        <div ref={abilityDeckRef} className={styles.abilityDeckContainer}>
          <div className={styles.heroArrow}>
            <Icon
              className={ThemeDark ? styles.inView : ""}
              icon="ph:arrow-up-light"
              style={{ fontSize: "2.4rem", transform: "rotate(120deg)" }}
              aria-label="Scroll down"
            />
          </div>
          {abilityCard.map((item, index) => {
            return (
              <div
                key={index}
                className={`${styles.abilityCard} ${styles.view} ${
                  isFlipped[index] ? styles.cardFlip : ""
                }`}
                onClick={() => handleCardClick(index)}
              >
                <div className={styles.abilityCardInner}>
                  <div className={styles.abilityCardFront}>
                    <p className={styles.abilityTitle}>{item.title}</p>
                    <p className={styles.abilityDescription}>
                      {item.description}
                    </p>
                  </div>
                  <div className={styles.abilityCardBack}>
                    <p className={styles.abilityService}>
                      I can help you with...
                    </p>
                    <div className={styles.servicesContainer}>
                      {item.services.map((service, index) => (
                        <div key={index} style={{ paddingBottom: "10px" }}>
                          <p className={styles.services}>{service}</p>
                          <div className={styles.divider}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <Link href='/about' className={`${styles.aboutMeCard} ${styles.go}`}>
            <p className={styles.abilityTitle}>More About Me</p>
            <p className={styles.abilityDescription}>Check out my about page and see what tools I use.</p>
          </Link>
        </div>
      </div>
      {/* <Work /> */}
    </div>
  );
};

export default Intro;
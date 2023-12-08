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
      "I create visually appealing interfaces with a focus on user-centric experiences that address real-world challenges.",
    services: ["User Interface Design", "User Experience Design", "Wireframing & Prototyping", "Interaction Design"],
  },
  {
    title: "Website Development",
    description:
      "I develop engaging digital presence that help amplify your mission",
    services: ["Front-End Development", "Full-Stack Development", "Webflow Development"],
  },
  {
    title: "Branding",
    description:
      "I strive to create brands that embody ethical values and resonate with diverse audiences.",
    services: ["Brand Strategy", "SEO / Google Ads"],
  },
  {
    title: "More About Me",
    description:
      "More about me and the tools I use",
    services: ["toAbout"],
  },
];

const Intro = ({ ThemeDark, changeThemeRef, changeThemeRef3, isInView, isInView2, abilityDeckRef }) => {
  const aboutMeText =
    "I’m a designer & developer from Taiwan. I explore the intersection of human experience and technology to create purposeful, user-centric solutions that make positive differences.";
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
  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.to(abilityDeckRef.current, {
  //       x: 0,
  //       scrollTrigger: {
  //         trigger: abilityDeckRef.current,
  //         start: "top bottom",
  //         end: "bottom 90%",
  //         scrub: 6,
  //       },
  //     });
  //   });

  //   return () => ctx.revert();
  // }, []);

  // useLayoutEffect(() => {
  //   // Check if the window width is greater than or equal to 430
  //   if (window.innerWidth >= 430) {
  //     // Initialize GSAP animation
  //     let ctx = gsap.context(() => {
  //       gsap.to(abilityDeckRef.current, {
  //         x: 0,
  //         scrollTrigger: {
  //           trigger: abilityDeckRef.current,
  //           start: 'top bottom',
  //           end: 'bottom 90%',
  //           scrub: 6,
  //         },
  //       });
  //     });

  //     // Clean up the animation on component unmount
  //     return () => ctx.revert();
  //   }
  // }, []);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if(window.innerWidth > 430 ){
        gsap.to(abilityDeckRef.current, {
          x: 0,
          scrollTrigger: {
            trigger: abilityDeckRef.current,
            start: 'top bottom',
            end: 'bottom 90%',
            scrub: 6,
          },
        });
      }
    };

    const ctx = gsap.context(() => {
      updateWidth(); // Initial setup

      // Update width on window resize
      const resizeHandler = () => {
        updateWidth();
      };

      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
        ctx.revert();
      };
    });
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
          start: "top bottom",
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

  return () => {
    const bodyElement = document.querySelector('body');
    bodyElement.classList.remove('dark-mode-for-light');
  };
  }, [isInView, isInView2])

  return (
    <div ref={changeThemeRef} className={styles.introContainer}>

      <div ref={changeThemeRef3} className={styles.aboutMeContainer}>
        <p className={`${styles.hello} ${lora.className}`}>
          Hello there, I&apos;m Ralph.
        </p>
        <div ref={textRef} className="aboutMeText">
          {aboutMeText.split(" ").map((char, index) => (
            <span className='char' key={index}>
              {char}
            </span>
          ))}
        </div>
        <p ref={helloRef} className={styles.place}>
          Currently Living in Austin, TX
        </p>
        <p className={styles.touchScreenTip2}><Icon
              icon="ph:arrow-up-light"
              style={{ fontSize: "2rem", transform: "rotate(210deg)" }}
              aria-label="Scroll down"
            />Tap the cards to see what&apos;s behind</p>


        <div ref={abilityDeckRef} className={styles.abilityDeckContainer}>
          <div className={styles.heroArrow}>
            <Icon
              className={ThemeDark ? styles.inView : ""}
              icon="ph:arrow-up-light"
              style={{ fontSize: "2.4rem", transform: "rotate(120deg)" }}
              aria-label="Scroll down"
            />
          </div>
          <p className={styles.touchScreenTip}><Icon
              icon="ph:arrow-up-light"
              style={{ fontSize: "2rem", transform: "rotate(210deg)" }}
              aria-label="Scroll down"
            />Tap the cards to see what&apos;s behind</p>
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
                    {item.title === "More About Me" ? (<p className={styles.abilityService}>
                      Go to my about page
                    </p>): (<p className={styles.abilityService}>
                      I can help you with...
                    </p>)}

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
          {/* <Link href='/about' className={`${styles.aboutMeCard} ${styles.go}`}>
            <p className={styles.abilityTitle}>More About Me</p>
            <p className={styles.abilityDescription}>Check out my about page and see what tools I use.</p>
          </Link> */}
        </div>
      </div>
      {/* <Work /> */}
    </div>
  );
};

export default Intro;

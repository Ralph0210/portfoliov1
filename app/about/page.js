"use client";
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Cursor from "../utils/Cursor";
import Footer from "../components/Footer/Footer";
import Lenis from "@studio-freight/lenis";
import styles from "./page.module.css";
import Image from "next/image";
import hero from "../../public/heroImages/hero.webp";
import { useInView } from "framer-motion";
import { Icon } from "@iconify/react";

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

const LevelIconContainer = ({ level }) => {
  const generateLevels = () => {
    if (level === 0) {
      return (
        <div className={styles.notApplicable}>
          <Icon icon="material-symbols:warning-outline" />
        </div>
      );
    }

    const levels = [];
    for (let i = 1; i <= 4; i++) {
      levels.push(
        <div key={i} className={i <= level ? styles.orange : styles.gray}></div>
      );
    }
    return levels;
  };

  return <div className={styles.levelIconContainer}>{generateLevels()}</div>;
};

const Page = () => {
  const resumeURL = "../../public/Resume.pdf";
  const isInViewRef = useRef(null);
  const isInView4 = useInView(isInViewRef);
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const [character, setCharacter] = useState(true);
  const [position, setPosition] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, wheelMultiplier: 1.1 });

    lenis.on("scroll", (e) => {
      // console.log(e)
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    sideNavOpened ? lenis.stop() : lenis.start();

    return () => {
      lenis.destroy();
    };
  }, [sideNavOpened]);

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
  const translateY = `translateY(${scrollPosition / 10}px)`;
  const translateY2 = `translateY(${scrollPosition / 5}px)`;

  // my ability
  const levels = [
    {
      level: "BASIC",
      box: 1,
      descriptionResponsible:
        "I can perform the task with minimal guidance.",
      description: "I've done it a couple of times, so I can tell people I do it all the time.",
    },
    {
      level: "INTERMEDIATE",
      box: 2,
      descriptionResponsible:
        "I can adapt the skill to different situations and solve related problems.",
      description: "I'm prEtty sUrE I knOw whAt I Am dOIng.",
    },
    {
      level: "ADVANCED",
      box: 3,
      descriptionResponsible:
        "I can teach others the skill and provide expert advice.",
      description: "My friends would tell others about it.",
    },
    {
      level: "EXPERT",
      box: 4,
      descriptionResponsible:
        "I am able to innovate and develop new approaches within this skill",
      description: "I have the proficiency equivalent to a professional.",
    },
  ];

  const techStack = [
    {
      category: "FRONT-END",
      tech: [
        { name: "HTML & CSS", level: 3 },
        { name: "JavaScript", level: 2 },
        { name: "React JS", level: 2 },
        { name: "Framer Motion", level: 2 },
        { name: "GSAP", level: 2 },
      ],
    },
    {
      category: "BACK-END",
      tech: [
        { name: "Node JS", level: 2 },
        { name: "Express JS", level: 1 },
        { name: "Flask", level: 2 },
      ],
    },
    {
      category: "DATABASE",
      tech: [
        { name: "SQL", level: 2 },
        { name: "MySQL", level: 2 },
      ],
    },
    {
      category: "SERVICES",
      tech: [
        { name: "Webflow", level: 2 },
        { name: "Google Analytics", level: 2 },
        { name: "Azure", level: 1 },
        { name: "AWS", level: 1 },
      ],
    },
  ];

  const skills = [
    {
      category: "MUSIC",
      tech: [
        { name: "Classical Guitar", level: 4 },
        { name: "Drums", level: 3 },
        { name: "Marimba", level: 3 },
        { name: "Piano", level: 2 },
      ],
    },
    {
      category: "SPORTS",
      tech: [
        { name: "Cycling", level: 3 },
        { name: "Scuba Diving", level: 2 },
        { name: "Surfing", level: 1 },
        { name: "Free Diving", level: 1 },
      ],
    },
    {
      category: "CULINARY",
      tech: [
        { name: "Asian Food", level: 3 },
        { name: "Italian Food", level: 2 },
        { name: "American Food", level: 1 },
      ],
    },
    {
      category: "RANDOM",
      tech: [
        { name: "Driving", level: 3 },
        { name: "Writing", level: 2 },
        { name: "Fashion", level: 2 },
      ],
    },
  ];

  const designSkills = [
    {
      category: "TOOLS",
      tech: [
        { name: "Figma", level: 3 },
        { name: "Blender", level: 1 },
      ],
    },
    {
      category: "UI",
      tech: [
        { name: "Interaction Design", level: 2 },
        { name: "Responsive Design", level: 3 },
        { name: "Wireframing & Prototyping", level: 3 },
      ],
    },
    {
      category: "UX",
      tech: [
        { name: "User Research", level: 2 },
        { name: "Usability Testing", level: 2 },
      ],
    },
    {
      category: "VISUAL",
      tech: [
        { name: "Design System", level: 2 },
        { name: "Graphic Design (color, typography, layout)", level: 2 },
      ],
    },
  ];

  const interPersonalSkills = [
    {
      category: "COMMUNICATION",
      tech: [
        { name: "Active Listening", level: 3 },
        { name: "Verbal Communication", level: 2 },
        { name: "Empathy", level: 3 },
        { name: "Giving and receiving feedback", level: 2 },
      ],
    },
    {
      category: "TEAMWORK",
      tech: [
        { name: "Leadership", level: 2 },
        { name: "Collaboration", level: 3 },
        { name: "Problem-solving", level: 3 },
      ],
    },
    {
      category: "RELATIONSHIP",
      tech: [
        { name: "Networking", level: 2 },
        { name: "IntErpersOnaL nEws", level: 3 },
      ],
    },
    {
      category: "PERSONAL",
      tech: [
        { name: "Self-awareness", level: 3 },
        { name: "Emotional Intelligence", level: 3 },
        { name: "Time Management", level: 2 },
        { name: "Resilience", level: 3 },
      ],
    },
  ];

  //resume
  const resume = [
    {
      company: "Shaachi",
      position: "Full-stack Developer",
      time: "October – Present",
      duty: [
        "Implemented new file uploading system to backend AI to improve overall user experience.",
        "Utilized HTML, CSS, and JavaScript to implement user interfaces and interactive features.",
        "Maintained web application on Amazon AWS.",
      ],
    },
    {
      company: "The University of Texas at Austin",
      position: "Full-stack Developer",
      time: "May 2023 - November 2023",
      duty: [
        "Implemented new file uploading system to backend AI to improve overall user experience.",
        "Utilized HTML, CSS, and JavaScript to implement user interfaces and interactive features.",
        "Maintained web application on Amazon AWS.",
      ],
    },
  ];

  return (
    <div className={styles.wrapper}>
      <Cursor />
      <Navbar
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
        ref={isInViewRef}
      />
      <div className={styles.aboutMeContainer}>
        <div className={styles.aboutMeImageContainer}>
          <Image
            placeholder="blur"
            src={hero}
            style={{ objectFit: "cover", transform: translateY }}
          />
        </div>
        <div
          className={styles.aboutMeTextContainer}
          style={{ transform: translateY2 }}
        >
          <span>RALPH CHANG&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;EST 2002</span>

          <div>
            <div>
              <h1 className={lora.className}>DESIGNER</h1>
            </div>
            <div>
              <h1 className={lora.className}>& DEVELOPER</h1>
            </div>
          </div>

          <h2>
            A talented stand-up comedian (at heart), with a dream of creating a
            successful social entrepreneurship through digital solutions.
          </h2>
          <p>
            With my background in Human-Centered Design and Engineering, I bring
            critical user design skills with strong software engineering skills to every
            project. I thrive on collaborating with talented and inspiring teams and always look for new opportunities to learn.
          </p>
          <p>
            When I am not channeling my inner responisble adult, you can find me cycling up the endless hill, jamming jazzy
            R&B songs with friends, or cooking a sorts of foods.
          </p>
          <div className={styles.resumeHeader}>
            <a
              href='/Resume.pdf'
              download="Ralph_Chang_Resume_2025"
              className={` ${lora.className} ${styles.h3}`}
            >
              My Résumé <Icon icon="material-symbols:download" />
            </a>
            {/* <div className={styles.resumeContainer}>
              <div className={styles.selectorContainer}>
                <span
                  onClick={() => setPosition(true)}
                  style={
                    position
                      ? {
                          backgroundColor: "#EC643C",
                          color: "white",
                          border: "none",
                        }
                      : {}
                  }
                >
                  Developer
                </span>
                <span
                  onClick={() => setPosition(false)}
                  style={
                    position
                      ? {}
                      : {
                          backgroundColor: "#EC643C",
                          color: "white",
                          border: "none",
                        }
                  }
                >
                  Designer
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.chooseContainer}>
          <h1 className={lora.className} style={{ marginRight: "5%" }}>
            Choose your character...
          </h1>
          <div className={styles.characterContainer}>
            <span
              onClick={() => setCharacter(true)}
              style={
                character
                  ? {
                      backgroundColor: "#EC643C",
                      color: "white",
                      border: "none",
                    }
                  : {}
              }
            >
              Responsible Adult Ralph
            </span>
            <span
              onClick={() => setCharacter(false)}
              style={
                character
                  ? {}
                  : {
                      backgroundColor: "#EC643C",
                      color: "white",
                      border: "none",
                    }
              }
            >
              Everyday Ralph
            </span>
          </div>
        </div>

        <div className={styles.abilityContainer}>
          <h3 className={` ${lora.className} ${styles.h3}`}>
            Proficiency Levels
          </h3>
          <div className={styles.topContainer}>
            {levels.map((level, index) => (
              <div key={index} className={styles.levelContainer}>
                <span>{level.level}</span>
                <div>
                  <LevelIconContainer level={level.box} />
                </div>
                {character ? (
                  <p>{level.descriptionResponsible}</p>
                ) : (
                  <p>{level.description}</p>
                )}
              </div>
            ))}
          </div>
          <div className={styles.divider}></div>
          <h3 className={` ${lora.className} ${styles.h3}`}>
            {character ? "My Tech Stack" : "Interpersonal Skills"}
          </h3>

          {character ? (
            <div className={styles.techContainer}>
              {techStack.map((tech, index) => (
                <div key={index} className={styles.techStackContainer}>
                  <span>{tech.category}</span>
                  <div className={styles.techStackInnerContainer}>
                    {tech.tech.map((tech, index) => (
                      <div key={index} className={styles.techStackItem}>
                        <p>{tech.name}</p>
                        <LevelIconContainer level={tech.level} />
                      </div>
                    ))}
                    {/* {" "} */}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.techContainer}>
              {interPersonalSkills.map((tech, index) => (
                <div key={index} className={styles.techStackContainer}>
                  <span>{tech.category}</span>
                  <div className={styles.techStackInnerContainer}>
                    {tech.tech.map((tech, index) => (
                      <div key={index} className={styles.techStackItem}>
                        <p>{tech.name}</p>
                        <LevelIconContainer level={tech.level} />
                      </div>
                    ))}
                    {/* {" "} */}
                  </div>
                </div>
              ))}
            </div>
          )}

          {character ? (
            <>
              <div className={styles.divider}></div>
              <h3 className={` ${lora.className} ${styles.h3}`}>
                My Design Skills
              </h3>
              <div className={styles.techContainer}>
                {designSkills.map((tech, index) => (
                  <div key={index} className={styles.techStackContainer}>
                    <span>{tech.category}</span>
                    <div className={styles.techStackInnerContainer}>
                      {tech.tech.map((tech, index) => (
                        <div key={index} className={styles.techStackItem}>
                          <p>{tech.name}</p>
                          <LevelIconContainer level={tech.level} />
                        </div>
                      ))}
                      {/* {" "} */}
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className={styles.divider}></div>
              <h3 className={` ${lora.className} ${styles.h3}`}>
              Avocation
              </h3>
              <div className={styles.techContainer}>
                {skills.map((tech, index) => (
                  <div key={index} className={styles.techStackContainer}>
                    <span>{tech.category}</span>
                    <div className={styles.techStackInnerContainer}>
                      {tech.tech.map((tech, index) => (
                        <div key={index} className={styles.techStackItem}>
                          <p>{tech.name}</p>
                          <LevelIconContainer level={tech.level} />
                        </div>
                      ))}
                      {/* {" "} */}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          <div className={styles.divider}></div>
          <div className={styles.resumeHeader}>
            <a
              href='/Resume.pdf'
              download="Ralph_Chang_Resume_2025"
              className={` ${lora.className} ${styles.h3}`}
            >
              My Résumé <Icon icon="material-symbols:download" />
            </a>
            {/* <div className={styles.resumeContainer}>
              <div className={styles.selectorContainer}>
                <span
                  onClick={() => setPosition(true)}
                  style={
                    position
                      ? {
                          backgroundColor: "#EC643C",
                          color: "white",
                          border: "none",
                        }
                      : {}
                  }
                >
                  Developer
                </span>
                <span
                  onClick={() => setPosition(false)}
                  style={
                    position
                      ? {}
                      : {
                          backgroundColor: "#EC643C",
                          color: "white",
                          border: "none",
                        }
                  }
                >
                  Designer
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer isInView4={isInView4} />
    </div>
  );
};

export default Page;

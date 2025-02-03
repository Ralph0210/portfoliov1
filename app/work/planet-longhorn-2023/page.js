"use client";
import React, { useRef, useState, useEffect, forwardRef } from "react";
import styles from "./page.module.css";
import Cursor from "@/app/utils/Cursor";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { useInView } from "framer-motion";
import Link from "next/link";
import Lenis from "@studio-freight/lenis";
import Hero from "@/app/components/workPageComponents/Hero/Hero";
import Analyze from "@/app/components/workPageComponents/Analyze/Analyze";
import Preview from "@/app/components/workPageComponents/preview/Preview";
import WebDesign from "@/app/components/workPageComponents/webDesign/WebDesign";
import WebDev from "@/app/components/workPageComponents/webDev/WebDev";
import Conclusion from "@/app/components/workPageComponents/Conclusion/Conclusion";
import MoreWork from "@/app/components/workPageComponents/moreWork/MoreWork";
import pl from "../../../public/pl/pl.png";
import branding from "../../../public/pl/branding.png";
import wireframe from "../../../public/pl/wireframe.png";
import home from "../../../public/pl/home.png";
import elevate from "../../../public/elevate/elevate.png";
import scf from "../../../public/scf/scf.png";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const isInViewRef = useRef(null);
  const isInView4 = useInView(isInViewRef);
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    setDarkMode(mediaQuery.matches);

    const handleChange = (e) => {
      if (e.matches) {
        console.log("System switched to dark mode");
        setDarkMode(true);
        // Additional actions when system switches to dark mode
      } else {
        console.log("System switched to light mode");
        setDarkMode(false);
        // Additional actions when system switches to light mode
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener on component unmount
    // return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  //hero
  const hero = {
    org: "Planet Longhorn",
    titleFirst: "Bridging cultures",
    titleSecond: "through digital design.",
    tags: [
      "WEBSITE DESIGN",
      "WEBSITE DEVELOPMENT",
      "BRANDING",
      "CONTENT CREATION",
    ],
    image: pl,
    overview:
      "The goal of the Planet Longhorn website was to create an online presence that not only serves as an informational resource for current and prospective members but also embodies the organization's vibrant community spirit. The website aims to facilitate easy access to event information, membership details, and organization news, while also highlighting the diverse and inclusive nature of Planet Longhorn.",
    liveSite: true,
    siteLink: "https://www.planet-longhorn.org/",
    Role: "Role",
    role: ["Website Designer", "Website Developer"],
    duration: "Fall 2023",
    designLink:"https://www.figma.com/file/rCtOehDYROxdxuwrE907UD/PL?type=design&node-id=0%3A1&mode=design&t=7NqjsLhYEmX4hEey-1",
    codeLink:"https://github.com/Ralph0210/Planet-Longhorn"
  };

  const bgColor = "#F2D5C2";

  //analyze
  const analyze = [
    {
      tag: "BRANDING",
      title: "Creating brand identity.",
      description:
        "As the biggest international/exchange student organization on the campus of the University of Texas at Austin, Planet Longhorn’s brand needed to resonate with a diverse student body, reflecting a vibrant, inclusive, and dynamic community.",
      imageLight: branding,
      imageDark: branding,
      themeDark: darkMode,
    },
    {
      tag: "WIREFRAME",
      title: "Creating a magazine-style experience.",
      description:
        "When developing the wireframes for Planet Longhorn's website, the goal was to emulate the immersive, visually-rich experience of a magazine. This approach aimed to showcase the community's spirit and inclusivity through photography, thus creating a dynamic and engaging user experience.",
      imageLight: wireframe,
      imageDark: wireframe,
      themeDark: darkMode,
    },
  ];

  //preview
  const preview = {
    vidId: "ANH4hQyUL5s",
    bgColor: bgColor,
  };

  //web design
  const webDesign = {
    tag: "WEBSITE DESIGN",
    title: "Engaging exploration and storytelling.",
    description:
      "The website emphasizes international community inclusivity at every turn, using words and quotes as a foundation, supported by subtle interactions along the way to make the experience feel sincere and tangible.",
    image: home,
    bgColor: bgColor,
  };

  //web dev
  const webDev = {
    tag: "WEB DEVELOPMENT",
    text:[
    {
      name: "Front-end",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Next.js",
        "Framer Motion",
      ],
    },
    {
      name: "Deployment",
      tech: ["Vercel"],
    }],
  };

  //conclusion
  const con = {
    takeaways:"This project improved my proficiency with the Next.js framework and honed my skills in creative interaction and design. It also broadened my experience in translating the inclusive, kind, and passionate ethos of the Planet Longhorn team into a compelling and visually engaging online presence.",
    challenges: ["to hard:"],
    solutions: ["to easy:"],
    impact:
      "planet longhorn is a organization for mostly international students and exchange students, having an googleable online presence helps incoming students have better chance finding this amazing organization.",
    nextStep:
      "Collaborating with the Planet Longhorn team to build their events and gallery pages, which will document their events and meetings. We are also incorporating a Content Management System (CMS) to enable team officers to update the website easily.",
    learnedTitle: [
      "Accessibility is crucial:",
      "User research is essential:",
      "Iteration is key:",
      "Focusing on simplifying:"
    ],
    learnedTitle:[
      "Design Skills Improvement:",
      "Interactive Website Design:",
      "SEO Optimization with Next.js:",
      "Adopting Bun.js:"
    ],
    learned: [
      "Learned how to leverage a combination of high-quality references and AI-generated imagery to craft a modern website design that aligns with current trends and aesthetics.",
      "Recognized the importance of incorporating interactive elements throughout the website, which significantly boosts user engagement and provides a dynamic browsing experience.",
      "Iteration is key to creating a successful product. Don't be afraid to make changes based on user feedback, and be willing to experiment with different design ideas until you find the one that works best.",
      "This experience broadened my skills and highlighted the value of keeping up with tech advancements."
    ],
  };

  //more projects
  const more = [
    {
      image: scf,
      title: "Statistical Analysis Web App",
      link: "/work/scf-2023",
      tags:["PRODUCT ENGINEERING"],
      description:"This project simplifies the vast Survey of Consumer Finance data into an accessible and engaging web application for all users."
    },
    {
      image: elevate,
      title: "Elevate Smart Mirror",
      link: "/work/elevate-2024",
      tags:["UIUX", "USER RESEARCH"],
      description:"Improving Body Image and Self-Esteem Through a Personalized Smart Fitness Mirror."
    },
  ];

  return (
    <div className={styles.plContainer}>
      <Cursor />
      {/* <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            className={styles.loading}
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100vh", opacity: 1 }}
            transition={{ duration: 1 }}
          >
            loading
          </motion.div>
        ) : null}
      </AnimatePresence> */}
      <Navbar
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
      />
      <div className={styles.workPageContainer}>
        <p ref={isInViewRef}></p>
        <Hero heroData={hero} />
        <div className={styles.background}></div>
        <Analyze prop={analyze} />
        <Preview prop={preview} />
        <WebDesign prop={webDesign} />
        <WebDev prop={webDev} />
        <Conclusion prop={con} />
      </div>
      <MoreWork prop={more} />
      <Footer isInView4={true} />
    </div>
  );
};

export default Page;

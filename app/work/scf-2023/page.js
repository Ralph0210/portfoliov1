"use client";
import React, { useRef, useState, useEffect } from "react";
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
import WebDesignText from "@/app/components/workPageComponents/webDesignText/WebDesignText";
import WebDev from "@/app/components/workPageComponents/webDev/WebDev";
import Conclusion from "@/app/components/workPageComponents/Conclusion/Conclusion";
import MoreWork from "@/app/components/workPageComponents/moreWork/MoreWork";
import scf from "../../../public/scf/scf.png";
import problem from "../../../public/scf/problem.png";
import painPoints from "../../../public/scf/painPoints.png";
import personas from "../../../public/scf/personas.png";
import lowfi from "../../../public/scf/lowfi.png";
import usabilityImg from "../../../public/scf/usability.png";
import refined from "../../../public/scf/refined.png";
import mockupsImg from "../../../public/scf/mockups.png";


import branding from "../../../public/flori/overview.png";
import research from "../../../public/flori/research.png";
import alisa from "../../../public/flori/alisa.png";
import julia from "../../../public/flori/julia.png";
import journey from "../../../public/flori/journey.png";
import paperImg from "../../../public/flori/paper.png";
import digitalImg from "../../../public/flori/digital.png";
import lowfiImg from "../../../public/flori/lowfi.png";
import hifiImg from "../../../public/flori/hifi.png";
import accessibilityImg from "../../../public/flori/accessibility.png";

const Page = () => {
  const [darkMode, setDarkMode] = useState(false);
  const isInViewRef = useRef(null);
  const isInView4 = useInView(isInViewRef);
  const [sideNavOpened, setSideNavOpened] = useState(false);

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

  //hero
  const hero = {
    org: "Personal Project",
    titleFirst: "Democratizing Financial knowledge.",
    titleSecond: "",
    tags: ["UI/UX DESIGN", "WEB DESIGN", "USER RESEARCH", "USABILITY STUDY", "FULL-STACK DEVELOPMENT"],
    image: scf,
    overview:
      "This project embarks on a mission to transform the Survey of Consumer Finance (SCF) – a valuable set of financial data collected every 3 years by the Federal Reserve – into an accessible and engaging experience for everyone.",
    overview2:"Traditionally, the SCF's vastness – encompassing an average of 250 variables and more than 20k rows of data in each year’s extracted dataset – can be daunting to navigate, even for seasoned researchers. This web application aims to bridge this gap, unlocking the power of the SCF for a wider audience.",
    liveSite: true,
    siteLink: "./",
    role: ["Designer", "Developer"],
    duration: "Fall 2023 - Present",
    ongoing: true
  };

  const bgColor = "#85AED4";

  //analyze
  const analyze = [
    {
      tag: "PROBLEM",
      title: "Understanding the gap of existing tools.",
      description: "Currently, two SCF data exploration platforms exist: the Statistical Data Application (SDA) and the interactive chartbook. SDA boasts advanced analysis tools like correlation and regression, yet untrained users find it daunting. Conversely, the chartbook offers simple data visualization but lacks depth for rigorous exploration. Downloading the raw data for personal analysis is an option, but deciphering the variables requires constant codebook reference.",
      // "As the biggest international/exchange student organization on the campus of the University of Texas at Austin, Planet Longhorn’s brand needed to resonate with a diverse student body, reflecting a vibrant, inclusive, and dynamic community.",
      imageLight: problem,
      imageDark: problem,
      themeDark: darkMode,
      noText: false,
    },
    {
      tag: "USER RESEARCH",
      title: "Understanding user needs.",
      description:
        "To understand the needs of users unfamiliar with SCF, I presented the interviewees with a scenario where they needed to find the average household income by education level using SCF data, simulating basic data exploration. Additionally, I conducted secondary research through competitor analysis and industry articles to gain a broader understanding of user expectations and existing challenges.",
      imageLight: painPoints,
      imageDark: painPoints,
      themeDark: darkMode,
      noText: false,
    },
    {
      tag: "PERSONAS",
      title: "Guide to a Better SCF Experience.",
      description:
        "By stepping into the shoes of these personas, I was able to empathize with user pain points and identify key opportunities for improvement. Robert's frustrations pointed towards streamlining workflows and enhancing data accessibility. Priya's struggles underscored the need for intuitive navigation and simplified visualizations.",
      imageLight: personas,
      imageDark: personas,
      themeDark: darkMode,
      noText: false,
    },
  ];

  //web design
  const process = {
    tag: "PROCESS",
    title: "Prioritizing feature.",
    description:
      "Driven by the wealth of information within the SCF dataset and a deep understanding of user challenges, we've prioritized the development of intuitive data exploration and analysis tools.",
    image: paperImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const lofi = {
    tag: "PROTOTYPE",
    title: "Low-fidelity prototype.",
    description:
      "This low-fidelity prototype showcases a user flow that guides users from pinpointing their interests to tailored data exploration(the data exploration page dynamically highlights variables related to user-chosen interests), and analytic tools.",
    image: lowfi,
    bgColor: bgColor,
    mobileContainer: false,
    imageText: true
  };

  const usability = {
    tag: "USABILITY",
    title: "Usability study and findings.",
    description: "",
    image: usabilityImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const iterations = {
    tag: "ITERATIONS",
    title: "Refining the design.",
    description:"Fueled by insights from usability testing and inspired by innovative approaches to data visualization from https://nfp73.ch/de, I redesigned the way users explore variables within the SCF dataset. Instead of traditional lists, I’ve introduced an interactive map of variables, offering a more intuitive and engaging experience. I also simplified the interface of the analysis page, allowing user to perform desired tasks easily.",
    image: refined,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const mockups = {
    tag: "MOCKUPS",
    title: "Product mockups.",
    description:"",
    image: mockupsImg,
    bgColor: bgColor,
    mobileContainer: true,
  };

  const preview = {
    vidId: "eYtFt34CLms",
    bgColor: bgColor,
  };

  const navbar = {
    tag: "INTERACTION",
    title: "Navbar.",
    description: "The navbar features a rounded shape that highlights the current page. This shape follows the user's cursor as it moves across the navbar. When the cursor leaves the navbar, the shape returns to its position on the current page.",
    image: hifiImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const accessibility = {
    tag: "ACCESSIBILITY",
    title: "Accessibility considerations.",
    description: "",
    image: accessibilityImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  //conclusion
  const con = {
    challenges: ["to hard:"],
    solutions: ["to easy:"],
    impact:
      "Florist can design floral arrangement easily and present their design to customers to ensure their bouquets are well-received without costly and time-consuming re-dos.",
    nextStep:
      "The UI/UX design of Flori involves continuous iteration based on user feedback and testing, learning advanced features of Figma like autolayout, and incorporating more accessibility features.",
    learned: [
      "Accessibility is crucial. Focus on contrast, font size, and user feedback to make the app usable and enjoyable for a broad audience.",
      "User research is essential to comprehend the needs and issues of the target audience. A deep understanding of the problem through user research is required for product success.",
      "Iteration is key to creating a successful product. Don't be afraid to make changes based on user feedback, and be willing to experiment with different design ideas until you find the one that works best.",
      "Incorporate features that make sense for my users, such as the ability to favorite flowers or categorize design needs. Make sure that these features are easy to use and add value to the user experience."
    ],
  };

  //more projects
  const more = [
    {
      image: scf,
      title: "Planet Longhorn",
      link: "/work/planet-longhorn-2023",
    },
    {
      image: scf,
      title: "Planet Longhorn",
      link: "/work/planet-longhorn-2023",
    },
  ];

  return (
    <div className={styles.plContainer}>
      <Cursor />
      <Navbar
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
      />
      <div className={styles.workPageContainer}>
        <p ref={isInViewRef}></p>
        <Hero heroData={hero} />
        <div className={styles.background}></div>
        <Analyze prop={analyze} />
        <WebDesign prop={process} />
        <WebDesignText prop={lofi} />
        <WebDesign prop={usability} />
        <WebDesignText prop={iterations} />
        <WebDesign prop={mockups} />
        <Preview prop={preview} />
        <div className={styles.background}></div>
        <WebDesign prop={navbar} />
        <WebDesign prop={accessibility} />
        <Conclusion prop={con}/>
      </div>
      <MoreWork prop={more} />
      <Footer isInView4={true} />
    </div>
  );
};

export default Page;

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
import WebDev from "@/app/components/workPageComponents/webDev/WebDev";
import Conclusion from "@/app/components/workPageComponents/Conclusion/Conclusion";
import MoreWork from "@/app/components/workPageComponents/moreWork/MoreWork";
import flori from "../../../public/flori/flori.png";
import branding from "../../../public/flori/overview.png";
import research from "../../../public/flori/research.png";
import alisa from "../../../public/flori/alisa.png";
import julia from "../../../public/flori/julia.png";
import journey from "../../../public/flori/journey.png";
import paperImg from "../../../public/flori/paper.png";
import digitalImg from "../../../public/flori/digital.png";
import lowfiImg from "../../../public/flori/lowfi.png";
import usabilityImg from "../../../public/flori/usabilityImg.png";
import mockupsImg from "../../../public/flori/mockups.png";
import hifiImg from "../../../public/flori/hifi.png";
import accessibilityImg from "../../../public/flori/accessibility.png";
import greater from "../../../public/greater/greater.png";
import sehath from "../../../public/sehath/sehath.png";

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
    org: "Flori",
    titleFirst: "Floral design app",
    titleSecond: "",
    tags: ["UI/UX DESIGN", "USER RESEARCH", "USABILITY STUDY"],
    image: flori,
    overview:
      "Flori is a UX case study for Google UX Design Certificate. It’s a floral arrangement app designed to help users create beautiful and customized flower arrangements for any occasion.",
    liveSite: false,
    siteLink: null,
    role: ["UI/UX Designer"],
    duration: "Fall 2022",
    designLink:"https://www.figma.com/file/9kRfTrg7EioKfS2vD9Yrxk/flori?type=design&node-id=0%3A1&mode=design&t=dAZl7xoHwuJyhTz1-1"
  };

  const bgColor = "#FAC9CB";

  //analyze
  const analyze = [
    {
      tag: "OVERVIEW",
      title: "The problem and the goal.",
      description: "",
      // "As the biggest international/exchange student organization on the campus of the University of Texas at Austin, Planet Longhorn’s brand needed to resonate with a diverse student body, reflecting a vibrant, inclusive, and dynamic community.",
      imageLight: branding,
      imageDark: branding,
      themeDark: darkMode,
      noText: false,
    },
    {
      tag: "USER RESEARCH",
      title: "Understanding the user.",
      description:
        "In my user research on florists, I found issues such as uncertainty about flower and foliage combinations, time and cost involved in trial and error, difficulty in client communication, and disorganization in order tracking. To solve these, I aim to create an app providing bouquet tips, improving client communication, and managing orders and inventory. The app will also have features for users with disabilities.",
      imageLight: research,
      imageDark: research,
      themeDark: darkMode,
      noText: false,
    },
    {
      tag: "PERSONA",
      title: "Problem statement.",
      description:
        "Alisa Brooke is a trendy florist who needs a new way to make sure her bouquet design will be well-received by her customers because she doesn’t have the time and resources to redo her bouquet.",
      imageLight: alisa,
      imageDark: alisa,
      themeDark: darkMode,
      noText: false,
    },
    {
      tag: "PERSONA",
      title: "Problem statement.",
      description:
        "Julia Jiang is a trendy florist who needs a faster way to design her bouquet and publish them because she wants to showcase her work to the world faster.",
      imageLight: julia,
      imageDark: julia,
      themeDark: darkMode,
      noText: false,
    },
    {
      tag: "USER JOURNEY MAP",
      title: "A fast and easy way to see the floral design.",
      description:
        "Thanks to user research, I can segment a florist’s job into small actions and find place for improvement opportunities.",
      imageLight: journey,
      imageDark: journey,
      themeDark: darkMode,
      noText: false,
    },
  ];

  //web design
  const paper = {
    tag: "WIREFRAME",
    title: "Paper wireframes.",
    description:
      "Paper wireframes aim to enhance the user experience and solve any pain points. These wireframes took inspiration from image editing and note apps to develop a user-friendly interface that exceeds expectations.",
    image: paperImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const digital = {
    tag: "WIREFRAME",
    title: "Digital wireframes.",
    description:
      "The first wireframe allows users to access recent projects at the top, find suggested color combinations for inspiration in the middle, and view a card layout of flowers at the bottom. The second wireframe is the design panel for bouquet.",
    image: digitalImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const lowfi = {
    tag: "PROTOTYPE",
    title: "Low-fidelity prototype.",
    description:
      "Here's a low-fidelity prototype that includes a home page where users can create or edit files, search for content, and add flowers to a selected project. When the user exits a file, a confirmation box will appear to let them know that their progress has been saved.",
    image: lowfiImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const usability = {
    tag: "USABILITY",
    title: "Usability study findings.",
    description: "",
    image: usabilityImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const mockups = {
    tag: "MOCKUPS",
    title: "Refining the design.",
    description:
      "The refined design will have a list of scrollable buttons at the bottom, categorizing the user's floral design needs. This leaves more canvas space for design and creation. Usability test results show that users don't often add flowers to a project. They need a simpler way to add flowers during the design process. To address this, I've added a feature for users to favorite flowers. On the design page, under the 'focal' and 'foliage' buttons, users can view their favorite flowers. This makes it simpler for them to add preferred flowers to their designs.",
    image: mockupsImg,
    bgColor: bgColor,
    mobileContainer: true,
  };

  const hifi = {
    tag: "PROTOTYPE",
    title: "High-fidelity prototype.",
    description: "",
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
    takeaways:"The project was instrumental in deepening my understanding of the design thinking framework. I enhanced my visual design skills by adhering to Material Design guidelines and developing a compact component library. Additionally, it significantly improved my ability to empathize with users, leading to more user-centric designs.",
    challenges: ["to hard:"],
    solutions: ["to easy:"],
    impact:
      "Florist can design floral arrangement easily and present their design to customers to ensure their bouquets are well-received without costly and time-consuming re-dos.",
    nextStep:
      "The UI/UX design of Flori involves continuous iteration based on user feedback and testing, learning advanced features of Figma like autolayout, and incorporating more accessibility features.",
    learnedTitle: [
      "Accessibility is crucial:",
      "User research is essential:",
      "Iteration is key:",
      "Focusing on simplifying:"
    ],
    learned: [
      "Focus on contrast, font size, and user feedback to make the app usable and enjoyable for a broad audience.",
      "User research is essential to comprehend the needs and issues of the target audience. A deep understanding of the problem through user research is required for product success.",
      "Iteration is key to creating a successful product. Don't be afraid to make changes based on user feedback, and be willing to experiment with different design ideas until you find the one that works best.",
      "Incorporate features that make sense for my users, such as the ability to favorite flowers or categorize design needs. Make sure that these features are easy to use and add value to the user experience."
    ],
  };

  //more projects
  const more = [
    {
      image: greater,
      title: "Greater",
      link: "/work/greater-2023",
      tags:["UIUX DESIGN"],
      description:"Design an app that connects users with LGBTQIA+ friendly spots in Austin, Texas."
    },
    {
      image: sehath,
      title: "UT Sehath",
      link: "/work/sehath-2023",
      tags:["WEB DESIGN", "WEB DEVELOPMENT"],
      description:"Design and develop an informative fundraising platform to showcase UT Sehath's commitment to global healthcare."
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
        <WebDesign prop={paper} />
        <WebDesign prop={digital} />
        <WebDesign prop={lowfi} />
        <WebDesign prop={usability} />
        <WebDesign prop={mockups} />
        <WebDesign prop={hifi} />
        <WebDesign prop={accessibility} />
        <Conclusion prop={con}/>
      </div>
      <MoreWork prop={more} />
      <Footer isInView4={true} />
    </div>
  );
};

export default Page;

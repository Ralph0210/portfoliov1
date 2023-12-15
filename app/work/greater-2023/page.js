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
import greater from "../../../public/greater/greater.png";
import overview from "../../../public/greater/overview.png";
import research from "../../../public/flori/research.png";
import personas from "../../../public/greater/personas.png";
import journey from "../../../public/flori/journey.png";
import paperImg from "../../../public/flori/paper.png";
import digitalImg from "../../../public/flori/digital.png";
import lowfiImg from "../../../public/flori/lowfi.png";
import usabilityImg from "../../../public/flori/usabilityImg.png";
import mockupsImg from "../../../public/flori/mockups.png";
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
    org: "Qwell",
    titleFirst:
      "Community foundation works to improve LGBTQIA+ quality of life in Austin, Texas.",
    titleSecond: "",
    tags: ["UI/UX DESIGN", "USER RESEARCH", "USABILITY STUDY"],
    image: greater,
    overview:
      "The Greater app helps users explore LGBTQIA+ friendly places/restaurants and organize meetups to engage with the Austin community. Its main purpose is to provide a platform to discover and connect with LGBTQIA+ friendly establishments/events in Greater Austin. Unique features include filtering listings based on specific criteria and creating events to share with the community. The target audience is LGBTQIA+ residents and allies looking to support LGBTQIA+ friendly businesses/events, and the benefits include discovering new places and experiences and promoting inclusivity and diversity in the area.",
    liveSite: false,
    siteLink: null,
    role: ["UI/UX Designer"],
    duration: "Spring 2023",
  };

  const bgColor = "#08B47A";

  //analyze
  const analyze = [
    {
      tag: "OVERVIEW",
      title: "Problem.",
      description: "",
      imageLight: overview,
      imageDark: overview,
      themeDark: darkMode,
      noText: false,
      // noImg: true,
    },
    {
      tag: "MY RESPONSIBILITY",
      title: "1. Survey interface design.",
      description:
        "The app includes a Wellbeing Survey, Dashboard, Settings, App Invites, FAQ, and Credits. Users can earn points and gifts for answering QWELL's survey questions and can choose to remain anonymous. The survey is only available for a limited time (June-August). Users have the option to alter demographic answers and report adverse experiences.",
      imageLight: "",
      imageDark: "",
      themeDark: darkMode,
      noText: false,
      noImg: true,
    },
    {
      tag: "MY RESPONSIBILITY",
      title: "2. Help menu.",
      description:
        "Users can request referrals and information not available in the app. In cases where there are no search results, users can request push notifications for future answers. Unanswered queries are shown to other users as an incentivized opportunity to help find answers. Non-anonymous paid positions could be considered to ensure a quick and personalized response. 'Cases' are 'closed' when the searcher indicates satisfaction.",
      imageLight: "",
      imageDark: "",
      themeDark: darkMode,
      noText: false,
      noImg: true,
    },
    {
      tag: "CLIENT",
      title: "Evaluating client stance/goals.",
      description: "Our client provided us with a document containing all the specifications for the app. In the initial weeks of the spring 23 semester, the design and product team worked closely with the client to understand the specifications, define objectives, and establish timelines. We maintained frequent communication with the client, and received feedback on our designs via Figma.",
      imageLight: "",
      imageDark: "",
      themeDark: darkMode,
      noText: false,
      noImg: true,
    },
    {
      tag: "PERSONAS",
      title: "A fast and easy way to see the floral design.",
      description:
        "Thanks to user research, I can segment a florist’s job into small actions and find place for improvement opportunities.",
      imageLight: personas,
      imageDark: personas,
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
      "Incorporate features that make sense for my users, such as the ability to favorite flowers or categorize design needs. Make sure that these features are easy to use and add value to the user experience.",
    ],
  };

  //more projects
  const more = [
    {
      image: greater,
      title: "Planet Longhorn",
      link: "/work/planet-longhorn-2023",
    },
    {
      image: greater,
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
        <WebDesign prop={paper} />
        <WebDesign prop={digital} />
        <WebDesign prop={lowfi} />
        <WebDesign prop={usability} />
        <WebDesign prop={mockups} />
        <WebDesign prop={hifi} />
        <WebDesign prop={accessibility} />
        <Conclusion prop={con} />
      </div>
      <MoreWork prop={more} />
      <Footer isInView4={true} />
    </div>
  );
};

export default Page;

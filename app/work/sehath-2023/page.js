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
import heroImg from "../../../public/sehath/sehath.png";
import branding from "../../../public/sehath/branding.png";
import brandingDark from "../../../public/sehath/branding-dark.png";
import wireframe from "../../../public/pl/wireframe.png";
import wireframeDark from "../../../public/pl/wireframe-dark.png";
import home from "../../../public/sehath/home.png";
import pl from "../../../public/pl/pl.png";
import greater from "../../../public/greater/greater.png";

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
    org: "UT Sehath",
    titleFirst: "Empowering international",
    titleSecond: "health initiative.",
    tags: [
      "WEBSITE DESIGN",
      "WEBSITE DEVELOPMENT",
      "BRANDING",
      "CONTENT CREATION",
    ],
    image: heroImg,
    overview:
      "The goal of the UT Sehath website was to create an online presence that not only serves as an informational resource for current and prospective members but also a platform for fundraising. The website aims to facilitate easy access to event information, membership details, and organization news while emphasizing Sehath's mission and dedication to advancing international healthcare.",
    liveSite: true,
    siteLink: "https://sehath.vercel.app/",
    role: ["Website Designer", "Website Developer"],
    duration: "Fall 2023",
    designLink:"https://www.figma.com/file/DnA2qgca2PKQSYwQUsVL8S/Sehath?type=design&node-id=218%3A2484&mode=design&t=RyYb5mnNNTl5modx-1",
    codeLink:"https://github.com/Ralph0210/sehath"
  };

  const bgColor = "#F2D5C2";

  //analyze
  const analyze = [
    {
      tag: "BRANDING",
      title: "Creating a welcoming brand identity.",
      description:
        "Sehath, which means 'health' in Hindi, is a pre-med organization at the University of Texas at Austin, focused on global health equity. The branding aims to reflect UT's vibrancy blended with Sehath's commitment to international health outreach initiatives.",
      imageLight: branding,
      imageDark: brandingDark,
      themeDark: darkMode,
    },
  ];

  //preview
  const preview = {
    vidId: "ZCG4-ns9uz4",
    bgColor: bgColor,
  };

  //web design
  const webDesign = {
    tag: "WEBSITE DESIGN",
    title: "A rounded website experience.",
    description:
      "Sehath's website features a friendly design with rounded corners, reflecting its accessible healthcare mission. This welcoming look unifies the site, from menus to buttons, inviting visitors to explore Sehath's global health efforts. The soft edges also hint at the organization's adaptability in addressing health challenges.",
    image: home,
    bgColor: bgColor,
  };

  //web dev
  const webDev = [
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
      tech: [
        "Vercel",
      ],
    },
  ];

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
      image: pl,
      title: "Planet Longhron",
      link: "/work/planet-longhron-2023",
      tags:["WEB DESIGN", "WEB DEVELOPMENT"],
      description:"Design and develop an informative and community-representative online presence for Planet Longhorn."
    },
    {
      image: greater,
      title: "Greater",
      link: "/work/greater-2023",
      tags:["WEB DESIGN", "WEB DEVELOPMENT"],
      description:"Design an app that connects users with LGBTQIA+ friendly spots in Austin, Texas."
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
        <Preview prop={preview} />
        <WebDesign prop={webDesign} />
        <WebDev prop={webDev}/>
        <Conclusion prop={con}/>
      </div>
      <MoreWork prop={more}/>
      <Footer isInView4={true} />
    </div>
  );
};

export default Page;

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
import pl from "../../../public/pl/pl.png";
import branding from "../../../public/pl/branding.png";
import brandingDark from "../../../public/pl/branding-dark.png";
import wireframe from "../../../public/pl/wireframe.png";
import wireframeDark from "../../../public/pl/wireframe-dark.png";
import home from "../../../public/pl/home.png";

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
    role: ["Website Designer", "Website Developer"],
    duration: "Fall 2023",
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
      imageDark: brandingDark,
      themeDark: darkMode,
    },
    {
      tag: "WIREFRAME",
      title: "Creating a magazine-style experience.",
      description:
        "When developing the wireframes for Planet Longhorn's website, the goal was to emulate the immersive, visually-rich experience of a magazine. This approach aimed to showcase the community's spirit and inclusivity through photography, thus creating a dynamic and engaging user experience.",
      imageLight: wireframe,
      imageDark: wireframeDark,
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
    title: "Engaging exploration and storytelling",
    description:
      "The website emphasizes international community inclusivity at every turn, using words and quotes as a foundation, supported by subtle interactions along the way to make the experience feel sincere and tangible.",
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
  }

  //more projects
  const more = [
    {image: pl, title: "Planet Longhorn", link: "/work/planet-longhorn-2023"},
    {image: pl, title: "Planet Longhorn", link: "/work/planet-longhorn-2023"},
  ]

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
        <Conclusion />
      </div>
      <MoreWork prop={more}/>
      <Footer isInView4={true} />
    </div>
  );
};

export default Page;

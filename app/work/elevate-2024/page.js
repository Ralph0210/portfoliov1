"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./page.module.css";
import Cursor from "@/app/utils/Cursor";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import { useInView } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import Hero from "@/app/components/workPageComponents/Hero/Hero";
import Analyze from "@/app/components/workPageComponents/Analyze/Analyze";
import Key from "@/app/components/workPageComponents/Key/Key";
import Preview from "@/app/components/workPageComponents/preview/Preview";
import WebDesign from "@/app/components/workPageComponents/webDesign/WebDesign";
import WebDesignText from "@/app/components/workPageComponents/webDesignText/WebDesignText";
import WebDesignVid from "@/app/components/workPageComponents/webDesignVid/WebDesignVid";
import WebDev from "@/app/components/workPageComponents/webDev/WebDev";
import Conclusion from "@/app/components/workPageComponents/Conclusion/Conclusion";
import MoreWork from "@/app/components/workPageComponents/moreWork/MoreWork";
import elevate from "../../../public/elevate/elevate.png";
import survey from "../../../public/elevate/survey.png";
import surveyDark from "../../../public/elevate/surveyDark.png";
import surveyInsights from "../../../public/elevate/surveyInsights.png";
import surveyInsightsDark from "../../../public/elevate/surveyInsightsDark.png";
import interviewInsights from "../../../public/elevate/interviewInsights.png";
import interviewInsightsDark from "../../../public/elevate/interviewInsightsDark.png";
import affinity from "../../../public/elevate/affinity.webp";
import personasImg from "../../../public/elevate/personas.png";
import sketch from "../../../public/elevate/sketch.png";
import storyboarding from "../../../public/elevate/storyboarding.png";
import lofiImg from "../../../public/elevate/lofi.png";
import usabilityImg from "../../../public/elevate/usability.png";
import finalImg from "../../../public/elevate/final.png";
import mirror from "../../../public/elevate/mirror_exposure.gif";
import affirmation from "../../../public/elevate/affirmation.gif";
import post_workout from "../../../public/elevate/post_workout.gif";

import lowfi from "../../../public/scf/lowfi.png";
import refined from "../../../public/scf/refined.png";
import mockupsImg from "../../../public/scf/mockups.png";
import pl from "../../../public/pl/pl.png";
import flori from "../../../public/flori/flori.png";

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
    org: "Class Project",
    titleFirst: "Elevate Smart Mirror",
    titleSecond: "",
    tags: [
      "UI/UX DESIGN",
      "USER RESEARCH",
      "STORYBOARDING",
      "PROTOTYPING",
      "USABILITY STUDY",
    ],
    image: elevate,
    overview:
      "Improving Body Image and Self-Esteem Through a Personalized Smart Fitness Mirror.",
    overview2:
      "",
    liveSite: false,
    siteLink: "https://myscfanalysis.azurewebsites.net/",
    Role: "Role & Team",
    role: ["UX Researcher & Designer - ", "Anita Nwude Chenge", "Ralph Chang", "Trushaa Ramanan"],
    duration: "10 weeks (Sep 2024 - Dec 2024)",
    ongoing: true,
    designLink:
      "https://www.figma.com/design/jVtLSQwR6ku7R3eo8nZ5PE/HCDE-518-Prototype?node-id=227-855&t=92TILVE68bRMrH4Q-1",
    targetId: "solution",
  };

  const bgColor = "#90AB93";


  //analyze
  const analyze = [
    {
      tag: "BACKGROUND",
      title: "Body Image Solutions via Design",
      description:
            "This project was our final deliverable for HCDE 518: User-Centered Design in our Master’s program.",
        description2: "We focused on real-world challenges and were inspired by personal experiences and the widespread issue of negative body image in college fitness. Our goal was to create a solution to address these challenges.",
      imageLight: survey,
      imageDark: surveyDark,
      themeDark: darkMode,
      noText: false,
    },
    {
      tag: "USER RESEARCH",
      title: "Survey Insights:",
      description:
        "To dive deeper into our problem space, we conducted surveys, receiving over 30 valid responses, and interviewed 10 members of our target audience.",
      imageLight: surveyInsights,
      imageDark: surveyInsightsDark,
      themeDark: darkMode,
      noText: false,
      reverseOrder: true,
    },
    {
      tag: "USER RESEARCH",
      title: "Interview Insights:",
      description: "",
      imageLight: interviewInsights,
        imageDark: interviewInsightsDark,
      themeDark: darkMode,
      noText: false,
    },
    {
        tag: "PROCESS",
        title: "Wrapping it all Together — Affinity Diagramming",
        description: "Based on our research findings, the key themes we found to help guide our solution were positive impact of physical activity, barriers to addressing body image concerns, resources and support, and strategies for managing body image concerns.",
        imageLight: affinity,
          imageDark: affinity,
        themeDark: darkMode,
        noText: false,
        reverseOrder: true,
      },
  ];

  //problem statement and ideation

  const problemStatement = {
    tag: "PROCESS",
    title: "Problem Statement",
    description:
      "How might we develop a solution for college students engaged in fitness activities that minimizes the effects of negative body image perceptions and promotes self-acceptance?",
    image: "",
    bgColor: bgColor,
    mobileContainer: false,
    noImg: true,
  };

  const personas = {
    tag: "PERSONAS",
    title: "Meet Logan and Melissa!",
    description: "To better empathize with our user base, we created two user personas who represent our target users.",
    image: personasImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const ideate = {
    tag: "IDEATION",
    title: "Sketching and Ideation",
    description:
      "Using the persona’s as a guide, we each generated 5–6 sketches of what our “solution” would be. We filtered out our ideas by discussing the strengths, weaknesses, feasibility, and originality of each of each person’s ideas. We also sorted out our sketches using affinity diagramming to group ideas that go together.",
    image: sketch,
    bgColor: bgColor,
    mobileContainer: false,
  };


  const feature = {
    tag: "FEATURE",
    text:[
    {
      name: "Feature Prioritization",
      tech: ["We finalized designing 4 user flows we wanted the mirror to have.", "Those 4 flows were:"],
    },
    {
      name: "",
      tech: ["1. Mirror Exposure Therapy", "2. Mindful Recovery — Post workout Meditation", "3. Mindful Recovery — Post workout Logs", "4. Personalized Affirmations"],
    },
  ]};

  const storyboard = {
    tag: "PROCESS",
    title: "Storyboard and User Flow",
    description:
      "After finalizing our solution, we further explored the user flows by detailing the user experience features included in each flow:",
    image: storyboarding,
    bgColor: bgColor,
    mobileContainer: false,
    reverseOrder: true,
  };

  const lofi = {
    tag: "PROTOTYPING",
    title: "Low Fidelity Prototypes - My Flow",
    description:
      "To visualize the user interface, we created low-fidelity prototypes, as there wasn’t enough time to develop a wireframe beforehand. So here are key screens from my responsible flow:",
    image: lofiImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const usability = {
    tag: "USABILITY",
    title: "Usability Testing",
    description:
      "To gain insights into the usability and user experience of our smart mirror, I conducted 2 rounds of usability testing for my flow with the same group of participants we conducted user interviews with.",
    image: usabilityImg,
    bgColor: bgColor,
    mobileContainer: false,
    reverseOrder: true,
  };

  const final = {
    tag: "PRODUCT",
    title: "Final Solution",
    description:
      "For the final solution, Elevate is an interactive smart mirror placed in private locations on campus gyms, providing personalized mindfulness practices, fitness tracking, and body-positive tools. The mirror is designed to be touch- and voice-activated, making it easy to use for everyone.",
    image: finalImg,
    // bgColor: bgColor,
    mobileContainer: false,
    targetId: "solution",
  };

  const key1 = {
    tag: "KEY EXPERIENCE",
    title: "Mirror Exposure Therapy",
    description:
      "A feature can help the user be positive and mindful about their conception towards their body image.",
    image: mirror,
    // bgColor: bgColor,
    mobileContainer: false,
    // reverseOrder: true,
    gif: true,
  };

  const key2 = {
    tag: "KEY EXPERIENCE",
    title: "Post-workout Meditation ",
    description:
      "A feature allows the user to be mindful after each workout session, making exercise more meaningful.",
      image: post_workout,
    // bgColor: bgColor,
    mobileContainer: false,
    // reverseOrder: true,
    gif: true,
  };

  const key3 = {
    tag: "KEY EXPERIENCE",
    title: "Personalized Affirmations",
    description:
      "As for the feature I was in charge of, it allows the user to set up personalized affirmations on the mirror, helping the user become more positive and mindful every time they look at the mirror.",
    image: affirmation,
    // bgColor: bgColor,
    mobileContainer: false,
    // reverseOrder: true,
  };


  //conclusion
  const con = {
    challenges: [
      "User Research Challenge: Limited time.",
    ],
    solutions: [
      "Solution: We conducted surveys and interviews to gather insights and understand our target users. We also used affinity diagramming to synthesize our findings and guide our design decisions.",
    ],
    impact:
      "Improved Self-Acceptance: The Mirror Exposure Therapy feature, combined with body-positive tools, encouraged users to practice self-kindness and shift toward a more positive body image. During the product showcase, we let 10 participants interact with the mirror exposure therapy using our physical prototype. Most of them responded positively, stating that the mirror exposure therapy made them feel better and more empowered.",
    nextStep:
      "Given our ten-week timeframe for topic selection, research, ideation, and prototyping, time constraints were a major challenge, especially during the research phase. If we had more time, we would have conducted more comprehensive user research. This would include allocating additional time for each user interview and conducting more interviews throughout the development process. More extensive research would have provided deeper insights, leading to more user-centered design decisions and a better overall product experience.",
    learnedTitle: [
      "Skills Acquired:",
    ],
    learned: [
      "When we decided that our product would be a smart mirror, our team’s lack of industrial design experience led us to focus solely on the interface design. As a result, we deferred discussions on other crucial aspects of industrial design that could have made the product more cohesive and complete. For instance, we did not analyze or research the ideal context for the mirror — whether it should be placed in a private room, a gym, or another environment. This decision would have significantly influenced our interface design and allowed us to create a product more precisely tailored to our users’ needs.",
    ],
  
  };

  //more projects
  const more = [
    {
      image: pl,
      title: "Planet Longhorn",
      link: "/work/planet-longhorn-2023",
      tags: ["WEB DESIGN", "WEB DEVELOPMENT"],
      description:
        "Design and develop an informative and community-representative online presence for Planet Longhorn.",
    },
    {
      image: flori,
      title: "Flori",
      link: "/work/flori-2022",
      tags: ["UIUX DESIGN"],
      description:
        "UX case study for a floral arrangement app, enabling users to design customized arrangements for various occasions.",
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

        <WebDesign prop={problemStatement} />
        <WebDesign prop={personas} />
        <WebDesign prop={ideate} />
        <WebDev prop={feature} />
        <WebDesign prop={storyboard} />
        <WebDesign prop={lofi} />
        <WebDesign prop={usability} />
        <WebDesign id="solution" prop={final} />
        <Key prop={key1} />
        <Key prop={key2} />
        <Key prop={key3} />

        <Conclusion prop={con} />
      </div>
      <MoreWork prop={more} />
      <Footer isInView4={true} />
    </div>
  );
};

export default Page;
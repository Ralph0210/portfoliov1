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
import personas from "../../../public/scf/personas.png";
import lowfi from "../../../public/scf/lowfi.png";
import usabilityImg from "../../../public/scf/usability.png";
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
  };

  const bgColor = "#85AED4";

  

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
  ];

  //web design
  const process = {
    tag: "PROCESS",
    title: "Prioritizing feature",
    description:
      "Driven by the wealth of information within the SCF dataset and a deep understanding of user challenges, I've prioritized the development of intuitive data exploration and analysis tools.",
    image: "",
    bgColor: bgColor,
    mobileContainer: false,
    noImg: true,
  };

  const lofi = {
    tag: "PROTOTYPE",
    title: "Low-fidelity prototype",
    description:
      "This low-fidelity prototype showcases a user flow that guides users from pinpointing their interests to tailored data exploration(the data exploration page dynamically highlights variables related to user-chosen interests), and analytic tools.",
    image: lowfi,
    bgColor: bgColor,
    mobileContainer: false,
    imageText: true,
  };

  const usability = {
    tag: "USABILITY",
    title: "Usability study and findings",
    description: "",
    image: usabilityImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const iterations = {
    tag: "ITERATIONS",
    title: "Refining the design",
    description:
      "Fueled by insights from usability testing and inspired by innovative approaches to data visualization from https://nfp73.ch/de, I redesigned the way users explore variables within the SCF dataset. Instead of traditional lists, I’ve introduced an interactive map of variables, offering a more intuitive and engaging experience. I also simplified the interface of the analysis page, allowing user to perform desired tasks easily.",
    image: refined,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const mockups = {
    tag: "MOCKUPS",
    title: "Product mockups",
    description: "",
    image: mockupsImg,
    bgColor: bgColor,
    mobileContainer: false,
  };

  const preview = {
    vidId: "eYtFt34CLms",
    bgColor: bgColor,
  };

  //web dev
  const webDev = [
    {
      name: "Front-end",
      tech: ["HTML", "module CSS", "JavaScript", "React", "Framer Motion"],
    },
    {
      name: "Back-end",
      tech: ["Node.js", "Express.js", "MySQL", "Sequelize"],
    },
    {
      name: "Deployment",
      tech: ["Azure"],
    },
  ];

  const navbar = {
    tag: "INTERACTION",
    title: "Navbar",
    description:
      "The navbar features a rounded shape that highlights the current page. This shape follows the user's cursor as it moves across the navbar. When the cursor leaves the navbar, the shape returns to its position on the current page.",
    image: "/scf/navbar.mov",
    bgColor: bgColor,
    mobileContainer: false,
  };

  const vMap = {
    tag: "FEATURE",
    title: "Variable map",
    description:
      "The variable map, created with d3.js, is designed to represent SCF data in the form of a radial tree for visual clarity. When a user hovers over a node, the variable's descriptive details are displayed. Furthermore, clicking on a node reveals the names of its immediate child nodes. This interaction is intended to simplify the process of searching for specific variables within the data set.",
    image: "/scf/vmap.mov",
    bgColor: bgColor,
    mobileContainer: false,
  };

  const ui = {
    tag: "UI",
    title: "Analytic tool",
    description:
      "This user-friendly interface allows users to visualize and analyze topics of their interest. Users have the option to choose up to two distribution variables. Additionally, they can independently select how each distribution method is displayed. For instance, if the chosen distribution method is age, users can specify which age groups they want to see. They also have the capability to select the data's unit and the range of years it covers. Finally, users can export their visualizations. The entire user interface is integrated with the backend, triggering queries based on the user's selected data visualization methods.",
    image: "/scf/ui.mov",
    bgColor: bgColor,
    mobileContainer: false,
  };

  const iteration = {
    tag: "ITERATION",
    title: "GPT helper beta",
    description:
      "OpenAI's recently launched Assistant API has enabled me to create an interactive assistant that can answer queries about the SCF dataset, including specific questions such as “What is the average income among people who are younger than 35 years old?” Currently, this assistant is in a training phase, so its responses might occasionally be inaccurate or unpredictable.",
    image: "/scf/helper.mov",
    bgColor: bgColor,
    mobileContainer: false,
  };

  const mysql = {
    tag: "BACKEND",
    title: "MySQL",
    description:
      "Since the SCF lacks an API, I need to create a custom RESTful API. This will enable users to make queries through the frontend UI. I've chosen NodeJs for its compatibility with MySQL, which will serve as the database for this project. In MySQL, the SCF data will be organized by year, mirroring its original structure.",
    image: "",
    bgColor: bgColor,
    mobileContainer: false,
    noImg: true,
  };

  const api = {
    tag: "BACKEND",
    title: "RESTful-API",
    description:
      "Express.js, known for its minimalist and adaptable design, complements Node.js effectively. For this reason, I've selected Express.js as the framework to develop my API. Furthermore, by integrating Sequelize, a powerful ORM, I can write queries for the MySQL database more efficiently and with greater ease.",
    image: "",
    bgColor: bgColor,
    mobileContainer: false,
    noImg: true,
  };

  const azure = {
    tag: "BACKEND",
    title: "Microsoft Azure",
    description:
      "I chose to deploy my web application on Azure by the fact that NodeJS is developed by Microsoft and Azure was providing free credits. The transition of my local MySQL database to Azure's MySQL flexible server was a smooth process. Additionally, deploying the web application on Azure proved to be a straightforward task.",
    image: "",
    bgColor: bgColor,
    mobileContainer: false,
    noImg: true,
  };

  //conclusion
  const con = {
    challenges: [
      "User Research Challenge: Limited awareness and use of SCF.",
      "Usability Study Challenge: Difficulty in producing a functional prototype in Figma for feedback.",
      "New Technologies Challenge: Learning Node.js, Express.js, Sequelize, d3.js, and Azure.",
      "SCF Data Complexity Challenge: Hard to understand and explain all SCF data variables.",
    ],
    solutions: [
      "Solution: Focus initially on common tasks like data exploration and analysis during interviews. This approach not only aligns with more familiar activities for users but also helps in investigating potential solutions.",
      "Solution: Conducting usability tests with the evolving product, allowing for continuous improvements based on user feedback.",
      "Embraced the learning curve with enthusiasm, achieving gradual but successful development of the website, despite initial unfamiliarity with these technologies.",
      "Solution: Integration of an AI chatbot using OpenAI’s assistant API. This allows users to query a GPT model that is well-informed with comprehensive documentation from the Federal Reserve’s SCF, facilitating better understanding and usage of the data."
    ],
    impact:
      "The web app significantly simplifies the exploration of the extensive and complex SCF data. It achieves this by providing an intuitive interface that smartly organizes and presents information, making it more accessible to a broader audience.",
    nextStep:
      "Adding more SCF data variables to the web app, making the GPT helper more accurate by giving it more data and specific training, and improving accessibility of the web app.",
    learnedTitle: [
      "Technical Skills Acquired:",
      "Effective User Research Techniques:",
      "Rapid Learning and Adaptation in Technology:",
      "The Value of Comprehensive Documentation:",
      "Accessibility Comes First:"
    ],
    learned: [
      "Gained proficiency in Framer Motion, Node.js, Express.js, Sequelize, D3.js, and Azure. This diverse technological skill set broadened my development capabilities.",
      "Learned the importance of crafting well-thought-out research questions. This approach maximizes the value gained from interviews and leads to more insightful outcomes.",
      "This project provided an opportunity to quickly learn and choose from a vast array of coding frameworks and libraries. I developed skills in understanding coding documentation, efficient problem-solving through online resources, and effectively utilizing coding AI for task completion.",
      "Realized the significance of thorough documentation, both in design and coding. Proper documentation facilitates easier project resumption after breaks and enhances collaborative potential.",
      "In developing an inclusive web app for users of all abilities, it's crucial to integrate accessibility considerations from the outset. This approach not only shapes the web app's structure but also ensures it is user-friendly and accommodating for everyone."
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
        <div className={styles.designGoalsContainer}>
          <div className={styles.designGoalsTitle}>
            <span>IDEATE</span>
            <h2>Design goals:</h2>
          </div>
          <div className={styles.designGoalsContent}>
            <div className={styles.designGoalsContentContainer}>
              <h3>Streamlined Access to Knowledge:</h3>
              <ul>
                <li>
                  <span>Intuitive navigation:</span> Design a hierarchy that
                  prioritizes frequently used features and offers clear pathways
                  to deeper levels of information.
                </li>
                <li>
                  <span>Contextual explanations:</span> Integrate dynamic
                  tooltips and hover-over info cards to quickly clarify terms
                  and data definitions.
                </li>
                <li>
                  <span>Drill-down capabilities:</span> Allow users to explore
                  the data by navigating through hierarchies and breakdowns.
                </li>
              </ul>
            </div>
            <div className={styles.designGoalsContentRight}>
              <div className={styles.designGoalsContentContainer}>
                <h3>One-Stop Platform:</h3>
                <ul>
                  <li>
                    <span>Integrated tools:</span> Allow users to perform
                    calculations, compare data sets, and export findings within
                    the platform for a seamless workflow.
                  </li>
                </ul>
              </div>
              <div className={styles.designGoalsContentContainer}>
                <h3>Storytelling and Guidance:</h3>
                <ul>
                  <li>
                    <span>Persona creation:</span> Allow users to create or use
                    a set of pre-designed personas to explore the dataset.
                  </li>
                  <li>
                    <span>Interest-guided insights:</span> Provide relevant SCF
                    data specific to the chosen persona&apos;s circumstances.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <WebDesign prop={process} />
        <WebDesignText prop={lofi} />
        <WebDesign prop={usability} />
        <WebDesignText prop={iterations} />
        <WebDesign prop={mockups} />
        <Preview prop={preview} />
        <WebDev prop={webDev} />
        <WebDesignVid prop={navbar} />
        <WebDesignVid prop={vMap} />
        <WebDesignVid prop={ui} />
        <WebDesignVid prop={iteration} />
        <WebDesign prop={mysql} />
        <WebDesign prop={api} />
        <WebDesign prop={azure} />
        <Conclusion prop={con} />
      </div>
      <MoreWork prop={more} />
      <Footer isInView4={true} />
    </div>
  );
};

export default Page;
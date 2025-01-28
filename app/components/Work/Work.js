"use client";
import React, { useLayoutEffect, useState, useEffect } from "react";
import styles from "./Work.module.css";
import Image from "next/image";

import scf from "../../../public/scf/scf.png";
import pl from "../../../public/pl/pl.png";
import greater from "../../../public/greater/greater.png";
import sehath from "../../../public/sehath/sehath.png";
import flori from "../../../public/flori/flori_homepage.png";
import elevate from "../../../public/elevate/elevate.png";
import gsap from "gsap";
import Link from "next/link";
import Footer from "../Footer/Footer";

import LargeWorkCard from "../LargeWorkCard/LargeWorkCard";
import SmallWorkCard from "../SmallWorkCard/SmallWorkCard";

const Work = ({ changeThemeRef2, footerStick, abilityDeckRef, isInView4}) => {

  const [hoveredCard, setHoveredCard] = useState(null);
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
  
    if (mq.matches) {
      setIsDark(true);
    }
  
    // This callback will fire if the perferred color scheme changes without a reload
    mq.addEventListener("change", (evt) => setIsDark(evt.matches));
  }, []);

  const backgroundColors = {
    1: "#E9F0F7", // Color for cardIndex 1
    2: "#EDF9F2", // Color for cardIndex 2
    3: "#FCEAEA", // Color for cardIndex 3
    4: "#FAEFE8", // Color for cardIndex 4
    default: "#EFEFEF",
  };

  // Callback to handle hover state from LargeWorkCard
  const handleCardHover = (cardIndex) => {
    setHoveredCard(cardIndex); // Update parent state
  };

  const currentBackgroundColor = backgroundColors[hoveredCard] || backgroundColors.default;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(changeThemeRef2.current, {
        y: 0,
        scrollTrigger: {
          trigger: abilityDeckRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 4,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="work"
      ref={changeThemeRef2}
      className={styles.workContainer}
      style={{ zIndex: "2", position: "relative", backgroundColor: currentBackgroundColor, transition: "background-color 0.3s ease" }}
    >
      <p ref={footerStick} className={styles.selectedWork}>
        My Work&nbsp; <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24"><path fill="currentColor" d="m20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"></path></svg>
      </p>
      <div className={styles.workGallery}>
        <div className={styles.workGalleryTop}>
          <LargeWorkCard
            title="Statistical Analysis Web App"
            tags={["PRODUCT ENGINEERING"]}
            description="This project simplifies the vast Survey of Consumer Finance data into an accessible and engaging web application for all users."
            imageSrc={scf}
            isHovered={hoveredCard === 1}
            onHover = {(index) => handleCardHover(index)}
            position={"center"}
            link="/work/scf-2023"
            cardIndex={1}
          />
          <SmallWorkCard
            title="Elevate Smart Mirror"
          tags={["PRODUCT DESIGN"]}
            description="Improving Body Image and Self-Esteem Through a Personalized Smart Fitness Mirror."
            imageSrc={elevate}
            isHovered={hoveredCard === 2}
            onHover = {(index) => handleCardHover(index)}
            link="/work/elevate-2024"
            cardIndex={2}
          />
        </div>
        <div className={styles.workGalleryBottom}>
          <SmallWorkCard
            title="Flori"
            tags={["PRODUCT DESIGN"]}
            description="UX case study for a floral arrangement app, enabling users to design customized arrangements for various occasions."
            imageSrc={flori}
            isHovered={hoveredCard === 3}
            onHover = {(index) => handleCardHover(index)}
            link="/work/flori-2022"
            cardIndex={3}
          />
          <LargeWorkCard
            title="Planet longhorn"
            tags={["WEB DESIGN & DEVELOPMENT"]}
            description="Design and develop an informative and community-representative online presence for Planet Longhorn."
            imageSrc={pl}
            isHovered={hoveredCard === 4}
            onHover = {(index) => handleCardHover(index)}
            position={"left"}
            link="/work/planet-longhorn-2023"
            cardIndex={4}
          />
        </div>
      </div>
      <Link href="/work" className={`${styles.moreWork} ${styles.button}`}>
        <span>
          More work <p>6</p>
        </span>{" "}
        <div className={styles.bounds}></div>
      </Link>
      {/* <div style={{zIndex:"0"}}>
      <Footer isInView4={isInView4} />
      </div> */}
    </div>
  );
};

export default Work;

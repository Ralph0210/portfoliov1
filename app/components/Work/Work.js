"use client";
import React, { useLayoutEffect, useState } from "react";
import styles from "./Work.module.css";
import Image from "next/image";

import scf from "../../../public/scf/scf.png";
import pl from "../../../public/pl/pl.png";
import greater from "../../../public/greater/greater.png";
import sehath from "../../../public/sehath/sehath.png";
import gsap from "gsap";
import Link from "next/link";
import Footer from "../Footer/Footer";

import LargeWorkCard from "../LargeWorkCard/LargeWorkCard";
import SmallWorkCard from "../SmallWorkCard/SmallWorkCard";

const Work = ({ changeThemeRef2, footerStick, abilityDeckRef, isInView4 }) => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

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
      style={{ zIndex: "2", position: "relative" }}
    >
      <p ref={footerStick} className={styles.selectedWork}>
        My Work
      </p>
      <div className={styles.workGallery}>
        <div className={styles.workGalleryTop}>
          <LargeWorkCard
            title="SCF Analysis"
            tags={["PRODUCT DESIGN", "FULL-STACK DEVELOPMENT"]}
            description="This project simplifies the vast Survey of Consumer Finance data into an accessible and engaging web application for all users."
            imageSrc={scf}
            isHovered={hoveredCard === 0}
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
            position={"center"}
            link="/work/scf-2023"
          />
          <SmallWorkCard
            title="Planet longhorn"
            tags={["WEB DESIGN", "WEB DEVELOPMENT"]}
            description="Design and develop an informative and community-representative online presence for Planet Longhorn."
            imageSrc={pl}
            isHovered={hoveredCard === 1}
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
            link="/work/planet-longhorn-2023"
          />
        </div>
        <div className={styles.workGalleryBottom}>
          <SmallWorkCard
            title="UT Sehath"
            tags={["WEB DESIGN", "WEB DEVELOPMENT"]}
            description="Design and develop an informative fundraising platform to showcase UT Sehath's commitment to global healthcare."
            imageSrc={sehath}
            isHovered={hoveredCard === 2}
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
            link="/work/sehath-2023"
          />
          <LargeWorkCard
            title="Greater"
            tags={["UI/UX DESIGN"]}
            description="Design an app that connects users with LGBTQIA+ friendly spots in Austin, Texas."
            imageSrc={greater}
            isHovered={hoveredCard === 3}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
            position={"left"}
            link="/work/greater-2023"
          />
        </div>
      </div>
      <Link href="/work" className={`${styles.moreWork} ${styles.button}`}>
        <span>
          More work <p>5</p>
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

import React from "react";
import styles from "./Hero.module.css";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import pl from "../../../../public/pl/pl.png";
import Link from "next/link";

const Hero = ({heroData}) => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.nameContainer}>
        <h2 className={styles.h2}>{heroData.org}</h2>
        <h1 className={lora.className}>
          {heroData.titleFirst} <br /> {heroData.titleSecond}
        </h1>
        <div className={styles.tagsContainer}>
          {heroData.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>{tag}</span>))}
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={heroData.image}
          alt="planet longhorn"
          className={styles.image}
          fill
          placeholder="blur"
          priority
        />
      </div>
      <div className={styles.overviewContainer}>
      <div className={styles.divider}></div>
      <div className={styles.contentContainer}>
      <div className={styles.textContainer}>
          <h2 className={styles.h2}>Overview</h2>
          <p>
            {heroData.overview}
          </p>
          {heroData.liveSite ? <Link href={heroData.siteLink} target="_blank">VIEW LIVE SITE</Link> : null}
        </div>
        <div className={styles.roleContainer}>
          <div className={styles.role}>
            <h2 className={styles.h2}>Role</h2>
            {heroData.role.map((role, index) => (
              <p key={index}>{role}</p>
            ))}
          </div>
          <div className={styles.duration}>
            <h2 className={styles.h2}>Completed</h2>
            <p>{heroData.duration}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import styles from "./Hero.module.css";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });
import Image from "next/image";
import pl from "../../../../public/pl/pl.png";
import Link from "next/link";
import { Icon } from '@iconify/react';

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
          style={{objectFit: "cover"}}
        />
      </div>
      <div className={styles.overviewContainer}>
      <div className={styles.divider}></div>
      <div className={styles.contentContainer}>
      <div className={styles.textContainer}>
          <h2 className={styles.h2}>TL;DR</h2>
          <p>
            {heroData.overview}
          </p>
          <p>
            {heroData.overview2}
          </p>
          {heroData.liveSite ? <Link href={heroData.siteLink} target="_blank">VIEW LIVE SITE</Link> : <p className={styles.link_disabled}>Live site unavailable right now</p>}
        </div>
        <div className={styles.roleContainer}>
          <div className={styles.role}>
            <h2 className={styles.h2}>{heroData.Role}</h2>
            {heroData.role.map((role, index) => (
              <p key={index}>{role}</p>
            ))}
          </div>
          <div className={styles.duration}>
            <h2 className={styles.h2}>{heroData.ongoing? "Duration" : "Completed"}</h2>
            <p>{heroData.duration}</p>
          </div>
          <div className={styles.duration}>
            <h2 className={styles.h2}>Design Link</h2>
            <Link href={heroData.designLink} target="_blank" className={styles.link}>Figma <Icon icon="iconoir:open-new-window" /></Link>
          </div>
          {heroData.codeLink && <div className={styles.duration}>
            <h2 className={styles.h2}>Repository</h2>
            <Link href={heroData.codeLink} target="_blank" className={styles.link}>Github <Icon icon="iconoir:open-new-window" /></Link>
          </div>}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hero;

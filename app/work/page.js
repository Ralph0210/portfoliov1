'use client'
import React, { useRef, useEffect, useState, forwardRef } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Cursor from '../utils/Cursor'
import Footer from '../components/Footer/Footer'
import { useInView } from 'framer-motion'
import styles from './page.module.css'
import Lenis from "@studio-freight/lenis";
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

import LargeWorkCard from '../components/LargeWorkCard/LargeWorkCard'
import SmallWorkCard from '../components/SmallWorkCard/SmallWorkCard'

import scf from '../../public/scf/scf.png'
import pl from '../../public/pl/pl.png'
import sehath from '../../public/sehath/sehath.png'
import greater from '../../public/greater/greater.png'
import flori from '../../public/flori/flori.png'
import Link from 'next/link'
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

const Page = () => {
  const isInViewRef = useRef(null)
  const isInView4 = useInView(isInViewRef)
  const [sideNavOpened, setSideNavOpened] = useState(false);

  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (cardIndex) => {
    setHoveredCard(cardIndex);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };


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

  return (
    <div style={{overflow: "clip"}}>
      <Cursor />
      <Navbar
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
      />
      <div className={styles.workPageContainer}>
        <h1 ref={isInViewRef} className={lora.className}>My Journey in Design and Development</h1>


        <div className={styles.workContainer}>
        <LargeWorkCard
            title="SCF Analysis"
            tags={["UI/UX DESIGN", "FULL-STACK DEVELOPMENT"]}
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
            tags={["UI/UX DESIGN",]}
            description="Design an app that connects users with LGBTQIA+ friendly spots in Austin, Texas."
            imageSrc={greater}
            isHovered={hoveredCard === 3}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
            position={"left"}
            link="/work/greater-2023"
          />
          <LargeWorkCard
            title="Flori"
            tags={["UI/UX DESIGN"]}
            description="UX case study for a floral arrangement app, enabling users to design customized arrangements for various occasions."
            imageSrc={flori}
            isHovered={hoveredCard === 3}
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={handleMouseLeave}
            hoveredAtAll={hoveredCard}
            position={"right"}
            link="/work/flori-2022"
          />
        </div>


        {/* <Link href='/work/planet-longhorn-2023' passHref legacyBehavior>
      <a style={{fontSize:"3rem"}}>pl</a>
    </Link> */}
        {/* <Link href='/work/sehath-2023' style={{fontSize:"3rem"}}>
          sehath
        </Link>
        <Link href='/work/flori-2022' style={{fontSize:"3rem"}}>
          flori
        </Link>
        <Link href='/work/greater-2023' style={{fontSize:"3rem"}}>
          greater
        </Link>
        <Link href='/work/scf-2023' style={{fontSize:"3rem"}}>
          scf
        </Link> */}
      </div>
      <Footer isInView4={isInView4}/>
    </div>
  )
}

export default Page
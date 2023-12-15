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

import scf from '../../public/gallery/scf.png'
import Link from 'next/link'

const Page = () => {
  const router = useRouter();
  const isInViewRef = useRef(null)
  const isInView4 = useInView(isInViewRef)
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    const href = e.currentTarget.getAttribute('href'); // Get the href attribute
    setIsLoading(true); // Set isLoading to true

    setTimeout(() => {
      router.push(href); // Navigate after 1 second
    }, 1000);
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
      {/* {isLoading ? (
          <motion.div
            className={styles.loading}
            initial={{ y: "100vh", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            loading
          </motion.div>
        ) : null} */}
      <Navbar
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
      />
      <div className={styles.workPageContainer}>
        <p ref={isInViewRef}>hehe</p>
        <Link href='/work/planet-longhorn-2023' passHref legacyBehavior>
      <a style={{fontSize:"3rem"}}>pl</a>
    </Link>
        <Link href='/work/sehath-2023' style={{fontSize:"3rem"}}>
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
        </Link>
      </div>
      <Footer isInView4={isInView4}/>
    </div>
  )
}

export default Page
'use client'
import React, {useRef, useState, useEffect} from 'react'
import styles from './page.module.css'
import Cursor from '@/app/utils/Cursor'
import Navbar from '@/app/components/Navbar/Navbar'
import Footer from '@/app/components/Footer/Footer'
import { useInView } from 'framer-motion'
import Link from 'next/link'
import Lenis from "@studio-freight/lenis";

const Page = () => {
  const isInViewRef = useRef(null)
  const isInView4 = useInView(isInViewRef)
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

  return (
    <div>
      <Cursor />
      <Navbar
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
      />
      <div className={styles.workPageContainer}>
        <p ref={isInViewRef}>hehe</p>
        <Link href='/work/planet-longhorn-2023' style={{fontSize:"3rem"}}>
          pl
        </Link>
      </div>
      <Footer isInView4={isInView4}/>
    </div>
  )
}

export default Page
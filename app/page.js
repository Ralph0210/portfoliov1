"use client";
import React, { useEffect, useState, useRef } from "react";
import styles from "./page.module.css";
import Navbar from "./components/Navbar/Navbar";
import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Intro from "./components/Intro/Intro";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";
import { useInView } from "framer-motion";
import Cursor from "./utils/Cursor";
import Lenis from '@studio-freight/lenis'


export default function Home() {
  const [sideNavOpened, setSideNavOpened] = useState(false);
  const abilityDeckRef = useRef();
 const scroll = useRef()
  const arrowRef = useRef();
  const changeThemeRef = useRef(null);
  const isInView = useInView(changeThemeRef);
  const changeThemeRef2 = useRef(null);
  const isInView2 = useInView(changeThemeRef2);
  const changeThemeRef3 = useRef(null);
  const isInView3 = useInView(changeThemeRef3);
  const [ThemeDark, setThemeDark] = useState(false);

  const footerStick = useRef(null);
  const isInView4 = useInView(footerStick);

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

  useEffect(() => {
    const lenis = new Lenis({duration: 1.5, wheelMultiplier:1.1})

    lenis.on('scroll', e => {
      // console.log(e)
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    sideNavOpened ? lenis.stop() : lenis.start()

    return () => {
      lenis.destroy()
    }
  },[sideNavOpened])

  useEffect(() => {
    if (isInView || isInView2 || isInView3 === true) {
      setThemeDark(true);
    } else {
      setThemeDark(false);
    }
  }, [isInView, isInView2, isInView3]);

  useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add("dark-mode");
    document.documentElement.classList.remove("light-mode");
  } else {
    document.documentElement.classList.add("light-mode");
    document.documentElement.classList.remove("dark-mode");
  }
}, [isDark]);

  return (
    <main
  className={`${styles.main} ${isDark ? styles.darkMode : styles.lightMode}`}
>

      <Cursor sideNavOpened={sideNavOpened} />
      {/* <div className={styles.heroContainer}> */}
      <Navbar
        ThemeDark={ThemeDark}
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
        darkMode={isDark}
      />
      <Hero ThemeDark={ThemeDark} darkMode={isDark}/>
      <Intro
        ThemeDark={ThemeDark}
        changeThemeRef={changeThemeRef}
        changeThemeRef3={changeThemeRef3}
        isInView={isInView}
        isInView2={isInView2}
        abilityDeckRef={abilityDeckRef}
      />
      <Work changeThemeRef2={changeThemeRef2} footerStick={footerStick} abilityDeckRef={abilityDeckRef} isInView4={isInView4}/>
      <Footer isInView4={isInView4} darkMode={isDark} />

    </main>
  );
}

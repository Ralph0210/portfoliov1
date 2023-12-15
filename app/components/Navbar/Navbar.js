import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import SideNav from "../SideNav/SideNav";
import { Icon } from "@iconify/react";
import { motion, useInView, AnimatePresence } from "framer-motion";

function Navbar({ ThemeDark, sideNavOpened, setSideNavOpened }) {
  const navbarRef = useRef(null);
  const navbarInView = useInView(navbarRef)

  useLayoutEffect(() => {
    // Add or remove the 'no-scroll' class based on sideNavOpened state
    if (sideNavOpened) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup function to remove the class when the component unmounts or when sideNavOpened changes
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [sideNavOpened]);

  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.homeLinkContainer}>
          <Link href="/">
            <p className={styles.copyright}>©</p>

            <div className={styles.name}>
              <p className={styles.codeBy}>Code by</p>

              <p className={styles.ralph}>Ralph</p>

              <p className={styles.chang}>Chang</p>
            </div>
            <div className={styles.bounds}></div>
          </Link>
        </div>
        <div className={styles.navContainer} ref={navbarRef}>
          <nav>
            <ul>
              <li>
                <Link href="/work">
                  <span>Work</span>
                  <div className={styles.bounds}></div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span>About</span>
                  <div className={styles.bounds}></div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span>Contact</span>
                  <div className={styles.bounds}></div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>


<AnimatePresence>
{!navbarInView && <motion.div
        onClick={() => setSideNavOpened(!sideNavOpened)}
        className={styles.sideNavContainer}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ease: "linear", duration:0.3}}
        // style={
        //   navbarInView ? { transform: "scale(0)" } : { transform: "scale(1)", zIndex:9999}
        // }
      >
        {sideNavOpened ? (
          <Icon
            icon="iconamoon:arrow-left-2-light"
            rotate={2}
            className={styles.menu}
          />
        ) : (
          <Icon icon="ci:menu-duo-lg" className={styles.menu} />
        )}
        <div className={styles.bounds}></div>
      </motion.div>}


</AnimatePresence>
      

      <SideNav
        sideNavOpened={sideNavOpened}
        setSideNavOpened={setSideNavOpened}
      />
    </>
  );
}

export default Navbar;

import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import "./SideNav.css";
import { gsap } from "gsap";
import Link from "next/link";

const SideNav = ({ sideNavOpened, setSideNavOpened }) => {
  const el = useRef();
  const tl = useRef();
  const overlay = useRef();
  const inner = useRef(null);

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     tl.current = gsap
  //       .timeline({ paused: true })
  //       .to(el.current, { width: "100%", duration: 0.1 })
  //       .to(inner.current, {
  //         duration: 0.3,
  //         width: "40%",
  //       })
  //       .to(
  //         overlay.current,
  //         {
  //           opacity: 0.4,
  //           duration: 0.5,
  //           ease: "power1.out",
  //         },
  //         "<"
  //       );
  //   });
  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    const updateWidth = () => {
      const newWidth = window.innerWidth <= 768 ? '60%' : '40%';

      tl.current = gsap
        .timeline({ paused: true })
        .to(el.current, { width: '100%', duration: 0.1 })
        .to(inner.current, {
          duration: 0.3,
          width: newWidth,
        })
        .to(
          overlay.current,
          {
            opacity: 0.4,
            duration: 0.5,
            ease: 'power1.out',
          },
          '<'
        );
    };

    const ctx = gsap.context(() => {
      updateWidth(); // Initial setup

      // Update width on window resize
      const resizeHandler = () => {
        updateWidth();
      };

      window.addEventListener('resize', resizeHandler);

      return () => {
        window.removeEventListener('resize', resizeHandler);
        ctx.revert();
      };
    });
  }, []);

  useEffect(() => {
    sideNavOpened ? tl.current.play() : tl.current.reverse();
  }, [sideNavOpened]);

  return (
    <div
      className="sideNavContainer"
      ref={el}
      // style={sideNavOpened ? { width: "100%" } : { width: "0%" }}
    >
      <div
        className="sideNavWrapper"
        ref={overlay}
        onClick={() => setSideNavOpened(!sideNavOpened)}
      ></div>
      <div
        className="innerContainer"
        ref={inner}
      >
        <div className='sideNav_navigationContainer' style={sideNavOpened ? { display: "flex" } : { display: "none" }}>
          <div className="sideNav_top"><span>NAVIGATION</span> <div className="sideNav_divider"></div> <nav>
            <ul>
            <li>
                <Link href="/">
                  <span>Home</span>
                  <div className='sideNavBounds'></div>
                </Link>
              </li>
            <li>
                <Link href="/work">
                  <span>Work</span>
                  <div className='sideNavBounds'></div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span>About</span>
                  <div className='sideNavBounds'></div>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span>Contact</span>
                  <div className='sideNavBounds'></div>
                </Link>
              </li>
            </ul>
          </nav></div>
          
          <div className='sideNavSocials'>
          <span>SOCIALS</span>
          <div style={{display:"flex", flexDirection:'row'}}>
          <Link href="https://www.linkedin.com/in/ralph-chang-5a49811a3/" target='_blank'>LinkedIn<div className='sideNavBounds'></div></Link>
          <Link href="https://www.instagram.com/ralph_cyh/" target='_blank'>Instagram<div className='sideNavBounds'></div></Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;

'use client'
import React, {useState, useEffect} from "react";
import Cursor from "./utils/Cursor";
import styles from "./not-found.module.css";
import Image from "next/image";
import Link from "next/link";
import p1 from "../public/404/1.webp";
import p2 from "../public/404/2.webp";
import p3 from "../public/404/3.webp";
import p4 from "../public/404/4.webp";
import p5 from "../public/404/5.webp";
import p6 from "../public/404/6.webp";
import p7 from "../public/404/7.webp";
import p8 from "../public/404/8.webp";
import p9 from "../public/404/9.webp";
import p10 from "../public/404/10.webp";
import p11 from "../public/404/11.webp";
import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

const Custom404 = () => {
  const [containerPosition, setContainerPosition] = useState({ x: 500, y: 500 });

  const handleMouseMove = (e) => {
    const x = e.clientX/30;
    const y = e.clientY/30;
    setContainerPosition({ x: x, y: y });
  };

  useEffect(() => {
    // Set initial position to the center of the window
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    setContainerPosition({ x: centerX, y: centerY });
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className={styles.wrapper}>
      <Cursor />
      <div className={styles.container}
      style={{ transform: `translate(${containerPosition.x - 100}px, ${containerPosition.y - 200}px)` }}
      >
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p11}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p2}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p3}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p4}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p5}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={lora.className}>404 Error</h1>
          <p className={lora.className}>It&apos;s ok. We find ourselves lost all the time. Just go back <Link href='/' className={styles.link}>home</Link>.</p>
          <span>Pictures of Taiwan taken by me</span>
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p6}
            alt="404"
            // fill
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p7}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p8}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p9}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p10}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
        <div className={styles.imageContainer}>
          <Image
            draggable={false}
            src={p1}
            alt="404"
            style={{ transform: `translate(${-containerPosition.x}px, ${-containerPosition.y}px)`,objectFit: "cover", width:"50rem", height:"50rem"}}
          />
        </div>
      </div>

      {/* <div className={styles.container2}
      // style={{ transform: `translate(${containerPosition.x - 100}px, ${containerPosition.y - 200}px)` }}
      >
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>
        <div className={styles.imageContainer2}></div>

      </div> */}
    </div>
  );
};

export default Custom404;

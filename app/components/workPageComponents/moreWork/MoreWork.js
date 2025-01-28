import React from "react";
import styles from "./MoreWork.module.css";
import Image from "next/image";
import Link from "next/link";
import pl from "../../../../public/pl/pl.png";

import { Lora } from "next/font/google";
const lora = Lora({ subsets: ["latin"] });

const MoreWork = ({ prop }) => {
  return (
    <div className={styles.moreWorkContainer}>
      <h1 className={lora.className}>More projects</h1>
      <div className={styles.workContainer}>
        {prop.map((item, index) => (
          <div key={index} className={styles.work}>
            <Link href={item.link}>
              <div className={styles.imageContainer}>
                <Image className={styles.workImage} src={item.image} fill style={{ objectFit: "cover", borderRadius: "0.3rem" }} />
              </div>
            </Link>
            <div className={styles.textcontainer}>
              <div className={styles.title}>
                <Link href={item.link} className={styles.link}>
                  {item.title}
                </Link>
                <div className={styles.tagsContainer}>
                {item.tags.map((tag, index) =>
                <span key={index} className={styles.tag}>{tag}</span>)}
                </div>
              </div>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreWork;

import React from "react";
import styles from "./WebDesign.module.css";
import Image from "next/image";
import home from "../../../../public/pl/home.png";

const ContentComponent = ({
  tag,
  title,
  description,
  img,
  bgColor,
  mobileContainer,
  imageText
}) => {
  return (
    <div className={styles.processContainer}>
      <div className={styles.textContainer}>
        <span>{tag}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.rightContainer}>
        <div
          className={styles.imageContainer}
          style={{ backgroundColor: bgColor }}
        >
          <video width={"100%"} height={"auto"} loop muted autoPlay style={{borderRadius:"2rem"}}>
            <source src={img} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {mobileContainer ? (
          <>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileFrame}></div>
              <div className={styles.mobileFrame}></div>
            </div>
            <div className={styles.mobileContainer}>
              <div className={styles.mobileFrame}></div>
              <div className={styles.mobileFrame}></div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

const WebDesignVid = ({ prop }) => {
  return (
    <div className={styles.webdesignContainer}>
      <ContentComponent
        tag={prop.tag}
        title={prop.title}
        description={prop.description}
        img={prop.image}
        bgColor={prop.bgColor}
        mobileContainer={prop.mobileContainer}
      />
    </div>
  );
};

export default WebDesignVid;

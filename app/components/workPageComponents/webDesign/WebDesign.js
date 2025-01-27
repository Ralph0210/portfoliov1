import React from "react";
import styles from "./WebDesign.module.css";
import Image from "next/image";

const ContentComponent = ({
  tag,
  title,
  description,
  description2,
  img,
  bgColor,
  mobileContainer,
  noImg,
  reverseOrder,
  targetId,
}) => {
  return (
    <div className={reverseOrder ? styles.processContainerReverse : styles.processContainer}>
      <div className={styles.textContainer} style={noImg ? {flex:0.5} : {}}>
        <span>{tag}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{description2}</p>
      </div>

      {noImg ? null : <div className={styles.rightContainer}>
        <div
          className={styles.imageContainer}
          style={{ backgroundColor: bgColor }}
        >
          <Image
          placeholder="blur"
            src={img}
            alt="branding"
            width={"100%"}
            className={styles.image}
            priority
            style={{ objectPosition: "right", borderRadius: "2rem", minHeight: "100%" }}
          />
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
      </div>}
    </div>
  );
};

const WebDesign = ({ prop }) => {
  return (
    <div id={prop.targetId} className={styles.webdesignContainer}>
      <ContentComponent
        tag={prop.tag}
        title={prop.title}
        description={prop.description}
        description2={prop.description2}
        img={prop.image}
        bgColor={prop.bgColor}
        mobileContainer={prop.mobileContainer}
        noImg={prop.noImg}
        reverseOrder={prop.reverseOrder}
        gif={prop.gif}
      />
    </div>
  );
};

export default WebDesign;

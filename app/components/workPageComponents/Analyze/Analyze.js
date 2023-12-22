import React from "react";
import styles from "./Analyze.module.css";
import branding from "../../../../public/pl/branding.png";
import wireframe from "../../../../public/pl/wireframe.png";
import Image from "next/image";

const ContentComponent = ({ tag, title, description, img, noText, noImg }) => {
  return (
    <div className={styles.processContainer}>
      {noText ? null : (
        <div className={styles.textContainer}>
          <span>{tag}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}

      {noImg ? null : <div className={styles.imageContainer} style={noText?{flex:1, justifyContent:"center", alignContent:"center"}:{}}>
        <Image
        placeholder="blur"
          src={img}
          alt="branding"
          priority
          width={"100%"}
          className={styles.image}
          style={noText? {marginLeft:0, objectFit:"contain"}:{ objectPosition: "right", objectFit:"contain" }}
        />
      </div>}
    </div>
  );
};

const Analyze = ({ prop }) => {
  return (
    <div className={styles.analyzeContainer}>
      {prop.map((item, index) => (
        <ContentComponent
          key={index}
          tag={item.tag}
          title={item.title}
          description={item.description}
          img={item.themeDark ? item.imageDark : item.imageLight}
          noText={item.noText}
          noImg={item.noImg}
        />
      ))}

      {/* <ContentComponent tag={"PROCESS"} title={"Creating brand identity"} description={
        "As the biggest international/exchange student organization on the campus of the University of Texas at Austin, Planet Longhorn’s brand needed to resonate with a diverse student body, reflecting a vibrant, inclusive, and dynamic community."}
        img={branding}/>

        <ContentComponent tag={"WIREFRAME"} title={"Creating a magazine-style experience."}
        description={"When developing the wireframes for Planet Longhorn's website, the goal was to emulate the immersive, visually-rich experience of a magazine. This approach aimed to showcase the community's spirit and inclusivity through photography, thus creating a dynamic and engaging user experience."}
        img={wireframe} /> */}
    </div>
  );
};

export default Analyze;

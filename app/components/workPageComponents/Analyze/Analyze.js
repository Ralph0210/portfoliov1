import React from "react";
import styles from "./Analyze.module.css";
import branding from "../../../../public/pl/branding.png";
import wireframe from "../../../../public/pl/wireframe.png";
import Image from "next/image";

const ContentComponent = ({ tag, title, description, img }) => {
  return (
    <div className={styles.processContainer}>
      <div className={styles.textContainer}>
        <span>{tag}</span>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.imageContainer}>
        <Image src={img} alt="branding" width={712} className={styles.image} style={{objectPosition:"right"}}/>
      </div>
    </div>
  );
};

const Analyze = ({prop}) => {
  return (
    <div className={styles.analyzeContainer}>

      {prop.map((item, index) => (
        <ContentComponent key={index} tag={item.tag} title={item.title} description={item.description}
          img={item.themeDark ? item.imageDark : item.imageLight}/>
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

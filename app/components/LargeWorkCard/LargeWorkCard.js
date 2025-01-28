import styles from "./LargeWorkCard.module.css";
import Link from "next/link";
import Image from "next/image";

const LargeWorkCard = ({
  title,
  tags,
  description,
  imageSrc,
  isHovered,
  onHover,
  position,
  link,
  cardIndex,
}) => {
  return (
    <div
    >
      <Link href={{ pathname: link }} className={styles.link}>
        <div className={styles.largeImageContainer} onMouseEnter ={()=> onHover(cardIndex)}
        onMouseLeave={()=> onHover(null)}>
          <Image
            className={styles.workImage}
            draggable={false}
            src={imageSrc}
            alt={title}
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: position,
              borderRadius: "0.3rem",
            }}
          />
        </div>
      </Link>
      <div className={styles.textContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>{title}</p>
          <ul className={styles.tags}>
            {tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default LargeWorkCard;

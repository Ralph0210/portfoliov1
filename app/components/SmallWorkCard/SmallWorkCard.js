import styles from './SmallWorkCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const SmallWorkCard = ({
    title,
    tags,
    description,
    imageSrc,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    hoveredAtAll
  }) => {
    return (
      <div onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ opacity: hoveredAtAll !== null ? (isHovered ? 1 : 0.4) : 1, transition: "opacity 0.3s ease-in-out", height:"min-content" }} >
                      <Link href={`/work/${title.toLowerCase().replaceAll(" ", "-")}-2023`} className={styles.link}>
        <div
          className={`${styles.smallImageContainer} ${styles.workCard}`}
        >
          <Image
            draggable={false}
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: "cover", objectPosition: "left" }}
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

export default SmallWorkCard;
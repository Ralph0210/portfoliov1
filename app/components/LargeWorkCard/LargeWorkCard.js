import styles from './LargeWorkCard.module.css'
import Link from 'next/link';
import Image from 'next/image';

const LargeWorkCard = ({
    title,
    tags,
    description,
    imageSrc,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    hoveredAtAll,
    position,
    link,
  }) => {
    return (
      <div onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ opacity: hoveredAtAll !== null ? (isHovered ? 1 : 0.4) : 1, transition: "opacity 0.3s ease-in-out", height:"auto" }} >
        <Link href={{pathname: link}} className={styles.link}>
        <div
          className={`${styles.largeImageContainer} ${styles.workCard}`}
        >
          <Image
            draggable={false}
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: "cover", objectPosition: position }}
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
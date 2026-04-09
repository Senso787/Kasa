import { useState } from "react";
import styles from "./Carousel.module.sass";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);
  const total = pictures.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div className={styles.carousel}>
      <img
        src={pictures[current]}
        alt={`Photo ${current + 1} sur ${total}`}
        className={styles.image}
      />
      {total > 1 && (
        <>
          <button
            className={`${styles.arrow} ${styles.arrowLeft}`}
            onClick={prev}
            aria-label="Photo précédente"
          >
            <svg
              width="47"
              height="80"
              viewBox="0 0 47 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M44 4L5 40L44 76"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            className={`${styles.arrow} ${styles.arrowRight}`}
            onClick={next}
            aria-label="Photo suivante"
          >
            <svg
              width="47"
              height="80"
              viewBox="0 0 47 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 4L42 40L3 76"
                stroke="white"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <span className={styles.counter}>
            {current + 1} / {total}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;

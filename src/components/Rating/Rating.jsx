import styles from "./Rating.module.sass";

function Rating({ rating }) {
  const value = parseInt(rating, 10);

  return (
    <div className={styles.rating} aria-label={`Note : ${value} étoiles sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          className={i < value ? styles.filled : styles.empty}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M15 2L18.708 10.3647H27.633L20.8565 15.3806L23.5647 23.7455L15 18.7296L6.43533 23.7455L9.14353 15.3806L2.36701 10.3647H11.292L15 2Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

export default Rating;

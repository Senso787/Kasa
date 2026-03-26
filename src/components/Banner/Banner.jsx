import styles from "./Banner.module.sass";

function Banner({ imageUrl, text }) {
  return (
    <div className={styles.banner}>
      <img src={imageUrl} alt="bannière" className={styles.image} />
      <div className={styles.overlay} />
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
}

export default Banner;

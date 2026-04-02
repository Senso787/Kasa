import styles from "./Footer.module.sass";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.logo}>Kasa</p>
      <p className={styles.text}>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

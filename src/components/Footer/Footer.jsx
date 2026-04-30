import styles from "./Footer.module.sass";
import logo from "../../assets/images/Logoblanc.png";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={logo} alt="Kasa" className={styles.logo} />
      <p className={styles.text}>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

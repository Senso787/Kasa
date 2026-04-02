import { NavLink } from "react-router-dom";
import styles from "./Header.module.sass";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        Kasa
      </NavLink>
      <nav>
        <ul className={styles.nav}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

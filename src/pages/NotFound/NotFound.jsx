import { NavLink } from "react-router-dom";
import styles from "./NotFound.module.sass";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <p className={styles.message}>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/" className={styles.link}>
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </div>
  );
}

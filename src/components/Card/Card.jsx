import { Link } from "react-router-dom";
import styles from "./Card.module.sass";

function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className={styles.card}>
      <img src={logement.cover} alt={logement.title} className={styles.image} />
      <div className={styles.overlay}>
        <p className={styles.title}>{logement.title}</p>
      </div>
    </Link>
  );
}

export default Card;

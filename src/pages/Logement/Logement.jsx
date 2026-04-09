import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";
import Carousel from "../../components/Carousel/Carousel";
import Rating from "../../components/Rating/Rating";
import Collapse from "../../components/Collapse/Collapse";
import styles from "./Logement.module.sass";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className={styles.page}>
      <Carousel pictures={logement.pictures} />

      <div className={styles.info}>
        <div className={styles.left}>
          <h1 className={styles.title}>{logement.title}</h1>
          <p className={styles.location}>{logement.location}</p>
          <div className={styles.tags}>
            {logement.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.host}>
            <span className={styles.hostName}>{logement.host.name}</span>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className={styles.hostAvatar}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className={styles.collapses}>
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((eq) => (
              <li key={eq}>{eq}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;

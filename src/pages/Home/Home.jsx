import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logements from "../../data/logements.json";
import styles from "./Home.module.sass";
import imagebanner from "../../assets/images/banner-home.jpg";

function Home() {
  return (
    <div className={styles.page}>
      <Banner imageUrl={imagebanner} text="Chez vous, partout et ailleurs" />
      <section className={styles.grid}>
        {logements.map((logement) => (
          <Card key={logement.id} logement={logement} />
        ))}
      </section>
    </div>
  );
}

export default Home;

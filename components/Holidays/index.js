import styles from "./styles.module.css";
import CardFooter from "../Card/CardFooter";
const Holidays = () => {
  return (
    <section className={styles.container}>
      <h1>Tadbirlar</h1>
      <hr />
      <p>
        There`re no item that match your search criteria. Please try again with
        different keywords.
      </p>
      <CardFooter text={"Barcha tadbirlar"} />
    </section>
  );
};
export default Holidays;

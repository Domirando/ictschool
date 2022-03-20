import styles from "./Card.module.css";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";

const Card = (props) => {
  return (
    <article className={styles.card}>
      <CardTitle bg={props.header_color} icon={props.icon} title={props.title} />
      <CardImage image={props.image} />
      <CardDescription description={props.description} />
      <CardFooter />
    </article>
  );
};
export default Card;

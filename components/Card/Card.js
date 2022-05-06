import styles from "./Card.module.css";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";

const Card = ({
  title = false,
  image = "/images/img.png",
  image_width = "280",
  image_height = "280",
  description = "",
  icon = "",
  header_color = "#3a3a7c",
  footer = false,
  anchor = "/",
}) => {
  return (
    <article className={styles.card}>
      {title ? <CardTitle bg={header_color} icon={icon} title={title} /> : null}
      <CardImage image={image} height={image_height} width={image_width} />
      <CardDescription description={description} />
      {footer ? <CardFooter anchor={anchor} /> : null}
    </article>
  );
};
export default Card;

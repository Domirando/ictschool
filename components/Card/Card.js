import styles from "./Card.module.css";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";

const Card = ({
  title = false,
  image = "/images/img.png",
  image_width = 280,
  image_height = 280,
  description = "",
  icon = "",
  more = true,
  footer_text = "",
  header_color = "#3a3a7c",
  footer = false,
  anchor = "/",
}) => {
  return (
    <article className={styles.card}>
      {title ? (
        <CardTitle bg={header_color} icon={icon} title={title} more={more} />
      ) : null}
      {image ? (
        <CardImage image={image} height={image_height} width={image_width} />
      ) : null}
      <CardDescription width={image_width} description={description} />
      {footer ? <CardFooter footer_text={footer_text} anchor={anchor} /> : null}
    </article>
  );
};
export default Card;

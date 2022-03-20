import styles from "./Card.module.css";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardImage from "./CardImage";
import CardFooter from "./CardFooter";

const Card = ({title=false, image='/images/img.png', description='some description', icon='', header_color='#3a3a7c', footer=false }) => {
  return (
    <article className={styles.card}>
        {title?(
                <CardTitle bg={header_color}
                           icon={icon}
                           title={title}
                />
            ):null}
      <CardImage image={image} />
      <CardDescription description={description} />
        {footer?<CardFooter />:null}
    </article>
  );
};
export default Card;

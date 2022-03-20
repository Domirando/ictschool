import styles from "./Card.module.css";
const CardImage = ({ image }) => {
  return <img className={styles.image} src={image} />;
};
export default CardImage;

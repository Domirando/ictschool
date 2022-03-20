import styles from "./Card.module.css";
import Image from 'next/image'
const CardImage = ({ image }) => {
  return <Image width={'280px'} height={'280px'} className={styles.image} src={image} />;
};
export default CardImage;

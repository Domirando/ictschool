import styles from "./Card.module.css";
import Image from 'next/image'
const CardImage = ({ image, width='280px', height='280px' }) => {
  return <Image width={width} height={height} className={styles.image} src={image} />;
};
export default CardImage;

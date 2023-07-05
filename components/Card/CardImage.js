import styles from "./Card.module.css";
import Image from "next/image";
const CardImage = ({
  image = "/images/img_1.png",
  width = 280,
  height = 280,
}) => {
  return <Image width={width} height={height} alt={""} src={image} />;
};
export default CardImage;

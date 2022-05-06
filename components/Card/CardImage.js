import styles from "./Card.module.css";
import Image from "next/image";
const CardImage = ({
  image = "/images/img_1.png",
  width = "280px",
  height = "280px",
}) => {
  return <Image width={width} height={height} alt={""} src={image} />;
};
export default CardImage;

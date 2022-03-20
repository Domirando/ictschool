import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const CardFooter = ({ text = "Batafsil" }) => {
  return (
    <div className={styles.footer}>
      <p>{text}</p>
      <FontAwesomeIcon icon={faRightLong} />
    </div>
  );
};
export default CardFooter;

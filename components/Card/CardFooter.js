import styles from "./Card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
const CardFooter = ({ footer_text = "Batafsil", anchor = "/" }) => {
  return (
    <Link href={anchor} passHref legacyBehavior>
      <div className={styles.footer}>
        <p>{footer_text}</p>
        <FontAwesomeIcon icon={faRightLong} />
      </div>
    </Link>
  );
};
export default CardFooter;

import Link from "next/link";
import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  let col = props.colorName;
  return (
    <div className={styles.card}>
      <hr className={`${col} h-[0.65rem] rounded-t-md`} />
      <div>
        <FontAwesomeIcon
          className={styles.icon}
          icon={props.iconName}
          fontSize={40}
          color="#1c1b3b"
        />
        <span>
          <Link href={props.href ? props.href : "/"}>
            <h1>{props.title}</h1>
          </Link>
          <p>{props.desc}</p>
        </span>
      </div>
    </div>
  );
}

export default Card;

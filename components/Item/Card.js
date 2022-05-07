import styles from "./card.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Card(props) {
  let col = props.colorName;
  return (
    <div className={styles.card}>
      <hr className={`bg-${col}-200 h-[0.65rem] rounded-t-md`} />
      <div>
        <FontAwesomeIcon
          className={styles.icon}
          icon={props.iconName}
          fontSize={40}
          color="#1c1b3b"
        />
        <span>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </span>
      </div>
    </div>
  );
}

export default Card;

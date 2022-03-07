import styles from "./nav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const Item = ({ title, items, time }) => {
  const hasChildren = items && items.length;
  return (
    <span className={`${styles[time ? "time_in" : "time_an"]}`}>
      <span>
        <p>{title}</p>
        {items ? (
          <FontAwesomeIcon className={styles.iconRotate} icon={faAngleDown} />
        ) : null}
      </span>
      {hasChildren &&
        items.map((item, index) => (
          <Item key={index} title={item.title} time={true} items={item.items} />
        ))}
    </span>
  );
};
export default Item;

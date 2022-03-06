import styles from "./nav.module.css";
const ItemsList = ({ items }) => {
  return (
    <div className={styles.itemsList}>
      {items.map((items, index) => (
        <a key={index}>{items.title}</a>
      ))}
    </div>
  );
};
export default ItemsList;

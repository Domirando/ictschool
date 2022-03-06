import styles from "./nav.module.css";
const ItemsList = ({ items }) => {
  return (
    <div className={styles.itemsList}>
      {items.map((items, index) => (
        <p key={index}>{items.title}</p>
      ))}
    </div>
  );
};
export default ItemsList;

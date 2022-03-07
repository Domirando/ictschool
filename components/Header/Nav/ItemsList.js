import styles from "./nav.module.css";
import Item from "./Item";
const ItemsList = ({ title, items }) => {
  const hasChildren = items && items.length;
  return (
    <div className={`${styles[`itemsList`]} `}>
      {hasChildren &&
        items.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            time={false}
            items={item.items}
          />
        ))}
    </div>
  );
};
export default ItemsList;

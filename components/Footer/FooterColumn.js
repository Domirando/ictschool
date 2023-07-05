import styles from "./footer.module.css";
import Link from "next/link";
const FooterColumn = ({ item }) => {
  return (
    <div className={styles.footer_ColItem}>
      {item.title}
      <hr className={styles.straight} />
      <div className={styles.listItems}>
        {item.items.map((el, index) => (
          <Link href={el.url} key={index} className={styles.list}>
            {el.title}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FooterColumn;

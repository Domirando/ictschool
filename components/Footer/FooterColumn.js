import styles from "./footer.module.css";
import Link from "next/link";
const FooterColumn = ({ item }) => {
  return (
    <div class={styles.footer_ColItem}>
      {item.title}
      <hr className={styles.straight} />
      <div className={styles.listItems}>
        {item.items.map((el, index) => (
          <Link href={el.url} key={index}>
            <a className={styles.list}>{el.title}</a>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default FooterColumn;

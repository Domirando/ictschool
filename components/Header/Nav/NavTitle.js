import state from "../../../util/state";
import styles from "./nav.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import ItemsList from "./ItemsList";
import { useRouter } from "next/router";

const NavTitle = () => {
  let router = useRouter();
  let navTitle = state.navbar.map((items, index) =>
    items.items === null ? (
      <li
        className={
          items.url !== router.asPath
            ? `${styles.items} text-[#ababab]`
            : `${styles.items} ${styles.active}`
        }
        key={index}
      >
        <Link href={items.url}>
          <a>{items.title}</a>
        </Link>
      </li>
    ) : (
      <li
        className={
          items.url !== router.asPath
            ? `${styles.items} text-[#ababab]`
            : `${styles.items} ${styles.active}`
        }
        key={index}
      >
        <span>
          <a>{items.title}</a>
          <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </span>
        <ItemsList items={items.items} title={items.title} time={1} />
      </li>
    )
  );
  return <ul className={styles.navListTitles}>{navTitle}</ul>;
};

export default NavTitle;

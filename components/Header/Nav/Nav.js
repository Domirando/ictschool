import { useRouter } from "next/router";
import state from "../../../util/state";
import styles from "./nav.module.css";
import ItemsList from "./ItemsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  const router = useRouter();

  let navTitle = state.navbar.map((items, index) =>
    items.items === null ? (
      <li
        className={
          items.url !== router.asPath
            ? `${styles.items} text-[#ababab]`
            : `${styles.items} text-white`
        }
        key={index}
      >
        {items.title}
      </li>
    ) : (
      <li
        className={
          items.url !== router.asPath
            ? `${styles.items} text-[#ababab]`
            : `${styles.items} text-white`
        }
        key={index}
      >
        <span>
          {items.title}
          <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
        </span>
        <ItemsList items={items.items} />
      </li>
    )
  );
  return (
    <div className={styles.nav}>
      <div className={styles.itemContainer}>
        <ul className={styles.navListTitles}>{navTitle}</ul>
        <div className={styles.slideNavBar}></div>
      </div>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.icon + " " + styles.searchIcon}
      />
    </div>
  );
};
export default NavList;

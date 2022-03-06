import { useRouter } from "next/router";
import state from "../../util/state";
import styles from "./header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

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
        {items.title}
        <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
      </li>
    )
  );
  return <ul className={styles.navListTitles}>{navTitle}</ul>;
};
export default NavList;

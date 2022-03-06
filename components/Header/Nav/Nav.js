import styles from "./nav.module.css";
import NavTitle from "./NavTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const NavList = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.itemContainer}>
        <NavTitle />
        <div className={styles.slideNavBar} />
      </div>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.icon + " " + styles.searchIcon}
      />
    </div>
  );
};
export default NavList;

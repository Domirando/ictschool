import styles from "./nav.module.css";
import DropdownMenu from "./DropDownMenu";
import state from "../../../util/state";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const NavList = () => {
  return (
    <div className={styles.nav}>
      <div>
        <DropdownMenu config={state.navbar} />
      </div>
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.icon + " " + styles.searchIcon}
      />
    </div>
  );
};
export default NavList;

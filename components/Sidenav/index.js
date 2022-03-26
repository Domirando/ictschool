import state from "../../util/state";
import styles from "./styles.module.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidenav = ({ open = false, submenu = false, config = state.navbar }) => {
  let getMenuTitle = (menuItem) => {
    return menuItem.title;
  };
  let getMenuItem = (menuItem, depthLevel, index) => {
    let title = getMenuTitle(menuItem);
    if (menuItem.submenu && menuItem.submenu.length > 0) {
      return (
        <li key={index}>
          <div
            className={styles.topNav}
            onClick={() => <Sidenav config={menuItem.submenu} submenu={true} />}
          >
            <p>{title}</p>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <hr />
        </li>
      );
    } else {
      return (
        <li key={index}>
          {title}
          <hr />
        </li>
      );
    }
  };
  let options = [];
  config.map((item, index) => {
    options.push(getMenuItem(item, 0, index));
  });
  if (submenu && submenu === true) {
    return open && <ul className={styles.container}>{options}</ul>;
  }
  return open && <ul className={styles.container}>{options}</ul>;
};
export default Sidenav;

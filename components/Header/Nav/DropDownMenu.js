import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const DropdownMenu = (props) => {
  let getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.title;
  };
  let getMenuItem = (menuItem, depthLevel, index) => {
    let title = getMenuItemTitle(menuItem, index, depthLevel);

    if (menuItem.submenu && menuItem.submenu.length > 0) {
      return (
        <li key={index}>
          <p>{title}</p>
          <FontAwesomeIcon icon={faAngleDown} />
          <DropdownMenu config={menuItem.submenu} submenu={true} />
        </li>
      );
    } else {
      return (
        <Link key={`${index}l`} passHref href={"404"}>
          <li key={index}>{title}</li>
        </Link>
      );
    }
  };
  let { config } = props;

  let options = [];
  config.map((item, index) => {
    options.push(getMenuItem(item, 0, index));
  });
  if (props.submenu && props.submenu === true) {
    return <ul className={styles.dropdown_menu}>{options}</ul>;
  }
  return <ul className={styles.dropdown_menu}>{options}</ul>;
};
export default DropdownMenu;

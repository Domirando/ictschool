import styles from "./Dropdown.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const DropdownMenu = (props) => {
  let [repeated, setRepeated] = useState(false);
  let getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.title;
  };
  let getMenuItem = (menuItem, depthLevel, index) => {
    let title = getMenuItemTitle(menuItem, index, depthLevel);

    if (menuItem.submenu && menuItem.submenu.length > 0) {
      return (
        <li>
          <p>{title}</p>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={repeated ? styles.rotated : ""}
          />
          <DropdownMenu config={menuItem.submenu} submenu={true} />
        </li>
      );
      !repeated ? setRepeated(true) : null;
    } else {
      return <li>{title}</li>;
    }
  };
  let { config } = props;

  let options = [];
  config.map((item, index) => {
    options.push(getMenuItem(item, 0, index));
  });

  if (props.submenu && props.submenu === true) {
    return <ul>{options}</ul>;
  }
  return <ul className={styles.dropdown_menu}>{options}</ul>;
};

export default DropdownMenu;

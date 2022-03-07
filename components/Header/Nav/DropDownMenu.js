import React from "react";
import styles from "./Dropdown.module.css";

const DropdownMenu = (props) => {
  let getMenuItemTitle = (menuItem, index, depthLevel) => {
    return menuItem.title;
  };
  let getMenuItem = (menuItem, depthLevel, index) => {
    let title = getMenuItemTitle(menuItem, index, depthLevel);

    if (menuItem.submenu && menuItem.submenu.length > 0) {
      return (
        <li>
          {title}
          <DropdownMenu config={menuItem.submenu} submenu={true} />
        </li>
      );
    } else {
      return <li>{title}</li>;
    }
  };
  let { config } = props;

  let options = [];
  config.map((item, index) => {
    options.push(getMenuItem(item, 0, index));
  });

  if (props.submenu && props.submenu === true)
    return <ul>{options}</ul>;
  return <ul className={styles.dropdown_menu}>{options}</ul>;
}

export default DropdownMenu;
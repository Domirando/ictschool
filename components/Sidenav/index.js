import state from "../../util/state";
import styles from "./styles.module.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const Sidenav = ({ open = false, submenu = false, config = state.navbar }) => {
  let [state, setState] = useState({
    opacity: 1,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        if (currentScrollPos > 0 && currentScrollPos < maxScroll) {
          setState({ opacity: 0 });
          // console.log(currentScrollPos)
        }
      };
    }
  }, []);
  // getting title
  let getMenuTitle = (menuItem) => {
    return menuItem.title;
  };
  // getting proper item
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
    return (
      open && (
        <ul className={`opacity-${state.opacity} ${styles.container}`}>
          {options}
        </ul>
      )
    );
  }
  return (
    open && (
      <ul className={`opacity-[${state.opacity}] ${styles.container}`}>
        {options}
      </ul>
    )
  );
};
export default Sidenav;

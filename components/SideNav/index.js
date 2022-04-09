import styles from "./styles.module.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const SideNav = ({ open = false, state = ["no data on menu"], depth = 0 }) => {
  let [data, setData] = useState(false);
  let prev_state = null;
  function Item({ item, index, open, depth }) {
    if (item.submenu && item.submenu.length > 0) {
      return (
        <li
          key={index}
          className={styles.sidenav_item}
          onClick={() => setData(item.submenu)}
        >
          <span>
            {item.title}
            <FontAwesomeIcon
              icon={faAngleDown}
              className={depth == 1 ? null : "rotate-[-90deg]"}
            />
          </span>
          <hr className={"w-full"} />
        </li>
      );
    } else {
      return (
        <li key={index} className={styles.sidenav_item}>
          <span>{item.title}</span>
          <hr className={"w-full"} />
        </li>
      );
    }
  }

  return (
    <>
      {data ? (
        <ul
          className={
            open ? `flex ${styles.side_nav}` : `hidden ${styles.side_nav}`
          }
        >
          <FontAwesomeIcon
            onClick={() => setData(prev_state)}
            icon={faAngleDown}
            className={
              depth == 1
                ? null
                : "rotate-[90deg] cursor-pointer h-5 mt-2 mb-4 text-[#979797]"
            }
          />
          {data.map((item, index) => (
            <Item
              item={item}
              key={index}
              index={index}
              open={open}
              depth={depth}
            />
          ))}
        </ul>
      ) : (
        <ul
          className={
            open ? `flex ${styles.side_nav}` : `hidden ${styles.side_nav}`
          }
        >
          {state.map((item, index) => (
            <Item
              item={item}
              key={index}
              index={index}
              open={open}
              depth={depth}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default SideNav;

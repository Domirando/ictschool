import styles from "./styles.module.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const SideNav = ({ open = false, state = ["no data on menu"], depth = 0 }) => {
  let [data, setData] = useState(false);
  function Item({ item, index, open, depth }) {
    if (item.submenu && item.submenu.length > 0) {
      return (
        // FixMe: Onclick is not working properly...
        <li
          key={index}
          className={
            "w-full flex justify-between items-center hover:cursor-pointer"
          }
          onClick={() => setData(item.submenu)}
        >
          {item.title}
          <FontAwesomeIcon
            icon={faAngleDown}
            className={depth == 1 ? null : "rotate-[-90deg]"}
          />
        </li>
      );
    } else {
      return <li key={index}>{item.title}</li>;
    }
  }
  return (
    <>
      {" "}
      {data ? (
        <ul
          className={
            open ? `flex ${styles.side_nav}` : `hidden ${styles.side_nav}`
          }
        >
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

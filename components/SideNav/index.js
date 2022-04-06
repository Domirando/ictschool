import styles from "./styles.module.css";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Item({ item, index, open, depth }) {
  if (item.submenu && item.submenu.length > 0) {
    return (
      // FixMe: Onclick is not working properly...
      <li
        key={index}
        className={
          "w-full flex justify-between items-center text-green-400 hover:cursor-pointer"
        }
        onClick={() => (
          <SideNav state={item.submenu} open={true} depth={depth++} />
        )}
      >
        {item.title}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={depth == 1 ? null : "rotate-[-90deg]"}
        />
      </li>
    );
  } else {
    return (
      <li key={index} className={"text-red-400"}>
        {item.title}
      </li>
    );
  }
}

const SideNav = ({ open = false, state = ["no data on menu"], depth = 0 }) => {
  return (
    <ul
      className={
        open
          ? `flex ${depth ? "bg-red-400" : styles.side_nav}`
          : `hidden ${styles.side_nav}`
      }
    >
      {state.map((item, index) => (
        <Item item={item} key={index} index={index} open={open} depth={depth} />
      ))}
    </ul>
  );
};

export default SideNav;

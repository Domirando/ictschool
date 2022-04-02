import styles from "./styles.module.css";
import states from "../../util/state.js";
import PropTypes from "prop-types";

function GetItem(item, index) {
  if (item.submenu && item.submenu.length > 0) {
    let obj = {
      open: true,
    };
    return (
      // FixMe: Onclick is not working properly...
      <p
        className={"text-green-400 hover:cursor-pointer"}
        onClick={() => <SideNav open={true} subNav={true} />}
      >
        {item.title}
      </p>
    );
  } else {
    return <p className={"text-red-400"}>{item.title}</p>;
  }
}

const SideNav = ({ open = false, subNav = false }) => {
  return (
    <ul
      className={open ? `flex ${styles.side_nav}` : `hidden ${styles.side_nav}`}
    >
      {states.navbar.map((item, index) => (
        <li key={index}>{GetItem(item)}</li>
      ))}
    </ul>
  );
};

SideNav.propTypes = {
  open: PropTypes.boolean,
};

export default SideNav;

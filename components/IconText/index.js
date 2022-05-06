import React from "react";
import styles from "../Navbar/navbar.module.css";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Item(props) {
  let iconName = props.iconName;
  return (
    <div className={"flex flex-col gap-6"}>
      <span className={"flex gap-10 text-xl"}>
        <FontAwesomeIcon
          className={styles.icon}
          icon={props.iconName}
          fontSize={26}
        />
        <h1 className={"font-bold"}>{props.text}</h1>
      </span>
      <p className={"text-[#a4a4a4]"}>{props.description}</p>
    </div>
  );
}

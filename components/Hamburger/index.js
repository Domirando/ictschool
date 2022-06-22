import { useState } from "react";
import state from "../../util/state";
import DropdownMenu from "../Header/Nav/DropDownMenu";

const Hamburger = ({ open }) => {
  return (
    //
    <div className="hamburger_wrapper">
      <div className={!open ? "hamburger" : "active_hamburger"} />
      <style jsx>
        {`
          .active_hamburger {
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            transform: translateX(-50px);
            width: 30px;
            height: 3px;
            font-style: 3px;
            color: white;
            background-color: transparent;
          }
          .active_hamburger::before {
            transition: all 0.5s ease-in-out;
            transform: rotate(45deg) translate(35px, -35px);
            content: "";
            color: red;
            font-weight: bold;
            position: absolute;
            width: 30px;
            cursor: pointer;
            height: 3px;
            background-color: white;
            border-radius: 5px;
          }
          .active_hamburger::after {
            transition: all 0.5s ease-in-out;
            transform: rotate(-45deg) translate(35px, 35px);
            content: "";
            position: absolute;
            width: 30px;
            cursor: pointer;
            height: 3px;
            background-color: white;
            border-radius: 5px;
          }
          .hamburger {
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            width: 30px;
            height: 3px;
            color: yellow;
            font-weight: italic;
            background-color: white;
            border-radius: 5px;
          }
          .hamburger::before {
            transition: all 0.5s ease-in-out;
            transform: translateY(-8px);
            content: "";
            position: absolute;
            width: 30px;
            cursor: pointer;
            height: 3px;
            background-color: white;
            border-radius: 5px;
          }
          .hamburger::after {
            transition: all 0.5s ease-in-out;
            transform: translateY(8px);
            content: "";
            font-weight: bold;
            color: grey;
            cursor: pointer;
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: white;
            border-radius: 5px;
          }
          .hamburger_wrapper {
            display: none;
          }
          @media (max-width: 1080px) {
            .hamburger_wrapper {
              display: block;
              color: pink;
              font-weight: bold;
            }
          }
        `}
      </style>
    </div>
  );
};
export default Hamburger;

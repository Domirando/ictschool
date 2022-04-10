import styles from "./header.module.css";
import Image from "next/image";
import Button from "../Button";
import NavList from "./Nav/Nav";
import Link from "next/link";
import Hamburger from "../Hamburger";
import { useState } from "react";
import SideNav from "../SideNav";
import state from "../../util/state.js";
import PropTypes from "prop-types";

const Header = ({
  header_content = false,
  title,
  text,
  image,
  gradient,
  btn,
  headerBg,
  headerHeight,
}) => {
  let [open, setOpened] = useState(false);
  return (
    <div className="headerContainer">
      <style jsx>{`
        .headerContainer {
          background: ${gradient},
            url("${headerBg}") no-repeat center center / cover;
          min-height: ${headerHeight};
          color: white;
          display: flex;
          flex-direction: column;
          gap: 65px;
        }
      `}</style>
      {/*logo-image*/}
      <span className={styles.headerNav}>
        <div className={styles.header_res}>
          <div className={styles.logo}>
            <Link href={"/"} passHref>
              <span>
                <Image
                  src={"/images/al_Xorazmiy.png"}
                  alt={"logo"}
                  height="35px"
                  width="300px"
                />
              </span>
            </Link>
          </div>
          <div>
            <div onClick={() => setOpened(!open)}>
              <Hamburger open={open} />
            </div>
          </div>
        </div>
        {/*nav*/}
        <NavList />
        <SideNav open={open} state={state.navbar} />
      </span>
      {/*title & text* & button*/}
      {header_content !== false ? (
        <div>{header_content}</div>
      ) : (
        <div className={styles.content}>
          <h1>
            Muhammad al-Xorazmiy nomidagi axborot texnologiyalariga
            ixtisoslashtirilgan maktabi
          </h1>
          <p>qabul 2021/2022</p>
          <Button
            href={"/404"}
            bgcolor={"bg-[hsla(230,80%,5%,0.5)]"}
            text={"batafsil"}
          />
        </div>
      )}
    </div>
  );
};

export default Header;

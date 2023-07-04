import styles from "./header.module.css";
import Image from "next/image";
import Button from "../Button";
import Error from "../../components/Error";
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
  error_page = null,
  text,
  video = null,
  image,
  gradient,
  btn,
  headerBg = false,
  headerHeight,
  children,
}) => {
  let [open, setOpened] = useState(false);
  console.log(error_page);
  return (
    <div className={video && !headerBg ? "headerVideoBg" : "headerContainer"}>
      {video && !headerBg ? (
        <div className={styles.container}>
          <video autoPlay loop muted className={styles.video}>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : null}
      <style jsx>{`
        .headerContainer {
          background: ${gradient},
            url("${headerBg}") no-repeat center center / cover;
          min-height: ${headerHeight};
          color: white;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 65px;
        }
        .headerVideoBg {
          position: relative;
          width: 100%;
          min-height: 88vh;
          overflow: hidden;
          background: black;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 65px;
        }
      `}</style>
      {/*logo-image*/}
      <div className={styles.coontainer}>
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
        {header_content === true ? (
          <div className={!video ? styles.content : styles.video_content}>
            <h1>
              Muhammad al-Xorazmiy nomidagi axborot texnologiyalariga
              ixtisoslashtirilgan maktabi
            </h1>
            <p className="mb-6 text-lg italic">qabul 2023/2024</p>
            <Button
              bgcolor={"bg-[hsla(230,80%,30%,0.5)]"}
              className="mt-8"
              text={"batafsil"}
            />
          </div>
        ) : error_page ? (
          <Error
            error_type={"404"}
            description={"PAGE NOT FOUND"}
            message={"Sorry, we couldn't find the page you're looking for."}
          />
        ) : (
          <div>{header_content}</div>
        )}
      </div>
    </div>
  );
};

export default Header;

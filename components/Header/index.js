import styles from "./header.module.css";
import Image from "next/image";
import Button from "../Button";
import NavList from "./Nav/Nav";
import Link from "next/link";
import Hamburger from "../Hamburger";

const Header = ({
  title,
  text,
  image,
  gradient,
  btn,
  headerBg,
  headerHeight,
}) => {
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
              <Image
                src={
                  "https://ictschool.uz/wp-content/uploads/2019/10/AKSS-logo3-UZ-300x31.png"
                }
                alt={"logo"}
                height="35px"
                width="300px"
              />
            </Link>
          </div>
          <Hamburger />
        </div>
        {/*nav*/}
        <NavList />
      </span>
      {/*title & text* & button*/}
      <div className={styles.content}>
        <h1>
          Muhammad al-Xorazmiy nomidagi axborot texnologiyalariga
          ixtisoslashtirilgan maktabi
        </h1>
        <p>qabul 2021/2022</p>
        <Button bgcolor={"bg-[hsla(230,80%,5%,0.5)]"} text={"batafsil"} />
      </div>
    </div>
  );
};
export default Header;

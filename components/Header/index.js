import styles from "./header.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import state from "../../util/state";
import Button from "../Button";
import { useRouter } from "next/router";

const Header = ({
  title,
  text,
  image,
  gradient,
  btn,
  headerBg,
  headerHeight,
}) => {
    const router = useRouter()

  let navTitle = state.navbar.map((items, index) =>
    items.items === null ? (
      <li
        className={
          items.url !== router.asPath
            ? `${styles.items} text-[#ababab]`
            : `${styles.items} text-white`
        }
        key={index}
      >
        {items.title}
      </li>
    ) : (
      <li
        className={
          items.url !== router.asPath
            ? `${styles.items} text-[#ababab]`
            : `${styles.items} text-white`
        }
        key={index}
      >
        {items.title}
        <FontAwesomeIcon icon={faAngleDown} className={styles.icon} />
      </li>
    )
  );
  console.log(router.asPath);
  return (
    <div className="headerContainer">
      <style jsx>{`
        .headerContainer {
          background: ${gradient},
            url("${headerBg}") no-repeat center center / cover;
          min-height: ${headerHeight};
          padding: 50px 100px;
          color: white;
          display: flex;
          flex-direction: column;
          gap: 65px;
        }
      `}</style>
      {/*logo-image*/}
      <div className={styles.logo}>
        <Image
          src={
            "https://ictschool.uz/wp-content/uploads/2019/10/AKSS-logo3-UZ-300x31.png"
          }
          alt={"logo"}
          height="40px"
          width="300px"
        />
      </div>
      {/*nav*/}
      <ul className={styles.navListTitles}>{navTitle}</ul>
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

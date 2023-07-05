import styles from "./navbar.module.css";
import Image from "next/image";
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.topBarBg}>
        <div className={styles.barContainer}>
          <div className={styles.left}>
            <Image
              src="/icons/uz.png"
              width={18}
              height={12}
              alt={"uzb flag"}
            />
            <Image src="/icons/ru.png" width={18} height={12} alt={"ru flag"} />
            <FontAwesomeIcon
              className={styles.icon}
              icon={faEnvelopeOpen}
              fontSize={"15px"}
              color="white"
            />
            <p>info@ictschool.uz</p>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faPhone}
              fontSize={"15px"}
              color="white"
            />
            <p className={styles.num}>
              <a>1206</a>
            </p>
          </div>
          <div className={styles.right}>
            <Link href="https://eclass.ictschool.uz/" passHref target="_blank">
              <p>E-CLASS</p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

import styles from "./Follow.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

import Button from "../../Button";

const Follow = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faEnvelope} className={styles.envelope} />
      <h1>Yangiliklarga obuna bo`ling</h1>
      <p>
        Maktabimiz hayotidagi barcha o‘zgarishlar va yangiliklardan xabardor
        bo`ling
      </p>
      <span className={styles.icons}>
        <Link passHref href={"https://facebook.com/itschool.uz"} legacyBehavior>
          <span>
            <FontAwesomeIcon icon={faFacebook} />
          </span>
        </Link>
        <Link
          passHref
          href={"https://instagram.com/itschool.uz"}
          legacyBehavior
        >
          <span>
            <FontAwesomeIcon icon={faInstagram} />
          </span>
        </Link>
        <Link passHref href={"https://t.me/itschooluz"} legacyBehavior>
          <span>
            <FontAwesomeIcon icon={faTelegram} />
          </span>
        </Link>
      </span>
      <span className={styles.email_sender}>
        <input
          placeholder={"Your Email Address"}
          className={styles.email_input}
        />
        <Button
          text={"Obuna bo`lish"}
          bgcolor={"bg-[#c50227]"}
          uppercase={false}
          href="/"
          border={"rounded-none"}
          py={"py-4"}
        />
      </span>
    </div>
  );
};
export default Follow;

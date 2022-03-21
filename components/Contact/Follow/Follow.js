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
      <h1>Yangiliklarga obuna bo'ling</h1>
      <p>
        Maktabimiz hayotidagi barcha o‘zgarishlar va yangiliklardan xabardor
        bo‘ling
      </p>
      <span className={styles.icons}>
        <Link href={"https://facebook.com/itschool.uz"}>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
        <Link href={"https://instagram.com/itschool.uz"}>
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href={"https://t.me/itschooluz"}>
          <FontAwesomeIcon icon={faTelegram} />
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
          border={"rounded-none"}
          py={"py-4"}
        />
      </span>
    </div>
  );
};
export default Follow;

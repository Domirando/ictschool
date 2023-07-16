import styles from "./UsefulLinks.module.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const UsefulLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faLink} />
          <h1>Foydali havolalar</h1>
        </div>
        <div className={styles.list}>
          <Link href={"https://president.uz/uz"} legacyBehavior>
            <h3>Prezident veb-sayti</h3>
          </Link>
          <hr />
          <Link href={"https://www.gov.uz/uz"} legacyBehavior>
            <h3>Hukumat portali</h3>
          </Link>
          <hr />
          <Link href={"https://lex.uz/uz/"} legacyBehavior>
            <h3>Qonun hujjatlari</h3>
          </Link>
          <hr />
          <Link href={"https://senat.uz/"} legacyBehavior>
            <h3>Oliy majlisning senati</h3>
          </Link>
          <hr />
          <Link href={"https://my.gov.uz/"} legacyBehavior>
            <h3>Ochiq ma`lumotlar portali</h3>
          </Link>
          <hr />
          <Link href={"https://uzedu.uz/y3"} legacyBehavior>
            <h3>Xalq ta`lim vazirligi</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default UsefulLinks;

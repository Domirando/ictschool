import styles from "./UsefulLinks.module.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UsefulLinks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faLink} />
          <h1>Foydali havolalar</h1>
        </div>
        <div className={styles.list}>
          <h3>Prezident veb-sayti</h3>
          <hr />
          <h3>Hukumat portali</h3>
          <hr />
          <h3>Qonun hujjatlari</h3>
          <hr />
          <h3>Oliy majlisning senati</h3>
          <hr />
          <h3>Ochiq ma'lumotlar portali</h3>
          <hr />
          <h3>Xalq ta'lim vazirligi</h3>
        </div>
      </div>
    </div>
  );
};
export default UsefulLinks;

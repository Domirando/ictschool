import styles from "./footer.module.css";
import FooterColumn from "./FooterColumn";
import footerState from "../../util/state";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let footerItems = footerState.footerColumnData.map((item, index) => (
    <FooterColumn item={item} key={index} />
  ));
  let lang = ["O'zbek", "Русский"];
  let listLang = lang.map((item, index) => (
    <li type="disc" key={index}>
      {item}
    </li>
  ));
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.rowsContainer}>
          <div className={styles.footerColumn}>
            <div className={styles.footerText}>
              <div className={styles.textWidget}>
                <Image
                  src={
                    "https://ictschool.uz/wp-content/uploads/2019/10/AKSS-logo3-UZ-300x31.png"
                  }
                  alt={"logo"}
                  height="40px"
                  width="300px"
                />
              </div>
              <div className={styles.textWidget}>
                <p>Mahtumquli ko’chasi , Yashnabod tumani, Tashkent</p>
              </div>
              <div className={styles.textWidget}>
                <p className={styles.textWhite}>info@ictschool.uz</p>
              </div>
            </div>
            <hr className={styles.straight + " " + styles.straightM} />
            <ul>{listLang}</ul>
          </div>
          {footerItems}
        </div>
        <div className={styles.bottomContainer}>
          <div>
            <p>ICTSchool.uz © 2017-2020. Barcha huquqlar himoyalangan.</p>
          </div>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

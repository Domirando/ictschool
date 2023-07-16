import styles from "./footer.module.css";
import FooterColumn from "./FooterColumn";
import state from "../../util/state";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let footerItems = state.footerColumnData.map((item, index) => (
    <FooterColumn item={item} key={index} />
  ));
  return (
    <footer>
      <div className={styles.container}>
        <div className={styles.rowsContainer}>
          <div className={styles.footerColumn}>
            <div className={styles.footerText}>
              <div className={styles.textWidget}>
                <Image
                  src={"/images/al_Xorazmiy.png"}
                  alt={"logo"}
                  height={32}
                  width={240}
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
          </div>
          {footerItems}
        </div>
        <div className={styles.bottomContainer}>
          <div>
            <p>ICTSchool.uz © 2017-2022. Barcha huquqlar himoyalangan.</p>
          </div>
          <div className={styles.icons}>
            <Link href="https://www.facebook.com/itschool.uz/" legacyBehavior>
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
            <Link
              href={"https://www.instagram.com/itschool.uz/"}
              legacyBehavior
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

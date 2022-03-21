import styles from "./styles.module.css";
import UsefulLinks from "./UsefulLinks/UsefulLinks";
import Follow from "./Follow/Follow";
import Donate from "./Donate/Donate";

const Contact = () => {
  return (
    <div className={styles.container}>
      <UsefulLinks />
      <Follow />
      <Donate />
    </div>
  );
};

export default Contact;

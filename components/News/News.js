import styles from "./News.module.css";
import Image from "next/image";
const News = ({ image = "/images/img.png", title, date }) => {
  return (
    <div className={styles.card_container}>
      <Image height="80px" width="80px" src={image} />
      <span className={styles.text}>
        <span>
          <p>{date}</p>
          <p>/</p>
          <p> yangiliklar</p>
        </span>
        <h2>{title}</h2>
      </span>
    </div>
  );
};

export default News;

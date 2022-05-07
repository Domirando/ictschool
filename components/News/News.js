import styles from "./News.module.css";
import Image from "next/image";
import Link from "next/link";

const News = ({ image = "/images/img.png", title, date, link = "/404" }) => {
  return (
    <div className={styles.card_container}>
      <div className={"h-[100px] w-[100px]"}>
        <Image
          alt={""}
          height="100px"
          width="100px"
          className={styles.image}
          src={image}
        />
      </div>
      <span className={styles.text}>
        <span>
          <p>{date}</p>
          <p>/</p>
          <p> yangiliklar</p>
        </span>
        <Link passHref href={link}>
          <h2>{title}</h2>
        </Link>
      </span>
    </div>
  );
};

export default News;

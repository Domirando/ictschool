import styles from "./News.module.css";
import Image from "next/image";

const News = ({image = "/images/img.png", title, date}) => {
    return (
        <div className={styles.card_container}>
            <div className={'h-[100px] w-[100px]'}>
                <Image height="100px" width="100px" className={styles.image} src={image}/>
            </div>
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

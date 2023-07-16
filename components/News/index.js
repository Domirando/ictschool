import styles from "./News.module.css";
import News from "./News";
import CardFooter from "../Card/CardFooter";
const NewsContainer = () => {
  return (
    <div className={styles.container}>
      <h2>Maktab yangiliklari</h2>
      <hr />
      <div className={styles.news}>
        <div className={styles.news_box}>
          <News
            link="https://t.me/ictschooluz/10109"
            title={
              "Ekologik ta’lim fondining (FEE) ta’lim masalalari bo‘yicha..."
            }
            image={"/images/fee.jpg"}
            date={"07.07.2023"}
          />
          <News
            link="https://t.me/ictschooluz/10119"
            title={"ZIYO MASKANINING ZUKKO O‘QUVCHISI"}
            image={"/images/grant_golibi.jpg"}
            date={"07.07.2023"}
          />
          <News
            link="https://t.me/ictschooluz/10122"
            title={"Xalqaro olimpiadadan yana 3 ta medal"}
            image={"/images/olimpiada_g.jpg"}
            date={"11.07.2023"}
          />
        </div>
        <div className={styles.news_box}>
          <News
            link="https://t.me/ictschooluz/10096"
            title={"AIDJONOVA GULASAL - XALQARO YOZGI DASTURINING GRANT SOHIBI"}
            image={"/images/portland_uni.jpg"}
            date={"03.07.2023"}
          />
          <News
            link="https://t.me/ictschooluz/10099"
            title={"G‘ALABALAR MEHNATLAR SAMARASI"}
            image={"/images/xitoy_bejing.jpg"}
            date={"06.07.2023"}
          />
          <News
            link="https://t.me/ictschooluz/10107"
            title={
              "Butunjahon ekologik ta'lim fondi direktori Pramond Kumar Sharma..."
            }
            image={"/images/zamin_eco.jpg"}
            date={"06.07.2023"}
          />
        </div>
      </div>
    </div>
  );
};
export default NewsContainer;

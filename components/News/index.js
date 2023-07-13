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
            title={
              "Ekologik ta’lim fondining (FEE) ta’lim masalalari bo‘yicha..."
            }
            image={"/images/fee.jpg"}
            date={"07.07.2023"}
          />
          <News
            title={"ZIYO MASKANINING ZUKKO O‘QUVCHISI"}
            image={"/images/grant_golibi.jpg"}
            date={"07.07.2023"}
          />
          <News
            title={"Xalqaro olimpiadadan yana 3 ta medal"}
            image={"/images/olimpiada_g.jpg"}
            date={"11.07.2023"}
          />
        </div>
        <div className={styles.news_box}>
          <News
            title={"AIDJONOVA GULASAL - XALQARO YOZGI DASTURINING GRANT SOHIBI"}
            image={"/images/portland_uni.jpg"}
            date={"03.07.2023"}
          />
          <News
            title={"G‘ALABALAR MEHNATLAR SAMARASI"}
            image={"/images/xitoy_bejing.jpg"}
            date={"06.07.2023"}
          />
          <News
            title={
              "Butunjahon ekologik ta'lim fondi direktori Pramond Kumar Sharma..."
            }
            image={"/images/zamin_eco.jpg"}
            date={"06.07.2023"}
          />
        </div>
      </div>
      <CardFooter text={"Barcha yangiliklar"} />
    </div>
  );
};
export default NewsContainer;

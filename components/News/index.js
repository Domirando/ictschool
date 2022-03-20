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
            title={"Kitob – insonning haqiqiy do’sti."}
            image={"/images/img_3.png"}
            date={"15.03.2022"}
          />
          <News
            title={
              "PREZIDENT TA’LIM MUASSASALARI AGENTLIGI TIZIMIDAGI O’QUVCHILAR ITALIYAGA BORADI!"
            }
            image={"/images/img_4.png"}
            date={"15.03.2022"}
          />
          <News
            title={
              "Assalom Navro‘z –Yangilanish,mehr-oqibat va qadr-qimmat ayyomi!"
            }
            image={"/images/img_3.png"}
            date={"15.03.2022"}
          />
        </div>
        <div className={styles.news_box}>
          <News
            title={"“IELTS Mock”"}
            image={"/images/img_5.png"}
            date={"15.03.2022"}
          />
          <News
            title={
              "EPAM kompaniyasi bilan hamkorlikda SCRATCH kurslarini davom ettmoqda.\n"
            }
            image={"/images/img_6.png"}
            date={"15.03.2022"}
          />
          <News
            title={
              "TESOL Arabia-2022 pedagoglar uchun yuqori samarali kasbiy rivojlanish imkoniyati.\n"
            }
            image={"/images/img_7.png"}
            date={"15.03.2022"}
          />
        </div>
      </div>
      <CardFooter text={"Barcha yangiliklar"} />
    </div>
  );
};
export default NewsContainer;

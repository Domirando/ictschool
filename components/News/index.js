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
            title={"Kitob – insonning haqiqiy do’sti."}
            image={"/images/img_3.png"}
            date={"15.03.2022"}
          />
          <News
            title={"Kitob – insonning haqiqiy do’sti."}
            image={"/images/img_3.png"}
            date={"15.03.2022"}
          />
        </div>
        <div className={styles.news_box}>
          <News
            title={"Kitob – insonning haqiqiy do’sti."}
            image={"/images/img_3.png"}
            date={"15.03.2022"}
          />
          <News
            title={"Kitob – insonning haqiqiy do’sti."}
            image={"/images/img_3.png"}
            date={"15.03.2022"}
          />
          <News
            title={"Kitob – insonning haqiqiy do’sti."}
            image={"/images/img_3.png"}
            date={"15.03.2022"}
          />
        </div>
      </div>
      <CardFooter text={"Barcha yangiliklar"} />
    </div>
  );
};
export default NewsContainer;

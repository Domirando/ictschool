import Card from "../Card/Card";
import NewsContainer from "../News";
import styles from "./style.module.css";

export const SchoolStuff = () => {
  return (
    <section className={styles.container}>
      <div className={styles.rightSide}>
        <h2 className={"text-[#212052] text-xl font-semibold"}>
          Maktab bo‘ylab sayohat
        </h2>
        <hr className={"border-[#212052] bg-[#212052] h-[2px] mb-4"} />
        <Card
          description={
            "Ushbu videoda Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab binosi haqida qisqacha ma’lumot olishingiz mumkin."
          }
          image={"/images/img.png"}
          image_width={800}
          image_height={250}
        />
      </div>
      <div className={styles.leftSide}>
        <NewsContainer />
      </div>
    </section>
  );
};
export default SchoolStuff;

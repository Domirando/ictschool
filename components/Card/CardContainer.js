import Card from "./Card";
import styles from "./Card.module.css";
const CardContainer = () => {
  return (
    <div className={styles.container}>
      <Card
        image_width={500}
        icon={"/icons/img_2.png"}
        image={"/images/img.png"}
        description={
          "\n" +
          "Bizning maktabimiz al-Xorazmiy kabi bobokalonimiz davomchilarini yetishtirish, axborot-kommunikatsiya texnologiyalari yo‘nalishidagi iqtidorlarni aniqlash va qobiliyatlarini ro‘yobga chiqarish uchun zarur shart-sharoitlarni yaxshilash maqsadida tashkil etilgan."
        }
        title={"IT Maktab Hayoti"}
        footer={true}
        anchor="/maktab-hayoti"
      />
      <Card
        header_color={"#0f1744"}
        image_width={500}
        icon={"/icons/img_1.png"}
        image={"/images/img_1.png"}
        description={
          "Mazkur IT maktabning asosiy vazifasilaridan biri: O‘quvchilarda dasturlash asoslari, ma’lumotlar bazalarini shakllantirish va axborot xavfsizligi ko‘nikmalari hamda raqamli media madaniyatni maktab davridanoq shakllantirish."
        }
        title={"Ta`lim"}
        footer={true}
        anchor="/steam-tabiiy-fanlar"
      />
      <Card
        image_width={500}
        header_color={"#050b29"}
        icon={"/icons/img.png"}
        image={"/images/img_2.png"}
        description={
          "Respublikada yagona bo‘lmish mazkur IT maktabga o‘quvchilar O‘zbekiston Republikasi Prezidenti, Ijod va Ixtisoslashgan maktablarni rivojlantirish Agentligi tomonidan belgilangan kvota asosida 5-sinfdan qabul qilinadi."
        }
        title={"Qabul"}
        footer={true}
        anchor="/qabul"
      />
    </div>
    //asdf
  );
};
export default CardContainer;

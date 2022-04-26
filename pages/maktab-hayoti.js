import Page from "../components/page/index";
import Button from "../components/Button";
import Link from "next/link";
import styles from "../styles/maktab-hayoti.module.css";

const oldPosts = require("./api/old/posts/");
let date = oldPosts.slug;
console.log(date);
const MaktabHayoti = () => {
  return (
    <Page
      headerBg={"/images/maktab-hayoti.jpg"}
      headerHeight={"105vh"}
      gradient="linear-gradient(0deg, hsla(0, 0%, 3%, 1), hsla(0, 20%, 5%, 0.1))"
      header={false}
      header__content={false}
    >
      <div className={styles.header_content}>
        <span>
          <h1>Maktab haqida</h1>
        </span>
        <p>
          Maktabni tashkil etishdan asosiy maqsad — ulug‘ ajdodimiz Muhammad
          al-Xorazmiyning buyuk va bebaho merosini qadrlash, o‘rganish va tadqiq
          etish, uni yosh avlod ongiga chuqur singdirish, o‘quvchilarga aniq
          fanlarning yuksak cho‘qqilarini zabt etish, boshlang‘ich sinflardan
          boshlab o‘quvchilarning axborot-kommunikatsiya texnologiyalari
          sohasidagi iqtidorini aniqlash va ulardagi qobiliyatlarini ro‘yobga
          chiqarish uchun zarur shart-sharoitlar bazasini yaratishdan iboratdir.
        </p>
      </div>
      <main>
        <section className={styles.schHistoryFacilites}>
          <div className={styles.left}>
            <h1>Maktab tarixi</h1>
          </div>
          <div className={styles.right}>
            <h1>Maktab qulayliklari</h1>
          </div>
        </section>
      </main>
    </Page>
  );
};

export default MaktabHayoti;

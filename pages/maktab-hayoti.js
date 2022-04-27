import Page from "../components/page/index";
import Button from "../components/Button";
import Link from "next/link";
import Image from "next/image";
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
      <div className={styles.hContent}>
        <span className={styles.hContent__span}>
          <h1 className={styles.hContent__span__heading}>Maktab haqida</h1>
        </span>
        <p className={styles.hContent__span__text}>
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
        <section className={styles.sFirst}>
          <div className={styles.sFirst__sideLeft}>
            <h1 className={styles.sFirst__sideLeft__heading}>Maktab tarixi</h1>
            <p className={styles.sFirst__sideLeft__textAbout}>
              Muhammad al-Xorazmiy nomidagi axborot-kommunikatsiya
              texnologiyalari yo‘nalishiga oid fanlarni chuqurlashtirib
              o‘qitishga ixtisoslashtirilgan maktab O‘zbekiston Respublikasi
              Prezidentining 2017 yil 14 sentabrdagi PQ-3274-sonli “Muhammad
              al-Xorazmiy nomidagi axborot kommunikatsiya texnologiyalari
              yo‘nalishiga oid fanlarni chuqurlashtirib o‘qitishga
              ixtisoslashtirilgan maktabni tashkil etish to‘g‘risida”gi qaroriga
              muvofiq Toshkent Davlat Iqtisodiyot Universiteti qoshidagi Aniq
              fanlarga ixtisoslashtirilgan davlat umumta’lim maktabi negizida
              tashkil etildi.
            </p>
            <p className={styles.sFirst__sideLeft__description}>
              Ixtisoslashtirilgan maktabning asosiy vazifasi etib —
              axborot-kommunikatsiya texnologiyalarini keng jalb qilgan holda
              matematika, fizika, informatika va chet tili fanlarini chuqur
              o‘zlashtirilishiga qaratilgan, o‘quvchilarni dasturlash asoslari,
              ma’lumotlar bazasini shakllantirish, axborot xavfsizligini
              ta’minlash bo‘yicha ko‘nikmalarga ega bo’lish, axborot va media
              hamda intellektual madaniyatni maktab davridan boshlab
              shakllantirishdan iboratdir.
            </p>
            <p className={styles.sFirst__sideLeft__description}>
              Shuningdek, mazkur sohada yuqori mahoratga ega pedagoglarni hamda
              mutaxassislarni jalb qilgan holda axborot-kommunikatsiya
              texnologiyalari sohasining maxsus maktabini yaratish, yosh
              matematiklar, fiziklar, dasturchilar, ixtirochilar va chet tili
              bilimdonlaridan iborat o’quvchilar jamoasini tuzish, ularning
              respublika va xalqaro fan olimpiadalarida muntazam va samarali
              ishtirokini ta’minlashni tashkil etish maktabning asosiy
              vazifalaridandir.
            </p>
            <hr className={styles.sFirst__sLeft__stripe} />
            <div className={styles.sFirst__sLeft__cCard}>
              <Image
                src={"/icons/icon-activity.png"}
                width={50}
                alt="Picture of activity"
                height={40}
              />
              <div className={styles.sFirst__sLeft__cCard__content}>
                <h1 className={styles.sFirst__sLeft__cCard__cHeading}>
                  Darsdan tashqari mashg`ulotlar
                </h1>
                <hr className={styles.sFirst__sLeft__cCard__cStripe} />
                <p className={styles.sFirst__sLeft__cCard__cText}>
                  Maktabimizda o’quvchilar asosiy darslaridan tashqari ko’plab
                  o’zlarini qiziqtirgan mashg’ulotlarga qatnashishlari mumkin.
                  Jumladan, futbol, tennis va shu kabi mashg’ulotlariga
                  qatnashib bo’sh vaqtlarini unumli o’tkazishlari mumkin
                </p>
              </div>
            </div>
            <div className={styles.sFirst__sLeft__cCard__second}>
              <Image
                src={"/icons/icon-activity.png"}
                width={50}
                alt="Picture of activity"
                height={40}
              />
              <div className={styles.sFirst__sLeft__cCard__content}>
                <h1 className={styles.sFirst__sLeft__cCard__cHeading}>
                  Darsdan tashqari mashg`ulotlar
                </h1>
                <hr className={styles.sFirst__sLeft__cCard__cStripe} />
                <p className={styles.sFirst__sLeft__cCard__cText}>
                  Maktabimizda o’quvchilar asosiy darslaridan tashqari ko’plab
                  o’zlarini qiziqtirgan mashg’ulotlarga qatnashishlari mumkin.
                  Jumladan, futbol, tennis va shu kabi mashg’ulotlariga
                  qatnashib bo’sh vaqtlarini unumli o’tkazishlari mumkin
                </p>
              </div>
            </div>
          </div>
          <div className={styles.sFirst__sideRight}>
            <h1 className={styles.sFirst__sideRight__heading}>
              Maktab qulayliklari
            </h1>
          </div>
        </section>
      </main>
    </Page>
  );
};

export default MaktabHayoti;

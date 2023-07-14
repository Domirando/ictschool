import Page from "../components/page/index";
import Button from "../components/Button";
import CardImage from "../components/Card/CardImage";
import CardDescription from "../components/Card/CardDescription";
import { Item } from "../components/IconText";
import Link from "next/link";
import DescriptionList from "../components/Card/DescriptionList";
import Image from "next/image";
import styles from "../styles/maktab-hayoti.module.css";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

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
            <Image
              className={styles.sideRight__image}
              src={"/images/school.jpg"}
              alt={"school image"}
              width={430}
              height={270}
            />
            <div className={styles.kanteen}>
              <span className={"flex flex-col gap-12 mt-12"}>
                <Item
                  iconName={solidIcons.faCarSide}
                  text={"Transport"}
                  description={`Maktabga olib boruvchi avtobus yoʻnalishlari - 18 23 30 44 95 110 119 129 152`}
                />
                <Item
                  iconName={solidIcons.faBus}
                  text={"Avtomobillar uchun turaragoh "}
                  description={
                    "Maktab hududida 24 soat nazorat ostida bo’lgan xavfsiz va qulay avtomobillar turargohi mavjud"
                  }
                />
                <Item
                  iconName={solidIcons.faSpoon}
                  text={"Maktab oshxonasi"}
                  description={
                    "Maktabda o’quvchilar va xodimlar uchun mo’ljallangan oshxona mavjud"
                  }
                />
                <Item
                  iconName={solidIcons.faHouseMedical}
                  text={"Tibbiyot xonasi"}
                  description={
                    "Maktabda favqulodda holatlar va doimiy foydalanish uchun moʻljallangan tibbiyot xonasi mavjud"
                  }
                />
              </span>
            </div>
          </div>
        </section>
        <div className={styles.building}>
          <h1>Maktab O‘quv Binosi</h1>
          <p>
            MUHAMMAD AL-XORAZMIY NOMIDAGI AXBOROT KOMMUNIKATSIYA TEXNOLOGIYALAR
            YO’NALISHIGA OID FANLARNI CHUQURLASHTIRIB O’QITISHGA
            IXTISOSLASHTIRILGAN MAKTAB O’ZBEKISTON RESPUBLIKASI PREZIDENTI
            SHAVKAT MIROMONOVICH MIRZIYOYEVNING TASHABBUSI BILAN BARPO ETILDI
          </p>
        </div>
        <div className={"flex justify-between flex-wrap m-14 mx-20"}>
          <span>
            <CardImage image={"/images/ucell.jpg"} width={400} height={250} />
            <CardDescription
              width={"400px"}
              heading={"Ucell"}
              description={
                "-yillar davomida " +
                "o‘z brendiga va doimiy mijozlariga ega bo’lgan kompaniya xisoblanadi. " +
                "Ucell brendi ostidagi xonaning dizayni kompaniyaning brendiga mos " +
                "holda jihozlangan bo’lib, 18 nafar o‘quvchiga  mo‘ljallangan laboratoriya xonasida o‘quvchilar  tomonidan yaratilgan dasturlar " +
                "amaliyoti va mahorat darslari o’tkaziladi."
              }
            />
          </span>
          <span>
            <CardImage image={"/images/artel.jpg"} width={400} height={250} />
            <CardDescription
              width={"400px"}
              heading={"Artel"}
              description={DescriptionList([
                "o'quvchilar",
                "-Elektronika asoslarini sodda va murakkab sxemalar yasashni",
                "-3D printerdan 3D modellarni chiqarishni",
                "-Arduino dasturi shu bilan bir qatorda tranzistor va mikrochiplar bilan ishlashni",
                "-Qo'shimcha modul va sensorlar bilan ishlashni (RGB, WiFi, PIR, LCD display, RFID) ular yordamida mustaqil ravishda turli xildagi arduino proyektlarini yasashni o'rganadilar.",
              ])}
            />
          </span>
          <span>
            <CardImage width={400} image={"/images/ZTE.jpg"} height={250} />
            <CardDescription
              width={"400px"}
              heading={"ZTE"}
              description={
                "-yillar davomida " +
                "o‘z brendiga va doimiy mijozlariga ega bo’lgan kompaniya xisoblanadi. " +
                "Ucell brendi ostidagi xonaning dizayni kompaniyaning brendiga mos " +
                "holda jihozlangan bo’lib, 18 nafar o‘quvchiga  mo‘ljallangan laboratoriya xonasida o‘quvchilar  tomonidan yaratilgan dasturlar " +
                "amaliyoti va mahorat darslari o’tkaziladi."
              }
            />
          </span>
          <span>
            <CardImage width={400} height={250} image={"/images/itpark.jpg"} />
            <CardDescription
              width={"400px"}
              heading={"IT Park"}
              description={
                "faol iqtidor egalarini huquqiy, buxgalteriya, marketing sohalarida ilmiy yondashuv asosida qoʻllab-quvvatlash orqali oʻz biznes loyihalarini chinakam biznesga aylantirish maqsadida  barcha imkoniyatlarni  beradigan IT-xonasi hisoblanadi. Maktabimizdagi 24 nafar o‘quvchi uchun mo‘ljallangan IT-Park laboratoriya xonasida o‘quvchilarimiz yuqorida ko‘rsatilgan barcha yo‘nalishlar " +
                "bo‘yicha o‘z bilim va ko‘nikmalarini oshirib borish imkoniyatiga ega bo‘ladilar.Ushbu laboratoriya xonasida Start Up loyihalari uchun keng sharoitlar yaratilgan."
              }
            />
          </span>
          <span>
            <CardImage width={400} height={250} image={"/images/huawei.jpg"} />
            <CardDescription
              width={"400px"}
              heading={"Huawei"}
              description={
                "Huawei – bu yetakchi axborot va kommunikatsiya texnologiyalarining (AKT) infratuzilmalari va smart qurilmalarini global miqyosda yetkazib beruvchi kompaniyalaridan biridir. Maktabning Huawei “smart room” xonasi 20 nafar o‘quvchiga mo‘ljallangan laboratoriya  bo’lib, yuqori sinf o’quvchilari  Xitoyning  Huawei Akademiyasi bilan  hamkorlikda  ingliz tilida “Online ” ko’rinishda  darslar olib boriladi va shu bilan bir qatorda o’quvchilar " +
                "kompaniyaning kelib chiqishi, dunyo bozoridagi o‘rni, dasturlash , muntazam ravishda axborot texnologiyalariga oid barcha darslarni, o‘rganishlari mumkin."
              }
            />
          </span>
          <span>
            <CardImage
              width={400}
              image={"/images/robotics.jpg"}
              height={250}
            />
            <CardDescription
              width={"400px"}
              heading={"Robototexnika xonasi"}
              description={DescriptionList([
                "Ushbu xonada o'quvchilar",
                "-C dasturlash tilini",
                "-Elektronika asoslarini",
                "-Sodda va murakkab sxemalar yasashni",
                "-3D dizayn va 3D modellashtirishni",
                "-3D printerdan va 3D modellarni chiqarishni",
                "-Arduino dasturlashni turlarini o&rsquo;rganishlari mumkin",
              ])}
            />
          </span>
        </div>
        <div className={styles.directorQuote}>
          <div className={styles.directorImg} />
          <div className={styles.quote}>
            <FontAwesomeIcon
              className={styles.icon}
              icon={faQuoteLeft}
              fontSize={70}
              color="red"
            />
            <h1>Sifatli ta’lim – kelajak poydevori</h1>
            <h2>Umarova Hilola Uktamovna / Maktab rahbari</h2>
          </div>
        </div>
      </main>
    </Page>
  );
};

export default MaktabHayoti;

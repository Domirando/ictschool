import Page from "../components/page/index";
import styles from "../styles/steam-tabiiy-fanlar.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SteamTabiiyFanlar(props) {
  let header_content = (
    <h1 className={"flex justify-center items-center text-5xl font-bold px-24"}>
      STEAM-tabiiy fanlar, texnologiya, muhandislik, san’at va matematika
      fanlarini uyg’unlikda o’qitish uslubi.
    </h1>
  );
  return (
    <div>
      <Page
        headerHeight={"90vh"}
        headerBg={"/images/img.png"}
        gradient="linear-gradient(0deg, hsla(0, 10%, 0%, 0.85), hsla(0, 50%, 0%, 0.87))"
        header={false}
        header__content={header_content}
      >
        <div className={styles.container}>
          <p>
            <b>STEAM</b> texnologiyasi ta’limdan farqli ravishda bilimlarni
            alohida emas, o’zaro mutanosib holda olib borishni ta’minlab beradi.
            O’quvchi o’zida nostandart fikrlash, muammoga bir nechta yechim
            topish va ijodkorlik ko’nkmalarini shakllantiradi va bu uning
            kelajakdagi faoliyatida juda qo’l keladi.
          </p>
          <p>
            Al-Xorazmiy nomidagi IT maktabning ta’lim jarayonida ham STEAM
            texnologiyasidan keng foydalanib kelinadi. Bundan asosiy maqsad,
            o’quvchilarning darsda olgan bilimlarini amaliyotda qo’llash va
            hayotga tadbiq qilish imkonini yaratishdan iborat.
          </p>
          <p>
            Maktabda robototexnika , sexmatexnika xonalari bilan bir qatorda
            STEAM xonasi ham mavjud bo’lib , u zamonaviy interaktiv platforma,
            ish qurollari, tikuv mashinalari, to’quv moslamalari , Arduino
            platformalari va 5 xil turdagi kesish va randalash uskunalaridan
            iborat. Qizig’i shundaki, bu uskunalar o’quvchilar tomonidan qayta
            yasalib , boshqa ko’rinish va vazifani bajarish imkonini beradi.
            Maktabda STEAM va robototexnika darslari o’zaro uyg’unlikda olib
            boriladi.
          </p>
          <p>
            Texnologiyalar rivojlangan hozirgi davrda robototexnika istiqbolli
            sohalardan biri hisoblanadi. Al-Xorazmiy nomidagi IT maktabda ham bu
            sohaga alohida e’tibor qaratilgan.
          </p>
          <p>
            Robototexnika darslari orqali o’quvchilar quyidagi bilim va
            ko’nikmalarga ega bo’lib kelmoqdalar:
            <li key={"s1"}> – C dasturlash tili </li>
            <li key={"s2"}> – Elektronika asoslari </li>
            <li key={"s3"}> – Sodda va murakkab sxemalar yasash </li>
            <li key={"s4"}>– 3D dizayn va 3D modellashtirish</li>
            <li key={"s5"}>– 3D printerdan 3D modellarni chiqarish</li>
            <li key={"s6"}>– Arduino dasturlash</li>
            <li key={"s7"}>– Tranzistor va mikrochiplar bilan ishlash</li>
            <li key={"s8"}>
              – Qo’shimcha modul va sensorlar bilan ishlash (RGB, WiFi, PIR, LCD
              display, RFID)
            </li>
            <li key={"s9"}>
              {" "}
              – Mustaqil ravishda turli xildagi Arduino proyektlar yasash
            </li>
          </p>
          <p>
            <br />
            Barcha sinf o’quvchilarining robototexnika faniga katta qiziqish
            bilan qatnashadilar va ular hozirga qadar bir qancha loyihalarni
            ishlab chiqishdi va kelgusi loyihalar ustida izlanishlar olib
            borishmoqda.
          </p>
          <Image
            src={"/images/1-1.jpg"}
            width={200}
            height={650}
            alt={"robotics"}
          />
          <Image
            src={"/images/2.jpg"}
            width={550}
            height={650}
            alt={"robotics"}
          />
          <Image
            src={"/images/3.jpg"}
            width={550}
            height={650}
            alt={"robotics"}
          />
        </div>
      </Page>
    </div>
  );
}

export default SteamTabiiyFanlar;

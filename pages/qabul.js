import Page from "../components/page/index";
import styles from "../styles/qabul.module.css";
import Image from "next/image";
import {
  faSquarePhone,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../components/Item/Card.js";
import * as icons from "@fortawesome/free-solid-svg-icons";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

function Qabul() {
  let header_content = <h1 className={styles.header}>IT Maktabga Qabul</h1>;
  return (
    <Page
      header__content={header_content}
      headerHeight={"90vh"}
      headerBg={"/images/img_2.png"}
      gradient="linear-gradient(0deg, hsla(3, 10%, 0%, 0.65), hsla(2, 50%, 0%, 0.65))"
      header={false}
    >
      <div className={styles.container}>
        <div className={styles.praktika}>
          <div className={styles.praktika_haqida}>
            <h2>BILIMLARNI AMALIYOTDA</h2>
            <p>
              Muhammad al-Xorazmiy maktabi o&#39;z o&#39;quvchilariga o&#39;qish
              bilan birgalikda o&#39;rganganlariga ko&#39;ra amaliyot o&#39;tash
              imkoniyatini ham beradi! Ya&#39;ni Muhammad al-Xorazmiy
              maktabining 11-sinf o&#39;quvchilari IT Parkda amaliyot o&#39;tab
              o&#39;z bilimlarini qo&#39;llash orqali mustahkamlay oladilar!
            </p>
          </div>
          <div className={styles.img_practice} />
        </div>
        <div className={styles.praktika}>
          <div className={styles.img_fakultativ} />
          <div className={styles.praktika_haqida}>
            <h2>O&#39;QISHDAN TASHQARI</h2>
            <p>
              O&#39;quvchilar o&#39;qishdan tashqari maktabda tekinga
              ovqatlanadilar. Shuningdek darslardan so&#39;ng bepul
              qo&#39;shimcha darslar ya&#39;ni fakultativlarga qatnashish
              imkoniyatiga egalar.
            </p>
          </div>
        </div>
        <div className={styles.praktika}>
          <div className={styles.praktika_haqida}>
            <h2>YOTOQXONA</h2>
            <p>
              Muhammad al-Xorazmiy maktabi o&#39;z viloyatdan bo&#39;lgan
              o&#39;quvchilariga chiroyli, shinam barcha jihozlarga ega
              bo&#39;lgan zamonaviy yotoqxonalari bilan ham ta&#39;minlaydi!{" "}
            </p>
          </div>
          <div className={styles.img_yotoqxona} />
        </div>
        <div className={styles.praktika}>
          <div className={styles.img_imtiyozlar} />
          <div className={styles.praktika_haqida}>
            <h2>IMTIYOZLAR</h2>
            <p>
              Agentlik tomonidan tasdiqlanadigan xalqaro, mintaqaviy yoki asosiy
              fan olimpiadalarining uchinchi (viloyat) bosqichida g&#39;olib
              bo&#39;lgan (1-, 2-, 3-o&#39;rin) o&#39;quvchilar umumiy qabul
              parametrlari doirasida kirish imtihonlarisiz o&#39;qishga qabul
              qilinadi!
            </p>
          </div>
        </div>
        <div className={styles.praktika}>
          <div className={styles.praktika_haqida}>
            <h2>ANIQ FANLAR BILAN BIR QATORDA...</h2>
            <p>
              Maktabda aniq fanlar bilan bir qatorda{" "}
              <u>O&#39;zbekiston tarixi</u>
              fani ham chuqurlashtirilgan holda o&#39;qitiladi. Shuningdek,
              sun&#39;iy intelekt, robototexnika, agrotexnologiya,
              nanotexnologiya, biotexnologiya, IELTS, TOEFL va SAT bo&#39;yicha
              qo&#39;shimcha kurslar tashkil etilishi ko&#39;zda tutilgan.
            </p>
          </div>
          <div className={styles.img_fanlar} />
        </div>
        <div className={styles.praktika_qabul}>
          <div className={styles.ariza}>
            <h4>Regestratsiya</h4>
            <h1>Qanday Qilib Farzandingiz Maktabga topshirishi mumkin?</h1>
            <p>
              Muhammad al-Xorazmiy maktabi barcha yoshi to&#39;g&#39;ri keluvchi
              o&#39;quvchilar uchun ochiq bo&#39;lib, maktabda o&#39;qimoqchi
              bo&#39;lgan o&#39;quvchi matematika va ingliz tilini yaxshi
              bilishi, imtihondan o&#39;tishi kerak.
            </p>
            <span className={styles.contactWays}>
              <span className={styles.contact}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faSquarePhone}
                  fontSize={50}
                  color="#1c1b3b"
                />
                <span>
                  <p>Savolingiz bo&#39;lsa qo&#39;ngiroq qiling</p>
                  <p>+998 (71) 207 40 48</p>
                </span>
              </span>
              <span className={styles.contact}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faEnvelope}
                  fontSize={50}
                  color="#1c1b3b"
                />
                <span>
                  <p>Savolingiz pochtaga yozing</p>
                  <p>info@ictschool.uz</p>
                </span>
              </span>
            </span>
          </div>
          <div className={styles.registration}>
            <span className={styles.one}>
              <h1>01.</h1>
              <p className={styles.content}>
                Regestratsiyadan o&#39;tish uchun maktabda olgan matematika va
                ingliz tilidan chorak va yillik baholaringiz 5 bo&#39;lishi
                kerak.
              </p>
            </span>
            <span className={styles.two}>
              <h1>02.</h1>
              <p className={styles.content}>
                Ariza topshira olishingiz uchun 4-sinfni bitirib 5-sinfga
                o&#39;tayotgan bo&#39;lishingiz kerak
              </p>
            </span>
            <span className={styles.three}>
              <h1>03.</h1>
              <p className={styles.content}>
                Muhammad al-Xorazmiy maktabiga qabul qilish aniq va tiabiiy
                fanlar, xorijiy tillar hamda mantiqiy fikrlash bo&#39;yicha
                o&#39;tkaziladigan kirish imtihonlari natijalariga ko&#39;ra
                amalga oshiriladi. Imtihon natijangiz to&#39;g&#39;ri kelsa biz
                siz bilan bog&#39;lanamiz.
              </p>
            </span>
          </div>
        </div>
        <div className={styles.reg_haqida}>
          <h1>Regestratsiyadan O&#39;tish Haqida</h1>
          <p>
            Muhammad al-Xorazmiy maktabiga imtihon topshirish uchun
            regestratsiyadan o&#39;tishingiz kerak! <br />
            Regestratsiyada esa sizdan 3x4 rasm, tu&#39;ilganlik haqida
            guvohnoma, baholar tabeli va ota-ona, topshirayotgan
            o&#39;quvchining ism shartifi kiritiladi. <br />
            Ro&#39;yxatdan muvaffaqiyatli o&#39;ta olish uchun o&#39;zingiz
            o&#39;qigan maktabingizda maktematka va ingliz tili fanlaridan 5 ga
            o&#39;qigan bo&#39;lishingiz kerak ya&#39;ni chorak va yillik 5 baho
            bo&#39;lishi kerak.
            <br />
            Muhammad al-Xorazmiy maktabining 2022-yil qabuli 2011 yil
            tug&#39;ilgan yani hozirda 4-sinfni bitirganlar uchun.{" "}
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <Card
            title={"Ro'yxatidan O'tish"}
            desc={"Ro'yxatdan o'tish formasiga kirish"}
            colorName="bg-rose-200"
            iconName={solidIcons.faSquarePen}
          />
          <Card
            title={"QA"}
            desc={"So'ralgan savollar va ularga javoblar"}
            colorName="bg-indigo-200"
            iconName={solidIcons.faComment}
          />
        </div>
        {/* foydali manbalar */}
        {/* <div className={styles.containerManbalar}> */}
        {/* <h1 className={styles.manbalar}>Foydali manbalar</h1>
          <span>
            <Card
              title={"Namuna savollar"}
              desc={"Oldingi yilgi imtihon savollari"}
              colorName="bg-emerald-200"
              iconName={solidIcons.faSquarePen}
            />
            <Card
              title={"Maktab materiallari"}
              desc={"Ingliz tili va matematikadan maktab darsligi"}
              colorName="bg-slate-200"
              iconName={solidIcons.faComment}
            />
          </span> */}
        {/* </div> */}
      </div>
    </Page>
  );
}

export default Qabul;

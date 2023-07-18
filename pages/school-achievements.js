import Card from "../components/Card/Card";
import Page from "../components/page";
import styles from "../styles/school-achievements.module.css";

function SchoolAchievements() {
  const h_title = <h1 className={styles.heading}>Maktab yutuqari</h1>;
  return (
    <Page
      headerBg={"/images/interview.jpg"}
      header__content={h_title}
      headerHeight={"90vh"}
      gradient="linear-gradient(0deg, hsla(0, 100%, 100%, 0), hsla(0, -100%, 0%, 0))"
      header={false}
    >
      <div className={styles.achievements_page}>
        <div className={styles.achievement_container}>
          <p className={styles.about_school}>
            30 yil ichida O‘zbekiston ta&rsquo;lim tizimida misli ko‘rilmagan
            islohotlar amalga oshirildi. Akademik litseylar. kasb-hunar
            kollejlari, hunar maktablari, hamkorlikdagi Oliy O‘quv yurtlari...
            Bu ro‘yxatni davom ettirish mumkin. Ayniqsa, Prezident ta&rsquo;lim
            muassasalari agentligi va uning tasarrufidagi Prezident va
            ixtisoslashtirilgan maktablar faoliyati ta&rsquo;limdagi eng yuqori
            cho‘qqidir. Muhammad al-Xorazmiy nomidagi axborot texnologiyalariga
            ixtisoslashtirilgan maktab bu tizimning qimmatbaho yoqut ko‘zi
            desak, mubolag‘a bo‘lmaydi. Maktab 2019-yildan Sh.M. Mirziyoyev
            rahnamoligida zamonaviy, hatto xorij ta&rsquo;lim talablariga javob
            beradigan yangi binoda o‘z faoliyatini davom ettirmoqda. Maktab
            asosan IT sohasiga yo‘naltirilganligi sababli zamonaviy standartlar 
             asosida   jihozlangan bo‘lib, o‘quvchilar olgan  nazariy
            bilimlarini amalda mustahkamlashlari uchun maxsus ishlab chiqilgan
            uskunalar bilan boyitilgan. Ilmiy laboratoriyalar va namoyish
            zallari, 500 o‘rinli faollar zali zamonaviy jihozlarga ega. 10 ta
            so‘nggi modeldagi kompyuterlar bilan jihozlangan IT labaratoriyalari
            ham mavjud. Robototexnika va sxemotexnika xonalari barcha zaruriy
            texnika bilan jihozlangan. Maktab va yotoqxona hududida tibbiy
            markaz va izolyator mavjud. Muassasa sportga katta e’tibor beradi.
            Maktabning sport majmuasi barcha zarur jihozlar bilan jihozlangan.
            125 nafar o‘quvchiga mo‘ljallangan,  6000 dan ziyod badiiy
            adabiyotga ega bo‘lgan kutubxona   faoliyat ko‘rsatadi. Maktabda
            matematika, ingliz tili, fizika, informatika fanlari
            chuqurlashtirilib o‘qitiladi. Agentlik tomonidan tashkil etiladigan
            fan olimpiadalarida maktab o‘quvchilari doimo faol, maktabda dars
            beradigan pedagogik jamoa ham test, suhbat asosida saralab olingan.
            Ixtisoslashtirilgan fanlar matematika, fizika, informatika va ingliz
            tili bo‘yicha   alohida dastur ishlab chiqilgan,    fakultativ
            darslar  tashkil etilgan. O‘quvchilar uchun  robototexnika va
            sportning dzyudo turi bo‘yicha to‘garaklar tashkillashtirilgan.
            Maktab faoliyatini yoritib borish, video darslar ishlab chiqish va
            loyihalar ustida islash maqsadida, zamonaviy texnika bilan
            jihozlangan  media markaz tashkil etilgan. Maktab o‘quvchilari 
            matematika, fizika va informatika fanlaridan olimpiadalarda 
            muntazam ishtirok etib kelishmoqda. 2020 yil O‘zbekistonda ilk bor
            o‘tkazilgan  “Roboto-uz.” Musobaqasida Muhammad al-Xorazmiy maktabi
            o‘quvchilari qatnashib sovrinli birinchi o‘rinni egallashgan.
          </p>
          {/* goliblar */}
          <Card
            image={null}
            header_color="#ffff"
            icon="/icons/g_cap.png"
            more={false}
            description="2018-2019 o‘quv yilida o‘tkazilgan fan olimpiyadalarida ko‘plab o‘quvchilar ishtirok etishib sovrinli o‘rinlarni egallashdi. Maktab fizika, matematika, informatika, ingliz tili fanlariga ixtisoslashtirilganligi sababli, olimpiadaning maktab bosqichida 1- o‘rinni egallagan  o‘quvchilar to‘g‘ridan to‘g‘ri uchinchi(shahar) bosqichida ishtirok etdilar. Uchinchi bosqich Toshkent shahridagi Olmazor tumanidagi 228-maktabda bo‘lib o‘tdi. Unda matematika fanidan 11-“A”sinf o‘quvchisi Abdullaev Laziz 1-o‘rin, Norboev Shohruh 2- o‘rin, fizika fanidan 9-“A” sinf o‘quvchisi Mustafaev Umid 3-o‘rin, 11-“A” sinf o‘quvchisi Axrorov Asadbek 4-o‘rinni egalladilar."
            footer={true}
            footer_text="Fan olimpiadasining shahar bosqichida matematika fanidan birinchi o‘rinni olgan 11-“A” sinf o‘quvchisi Abdullaev Laziz olimpiadaning Respublika bosqichiga  matematika fanidan yo‘llanma oldi."
            title={"Olimpiada g`oliblari va Yutuqlar"}
          />
          <hr />
          <Card
            image={null}
            header_color="#ffff"
            more={false}
            description=" 2023 yilning 5-13-iyul kunlari Yaponiyaning Chibo shahrida dunyoning 112 ta mamlakatidan jami 623 nafar maktab o’quvchilari ishtirok etgan 64-Xalqaro matematika olimpiadasida(IMO) 3 nafar o’zbekistonlik o’quvchi bronza medallarini qo’lga kiritdi va ulardan biri Al Xorazmiy maktabi o'quvchisi Ozodbek Axtamovdir . O‘zbekiston Respublikasi Prezidentining 2019-yil 3-maydagi “Iqtidorli yoshlarni aniqlash va yuqori malakali kadrlar tayyorlashning uzluksiz tizimini tashkil etish chora-tadbirlari to‘g‘risida”gi Qaroriga muvofiq 3-o‘rin (bronza medal) uchun bazaviy hisoblash miqdorining 200 baravari (66 mln so‘m), ustoziga 150 baravar (49,5 mln so‘m) pul mukofotlari beriladi."
            footer={true}
            footer_text="❗️Eslatib o’tamiz, o’zbekistonlik yoshlar 1997-yildan boshlab ishtirok eta boshlagan mazkur nufuzli musobaqada hozirga qadar 🥈10 ta kumush va 🥉32 ta bronza medallari qo’lga kiritilgan."
          />
          <hr />
          <Card
            image={null}
            header_color="#ffff"
            more={false}
            description={
              "🇺🇿 🇹🇷O‘zbekistonimizning  tayanchi va kelajagi bugungi mustaqil yurtimiz yoshlari hisoblanadi. Mana shunday izlanuvchan,bilimli yoshlarimizdan biri Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab bitiruvchisi Abdurahmon Vahobboyevdir. U yosh bo‘lishiga qaramay bir qancha yutuqlarni qo’lga kiritgan. Abdurahmon Turkiyaning Sakarya Universitetiga to‘liq grant asosida o‘qishga qabul qilindi. Shuningdek, u  Miami University, Arizona State University, Ringling College of Art and Design, Nova Southeastern University, Saint Vincent College, Bryant University, Baylor University, Appalachian State University, Berlin School of Business and Innovation yana bir qator nufuzli xorijiy universitetlardan oʻqishga qabul xatlarini qoʻlga kiritgan hamda grantlarga loyiq topilgan."
            }
            footer={true}
            footer_text="⚡Abdurahmonni barcha erishgan  yutuqlari bilan tabriklaymiz va o‘z maqsadlari sari dadil qadamlar tashlab, kelgusida ilm yo‘lida bundan-da katta marralarni zabt etishiga ishonamiz❗️"
          />
          <hr />
          <Card
            image={null}
            header_color="#ffff"
            more={false}
            description="➕➖MathPath - iqtidorli o'quvchilarni o'ziga jamlagan xalqaro yozgi dastur. Portland Universitetida o’tkaziladigan ushbu MathPath dasturga 10 ta xalqaro o’quvchilarning biri sifatida yurtimizning yana bir iqtidorli o'quvchilaridan Saidjonova Gulasal qabul qilindi. Matematika fanidan malakali imtihon asosida tashkil etilgan dasturda Gulasal 25-iyundan 23-iyulga qadar yashash, ovqatlanish, sayohat va o’qitish sharoitlari bilan grantni qo'lga kiritdi."
            footer={true}
            footer_text="🤩Shuningdek Saidjonova Gulasal Xalqaro Technovation Girls musobaqasining 2021 yilgi dasturining O’zbekistondagi eko tizim loyihasi g’olibi va 2022 yilgi dasturda dunyo bo’yicha yarim finalisti hisoblanadi. "
          />
        </div>
      </div>
    </Page>
  );
}
export default SchoolAchievements;

import Card from "../components/Card/Card";
import Page from "../components/page";
import styles from "../styles/maktab-yutuqlari.module.css";

function MaktabYutuqlari() {
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
          {/* goliblar */}
          <Card
            image={null}
            header_color="#ffff"
            icon="/icons/g_cap.png"
            more={false}
            description="2018-2019 o‘quv yilida o‘tkazilgan fan olimpiyadalarida ko‘plab o‘quvchilar ishtirok etishib sovrinli o‘rinlarni egallashdi. Maktab fizika, matematika, informatika, ingliz tili fanlariga ixtisoslashtirilganligi sababli, olimpiadaning maktab bosqichida 1- o‘rinni egallagan  o‘quvchilar to‘g‘ridan to‘g‘ri uchinchi(shahar) bosqichida ishtirok etdilar. Uchinchi bosqich Toshkent shahridagi Olmazor tumanidagi 228-maktabda bo‘lib o‘tdi. Unda matematika fanidan 11-“A”sinf o‘quvchisi Abdullaev Laziz 1-o‘rin, Norboev Shohruh 2- o‘rin, fizika fanidan 9-“A” sinf o‘quvchisi Mustafaev Umid 3-o‘rin, 11-“A” sinf o‘quvchisi Axrorov Asadbek 4-o‘rinni egalladilar."
            footer={true}
            footer_text="Fan olimpiadasining shahar bosqichida matematika fanidan birinchi o‘rinni olgan 11-“A” sinf o‘quvchisi Abdullaev Laziz olimpiadaning Respublika bosqichiga  matematika fanidan yo‘llanma oldi."
            title={"Olimpiada g`oliblari"}
          ></Card>
        </div>
        <div className={styles.achievements}>
          <Card
            image={null}
            header_color="#ffff"
            icon="/icons/g_cap.png"
            more={false}
            description="2018-2019 o‘quv yilida o‘tkazilgan fan olimpiyadalarida ko‘plab o‘quvchilar ishtirok etishib sovrinli o‘rinlarni egallashdi. Maktab fizika, matematika, informatika, ingliz tili fanlariga ixtisoslashtirilganligi sababli, olimpiadaning maktab bosqichida 1- o‘rinni egallagan  o‘quvchilar to‘g‘ridan to‘g‘ri uchinchi(shahar) bosqichida ishtirok etdilar. Uchinchi bosqich Toshkent shahridagi Olmazor tumanidagi 228-maktabda bo‘lib o‘tdi. Unda matematika fanidan 11-“A”sinf o‘quvchisi Abdullaev Laziz 1-o‘rin, Norboev Shohruh 2- o‘rin, fizika fanidan 9-“A” sinf o‘quvchisi Mustafaev Umid 3-o‘rin, 11-“A” sinf o‘quvchisi Axrorov Asadbek 4-o‘rinni egalladilar."
            footer={true}
            footer_text="Fan olimpiadasining shahar bosqichida matematika fanidan birinchi o‘rinni olgan 11-“A” sinf o‘quvchisi Abdullaev Laziz olimpiadaning Respublika bosqichiga  matematika fanidan yo‘llanma oldi."
            title={"Olimpiada g`oliblari"}
          ></Card>
        </div>
      </div>
    </Page>
  );
}
export default MaktabYutuqlari;

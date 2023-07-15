import Page from "../components/page";
import styles from "../styles/law-documents.module.css";
import Card from "../components/Card/Card";
function LawDocuments() {
  const header_content = (
    <h1 className={styles.header_title}>Qonun hujjatlar</h1>
  );
  return (
    <Page
      headerHeight={"90vh"}
      headerBg={"/images/img_11.png"}
      gradient="linear-gradient(0deg, hsla(0.9, 0%, 10%, 0.6), hsla(0.9, 50%, 100%, 0))"
      header={false}
      header__content={header_content}
    >
      <div className={styles.law_documents}>
        <Card
          image={null}
          header_color="#ffff"
          more={false}
          title="PQ-3274"
          description="Muhammad al-Xorazmiy nomidagi axborot-kommunikatsiya texnologiyalari
                    yo‘nalishiga oid fanlarni chuqurlashtirib o‘qitishga ixtisoslashtirilgan
                    maktabni tashkil etish to‘g‘risida"
          footer_text="Yuklash"
          footer={true}
          download={true}
          anchor="/docs/PQ-3274.pdf"
        />
        <Card
          image={null}
          header_color="#ffff"
          more={false}
          footer_text="Yuklash"
          title="PQ-5815"
          anchor="https://lex.uz/docs/-4504788"
          description="O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Prezident, ijod va ixtisoslashtirilgan maktablarni rivojlantirish agentligini tashkil etish to‘g‘risida"
          footer={true}
        />
        <Card
          image={null}
          header_color="#ffff"
          more={false}
          title="Maktab ustavi"
          anchor="/docs/Ustav07.12.20.pdf"
          download={true}
          footer_text="Yuklash"
          description="Muhammad al-Xorazmiy nomidagi axborot kommunikatsiya texnologiyalari yo’nalishiga oid fanlarni chuqurlashtirib o’qitishga ixtisoslashtirilgan maktabning ustavi"
          footer={true}
        />
      </div>
    </Page>
  );
}
export default LawDocuments;

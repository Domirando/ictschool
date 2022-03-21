import Page from "../components/page/index";
import styles from "../components/page/page.module.css";
import CardContainer from "../components/Card/CardContainer";
import Card from "../components/Card/Card";
import NewsContainer from "../components/News/index";
import Admission from "../components/Admission";
import Holidays from "../components/Holidays";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <Page
      headerBg={"/images/schoolImage.png"}
      headerHeight={"100vh"}
      gradient={"none"}
    >
      <main className={styles.mainItems}>
        <section>
          <CardContainer />
        </section>
        <section className={"flex justify-between gap-3 mx-12 mt-20"}>
          <div className={"w-[34%] flex flex-col gap-4"}>
            <h2 className={"text-[#212052] text-xl font-semibold"}>
              Maktab bo‘ylab sayohat
            </h2>
            <hr className={"border-[#212052] bg-[#212052] h-[2px] mb-4"} />
            <Card
              description={
                "Ushbu videoda Muhammad al-Xorazmiy nomidagi ixtisoslashtirilgan maktab binosi haqida qisqacha ma’lumot olishingiz mumkin."
              }
              image={"/images/img.png"}
            />
          </div>
          <NewsContainer />
        </section>
        <Admission />
        <Holidays />
        <Contact />
      </main>
    </Page>
  );
};

export default Index;

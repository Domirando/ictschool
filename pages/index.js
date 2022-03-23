import Page from "../components/page/index";
import styles from "../components/page/page.module.css";
import CardContainer from "../components/Card/CardContainer";
import Admission from "../components/Admission";
import Holidays from "../components/Holidays";
import Contact from "../components/Contact";
import SchoolStuff from "../components/SchoolStuff";

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
        <SchoolStuff/>
        <Admission />
        <Holidays />
        <Contact />
      </main>
    </Page>
  );
};

export default Index;

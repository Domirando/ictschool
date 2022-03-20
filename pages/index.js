import Page from "../components/page/index";
import Link from "next/link";
import styles from "../components/page/page.module.css";
import CardContainer from "../components/Card/CardContainer";

const Index = () => {
  return (
    <Page
      headerBg={"/images/schoolImage.png"}
      headerHeight={"100vh"}
      gradient={"none"}
    >
      <main className={styles.mainItems}>
        <CardContainer />
      </main>
      <article>hello</article>
    </Page>
  );
};

export default Index;

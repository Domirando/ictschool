import Page from "../components/page/index";
import styles from "../components/page/page.module.css";
import CardContainer from "../components/Card/CardContainer";
import CardImage from "../components/Card/CardImage";
import CardDescription from "../components/Card/CardDescription";
import NewsContainer from "../components/News/index";

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
        <section className={'flex justify-between mx-12 mt-20'}>
          <div className={' flex flex-col gap-4'}>
            <h2 className={'text-[#212052] text-xl font-semibold'}>Maktab bo‘ylab sayohat</h2>
            <hr className={'border-[#212052] bg-[#212052] h-[2px]'}/>
            <CardImage image={'/images/img.png'} width={'460px'} height={'280px'}/>
          </div>
          <NewsContainer/>
        </section>
      </main>
      <article>hello</article>
    </Page>
  );
};

export default Index;

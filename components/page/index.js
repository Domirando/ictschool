import Head from "../Head";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar/index";
import styles from "./page.module.css";
import CardContainer from "../Card/CardContainer";

const Page = ({
  header = true,
  footer = true,
  title,
  description,
  headerBg,
  gradient,
  headerHeight,
  image,
  children,
}) => {
  return (
    <div className={styles.container}>
      <Head title={title} description={description} image={image} />
      <Navbar />
      <Header
        headerHeight={headerHeight}
        headerBg={headerBg}
        gradient={gradient}
      />

      <main className={styles.mainItems}>
        <CardContainer/>
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Page;

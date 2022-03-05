import Head from "../Head";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Navbar/index";
import styles from "./page.module.css";

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
    <div>
      <Head title={title} description={description} image={image} />
      <Navbar />
      <Header
        headerHeight={headerHeight}
        headerBg={headerBg}
        gradient={gradient}
      />

      <main className={styles.mainItems}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad
        architecto asperiores at autem beatae consequuntur cupiditate doloremque
        ea eos est ex expedita inventore minima molestias nesciunt non numquam
        officia perferendis porro quas quidem, repellat repudiandae, sapiente
        sint tempora unde veritatis. Aliquid autem deleniti dolorem eaque earum
        error esse exercitationem, iste laboriosam quos rem soluta suscipit vel
        voluptas voluptatem! A aliquam assumenda atque, earum ipsam quis quo
        ratione reiciendis vel voluptates. Accusantium consequatur, dolor error
        iure possimus ratione repellendus sapiente sunt velit voluptatem? At
        consequatur delectus dicta ducimus eius explicabo id ipsam, molestiae
        mollitia odio quae, quam rerum, saepe vel.
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Page;

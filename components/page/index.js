import Head from "../Head";
import Footer from '../Footer'
import Header from '../Header'
import Navbar from '../Navbar/index'
import styles from './page.module.css'

const Page = ({
  header = true,
  footer = true,
  title,
  description,
  image,
  children,
}) => {
  return (
    <div className="">
      <Head title={title} description={description} image={image} />
        <Navbar />
      <Header />

      <main className="">{children}</main>

      <Footer/>
    </div>
  );
};

export default Page;

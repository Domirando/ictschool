import Head from "./Head";
import Footer from './Footer'
import Header from './Header'

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

      <Header />

      <main className="">{children}</main>

      <Footer/>
    </div>
  );
};

export default Page;

import Head from "./Head";

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

      {/* Header  */}
      {/* {header && <Header />} */}

      <main className="">{children}</main>

      {/* Footer  */}
      {/* {footer && <Footer />} */}
    </div>
  );
};

export default Page;

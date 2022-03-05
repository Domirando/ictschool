import Page from "../components/page/index";
import Link from "next/link";

const Index = () => {
  return (
    <Page
      headerBg={"/schoolImage.png"}
      headerHeight={"100vh"}
      gradient={"none"}
    >
      <article>
        <h1>Hello World</h1>

        <p>This is ICTSchool &lsquo s website</p>
        <p>
          <Link href="/about">Go to about</Link>
        </p>
      </article>
    </Page>
  );
};

export default Index;

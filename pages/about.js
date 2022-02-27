import Page from "../components/Page";
import Link from "next/link";

const About = () => {
  return (
    <Page title="this is about page">
      <article>
        <h1>Hello World</h1>

        <p>This is ICTSchool &lsquo s website</p>
        <p>
          <Link href="/">Go to home</Link>
        </p>
      </article>
    </Page>
  );
};

export default About;

import Page from "../components/page/index";
import Button from "../components/Button";
import Link from "next/link";
const oldPosts = require("./api/old/posts/");
let date = oldPosts.slug;
console.log(date);
const About = () => {
  return (
    <Page headerHeight={"70vh"} gradient="linear-gradient(0deg, hsla(212, 72%, 60%, 0.45), hsla(278, 55%, 80%, 0.68))">
      <article>
        <h1>Hello World</h1>

        <p>This is ICTSchool &lsquo s website</p>
        <p>
          <Link href="/">Go to home</Link>
        </p>
        <Button text={"kirish"} bgcolor="bg-slate-700" />
      </article>
    </Page>
  );
};

export default About;

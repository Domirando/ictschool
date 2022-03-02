import Page from "../components/Page";
import Button from "../components/Button";
import Link from "next/link";
const oldPosts = require('./api/old/posts/')
let date = oldPosts.slug;
console.log(date)
const About = () => {
  return (
    <Page>
      <article>
        <h1>Hello World</h1>

        <p>This is ICTSchool &lsquo s website</p>
        <p>
          <Link href="/">Go to home</Link>
        </p>
          <Button text={'kirish'} bgcolor='bg-slate-700'/>
      </article>
    </Page>
  );
};

export default About;

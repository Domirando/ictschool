import Page from "../components/page/index";
import Button from "../components/Button";
import Link from "next/link";
const oldPosts = require("./api/old/posts/");
let date = oldPosts.slug;
console.log(date);
const MaktabHayoti = () => {
  return (
    <Page
      headerHeight={"70vh"}
      gradient="linear-gradient(0deg, hsla(212, 72%, 60%, 0.45), hsla(278, 55%, 80%, 0.68))"
    >
      salooom
    </Page>
  );
};

export default MaktabHayoti;

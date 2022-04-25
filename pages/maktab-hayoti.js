import Page from "../components/page/index";
import Button from "../components/Button";
import Link from "next/link";
const oldPosts = require("./api/old/posts/");
let date = oldPosts.slug;
console.log(date);
const MaktabHayoti = () => {
  return (
    <Page
      headerBg={"/images/maktab-hayoti.jpg"}
      headerHeight={"120vh"}
      gradient="none"
      header={false}
    >
      salooom
    </Page>
  );
};

export default MaktabHayoti;

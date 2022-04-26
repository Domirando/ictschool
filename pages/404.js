import Page from "../components/page";
import Error from "../components/Error";

export default function Custom404() {
  return (
    <Page
      headerHeight={"110vh"}
      error_page={true}
      headerBg={"/images/404-background.jpg"}
      title={"Page not found | ICTSchool.uz"}
      header__content={false}
      gradient="linear-gradient(0deg, hsla(206, 70%, 20%, 0.45), hsla(206, 60%, 20%, 0.45))"
    ></Page>
  );
}
import Page from "../components/page";
import Error from "../components/Error";
export default function Custom404() {
  return (
    <Page
      headerHeight={"110vh"}
      headerBg={"/images/404-background.jpg"}
      title={"Page not found | ICTSchool.uz"}
      header__content={
        <Error
          error_type={"404"}
          description={"PAGE NOT FOUND"}
          message={"Sorry, we couldn't find the page you're looking for."}
        />
      }
      gradient="linear-gradient(0deg, hsla(206, 70%, 20%, 0.45), hsla(206, 60%, 20%, 0.45))"
    ></Page>
  );
}

import Page from "../components/page/index";
import styles from "../styles/mirzo-ulugbek-goliblari.module.css";

function MirzoUlugbekGoliblari(props) {
  let header_content = <h1>hello</h1>;
  return (
    <Page
      header__content={header_content}
      headerHeight={"75vh"}
      headerBg={"/images/img_2.png"}
      gradient="linear-gradient(0deg, hsla(3, 10%, 0%, 0.65), hsla(2, 50%, 0%, 0.65))"
      header={false}
    />
  );
}

export default MirzoUlugbekGoliblari;

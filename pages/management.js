import Page from "../components/page";
import ManagementStuff from "../components/ManagementStuff";
import styles from "../styles/management.module.css";
function Management() {
  const header_content = <h1 className={styles.header_title}>Rahbariyat</h1>;
  return (
    <Page
      headerHeight={"90vh"}
      headerBg={"/images/img_11.png"}
      gradient="linear-gradient(0deg, hsla(0.9, 0%, 10%, 0.6), hsla(0.9, 50%, 100%, 0))"
      header={false}
      header__content={header_content}
    >
      <div className={styles.management}>
        <ManagementStuff
          full_name={"Sanjarbek Utepov"}
          avatar="/images/Utepov-S.png"
          position={"Maktab Direktori"}
          diploms={[
            "-2011-yil. Toshkent Davlat Pedagogika Universiteti (bakalavr)",
            "-2013-yil. Toshkent Davlat Pedagogika Universiteti (magistratura)",
          ]}
        />
        <ManagementStuff
          avatar="/images/Davidova-D.png"
          full_name={"Dilrabo Davidova"}
          position="O'quv ishlari bo'yicha direktor o'rinbosari"
          diploms={["-1999-yil. Toshkent Davlat Agrar Universiteti"]}
        />
        <ManagementStuff
          avatar="/images/fazliddin-ismoilov.jpg"
          full_name={"Fazliddin Ismailov"}
          position={"Ma'naviy va Ma'rifiy ishlar bo'yicha direktor o'rinbosari"}
          diploms={[
            "2019-yil. Riga Texnika Universiteti. Latviya Respublikasi",
          ]}
        />
      </div>
    </Page>
  );
}

export default Management;

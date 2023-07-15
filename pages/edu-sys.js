import Page from "../components/page";
import styles from "../styles/edu-sys.module.css";
import Image from "next/image";
function EduSys({
  images = ["/images/artel.jpg", "/images/huawei.jpg", "/images/itpark.jpg"],
}) {
  const header_content = (
    <h1 className={styles.header_title}>O&rsquo;quv tizimi</h1>
  );
  return (
    <Page
      headerHeight={"90vh"}
      headerBg={"/images/img_11.png"}
      gradient="linear-gradient(0deg, hsla(0.9, 0%, 10%, 0.6), hsla(0.9, 50%, 100%, 0))"
      header={false}
      header__content={header_content}
    >
      <div className={styles.edu_sys}>
        <p>
          Muhammad al Xorazmiy nomidagi ixtisoslashtirilgan maktab matematika,
          informatika, ingliz tili va fizika fanlarini chuqurlashtirib
          o&rsquo;qitishga mo&rsquo;ljallangan bo&rsquo;lib, o&rsquo;quvchilar 4
          ta asosiy fanlardan chuqur bilim oladilar. Bu o&rsquo;quv tizimi
          oquvchilarda AT, matematika, fizika fanlaridan o&rsquo;z istedodlarini
          va qobiliyatlarini maksimal darajada oshirish imkonini beradi.
        </p>
        <div className={styles.images}>
          <Image
            src={images[0]}
            alt="avatar"
            sizes="100vw"
            style={{ width: "31%", height: "100%" }}
            width={0}
            height={0}
          />
          <Image
            src={images[1]}
            alt="avatar"
            sizes="100vw"
            style={{ width: "31%", height: "100%" }}
            width={0}
            height={0}
          />
          <Image
            src={images[2]}
            alt="avatar"
            sizes="100vw"
            style={{ width: "31%", height: "100%" }}
            width={0}
            height={0}
          />
        </div>
      </div>
    </Page>
  );
}
export default EduSys;

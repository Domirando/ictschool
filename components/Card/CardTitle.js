import styles from "./Card.module.css";
import Image from "next/image";
const CardTitle = ({ icon, title, bg, more }) => {
  return (
    <div className={`bg ${styles.title}`}>
      <Image alt="" src={icon} width={50} height={50} />
      <style jsx>{`
        .bg {
          @apply flex items-center py-7 gap-6 pl-8;
          background-color: ${bg};
        }
        .bg > img {
          width: 45%;
          height: 40%;
        }
      `}</style>
      <div className={styles.title_text}>
        <h1>{title}</h1>
        {more ? <p>Batafsil</p> : null}
      </div>
    </div>
  );
};
export default CardTitle;

import styles from "./Card.module.css";

const CardTitle = ({ icon, title, bg }) => {
  return (
    <div className={`bg ${styles.title}`}>
      <img src={icon} />
      <style jsx>{`
        .bg {
          @apply flex items-center py-7 gap-6 pl-8;
          background-color: ${bg ? bg : "#3a3a7c"};
        }
      `}</style>
      <div className={styles.title_text}>
        <h1>{title}</h1>
        <p>Batafsil</p>
      </div>
    </div>
  );
};
export default CardTitle;

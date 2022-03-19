import styles from './Card.module.css'
const CardTitle = ({icon, title}) => {
  return <div className={styles.title}>
    <img src={icon}/>
    <div className={styles.title_text}>
      <p>{title}</p>
      <p>Batafsil</p>
    </div>
  </div>;
};
export default CardTitle;

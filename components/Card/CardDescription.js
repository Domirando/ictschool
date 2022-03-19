import styles from './Card.module.css'
const CardDescription = ({description}) => {
  return <div className={styles.description}>
    {description}
  </div>;
};
export default CardDescription;

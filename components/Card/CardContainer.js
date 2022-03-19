import Card from "./Card";
import styles from './Card.module.css'
const CardContainer = () => {
  return (
    <div className={styles.container}>
      <Card image={'/schoolImage.png'} description={'adfasfs'} title={'IT Maktab Hayoti'}/>
      <Card image={'/schoolImage.png'} description={'adfasfs'} title={'IT Maktab Hayoti'}/>
      <Card image={'/schoolImage.png'} description={'adfasfs'} title={'IT Maktab Hayoti'}/>
    </div>
  );
};
export default CardContainer;

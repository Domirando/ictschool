import styles from "./Donate.module.css";
import CardImage from "../../Card/CardImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Button";
const Donate = () => {
  return (
    <div className={styles.container}>
      <CardImage image={"/images/img_11.png"} width={450} height={500} />
      <h1>Maktab uchun xayriya</h1>
      <p className={styles.description}>
        Mamlakatimizda o‘quvchi-yoshlarning sifatli ta’lim-tarbiyasi uchun zarur
        shart-sharoitlarni yaxshilash va ularni har tomonlama qo‘llab-quvvatlash
        yo‘lida katta ishlar amalga oshirilmoqda. Agar Siz biz bilan hamkorlikni
        yo‘lga qo‘yib, IT maktab rivojlantirishga o‘z hissangizni qo’shing
      </p>
      <Button
        uppercase={false}
        width={"w-44"}
        fontSize={`text-[12px]`}
        py={"py-4"}
        text={
          <p className={"flex gap-2 justify-center items-center"}>
            <FontAwesomeIcon icon={faHeart} /> Hamkor bo`lish
          </p>
        }
        bgcolor={"bg-[#202060]"}
        border={"rounded-none"}
      />
    </div>
  );
};
export default Donate;

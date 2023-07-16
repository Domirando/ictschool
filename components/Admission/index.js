import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../Button";

const Admission = () => {
  return (
    <section className={styles.container}>
      <div className={styles.leftImage}></div>
      <div className={styles.rightContent}>
        <div className={styles.right_textContent}>
          <h1>Maktabga qabul</h1>
          <h3>2023/2024 o‘quv yili uchun maktabga qabul qilish</h3>
          <p>
            Ixtisoslashtirilgan maktabga o‘quvchilar O‘zbekiston Republikasi
            Prezidenti, Ijod va Ixtisoslashgan maktablarni rivojlantirish
            Agentligi tomonidan belgilangan kvota asosida 5-sinfdan boshlab
            yozma va og’zaki sinov imtihonlariga ko‘ra tanlov asosida qabul
            qilinadi.
          </p>
          <Button
            href="https://ariza.piima.uz/"
            border={"rounded-none"}
            text={"Ro'yxatdan o'tish"}
            bgcolor={"bg-[#3a3a7c]"}
          />
        </div>
      </div>
    </section>
  );
};
export default Admission;

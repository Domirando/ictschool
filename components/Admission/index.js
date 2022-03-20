import styles from './styles.module.css'
import Image from "next/image";
import Button from "../Button";
const Admission = () => {
    return (
        <section className={styles.container}>
            <div>
                <Image src={'/images/img.png'} width={'100%'} height={'100%'} className={styles.image}/>
            </div>
            <div>
                <h1>Maktabga qabul</h1>
                <h3>2020/2021 o‘quv yili uchun maktabga qabul qilish</h3>
                <p>Ixtisoslashtirilgan maktabga o‘quvchilar O‘zbekiston Republikasi Prezidenti, Ijod va Ixtisoslashgan maktablarni rivojlantirish Agentligi tomonidan belgilangan kvota asosida 5-sinfdan boshlab yozma va og’zaki sinov imtihonlariga ko‘ra tanlov asosida qabul qilinadi.</p>
                <Button text={"Ro'yxatdan o'tish"} bgcolor={'bg-[#3a3a7c]'}/>
            </div>
        </section>
    )
}
export default Admission
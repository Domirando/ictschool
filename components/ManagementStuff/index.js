import styles from "./management-stuff.module.css";
import Image from "next/image";
const ManagementStuff = ({
  avatar = "/images/director.jpg",
  position,
  full_name,
  diploms = ["salom", "saalom"],
}) => {
  return (
    <div className={styles.management_stuff}>
      <Image
        src={avatar}
        alt="avatar"
        sizes="100vw"
        style={{ width: "30%", height: "100%" }}
        width={0}
        height={0}
      />
      <div className={styles.description}>
        <h1 className={styles.full_name}>{full_name}</h1>
        <p>{position}</p>
        <div className={styles.diploms}>
          {diploms.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ManagementStuff;

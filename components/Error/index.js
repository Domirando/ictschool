import Link from "next/link";
import styles from "./error_styles.module.css";

function Error(props) {
  return (
    <div className={styles.container}>
      <h1>{props.error_type}</h1>
      <h2>{props.description}</h2>
      <h3>{props.message}</h3>
      <input className={styles.key_search} placeholder={"Type Keywords..."} />
      <button>
        <Link href={"/"}>OR BACK TO HOMEPAGE</Link>
      </button>
    </div>
  );
}

export default Error;

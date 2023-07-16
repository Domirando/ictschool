import styles from "./Card.module.css";
const CardDescription = ({ description, heading = "", width = "280px" }) => {
  return (
    <div className={styles.description}>
      <style jsx>{`
        .container {
          width: ${width};
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding-right: 20px;
        }
        .container > h1 {
          font-size: 22px;
          color: black;
          font-weight: bold;
        }
        .container > p {
          line-height: 1.7rem;
          font-size: 17px;
        }
      `}</style>
      <span className="container">
        <h1>{heading}</h1>
        <p>{description}</p>
      </span>
    </div>
  );
};
export default CardDescription;

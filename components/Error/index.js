import Link from "next/link";

function Error(props) {
  return (
    <div className={"container"}>
      <h1>{props.error_type}</h1>
      <h2>{props.description}</h2>
      <h3>{props.message}</h3>
      <button>
        <Link href={"/"}>BACK TO HOMEPAGE</Link>
      </button>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin-top: -5vh;
        }

        .container > h1 {
          font-size: 150px;
          font-weight: bold;
        }

        .container > h2 {
          font-size: 35px;
          font-weight: bold;
          margin-bottom: 5px;
        }

        .container > h3 {
          font-size: 18px;
          margin-bottom: 50px;
        }

        .container > button {
          font-size: 17px;
          font-weight: bold;
        }

        @media (max-width: 760px) {
          .container {
            margin-top: 8vh;
          }

          .container > h1 {
            font-size: 60px;
            font-weight: bold;
          }

          .container > h2 {
            font-size: 30px;
            font-weight: bold;
            margin-bottom: 5px;
          }

          .container > h3 {
            font-size: 15px;
            margin-bottom: 50px;
          }
        }
      `}</style>
    </div>
  );
}

export default Error;

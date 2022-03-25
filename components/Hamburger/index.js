const Hamburger = () => {
  return (
    <div className="hamburger">
      <style jsx>
        {`
          .hamburger {
            display: none;
          }
          .hamburger {
            transition: all 0.5s ease-in-out;
            width: 30px;
            height: 3px;
            background-color: white;
            border-radius: 5px;
          }
          .hamburger::before {
            transition: all 0.5s ease-in-out;
            transform: translateY(-8px);
            content: "";
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: white;
            border-radius: 5px;
          }
          .hamburger::after {
            transition: all 0.5s ease-in-out;
            transform: translateY(8px);
            content: "";
            position: absolute;
            width: 30px;
            height: 3px;
            background-color: white;
            border-radius: 5px;
          }
          @media screen and (max-width: 1080px) {
  .hamburger{
  display: block;
  }
}
        `}
      </style>
    </div>
  );
};
export default Hamburger;

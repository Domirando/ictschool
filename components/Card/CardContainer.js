import Card from "./Card";

const CardContainer = () => {
  return (
    <div className={"flex flex-row justify-between mx-12"}>
      <Card />
      <Card />
      <Card />
    </div>
  );
};
export default CardContainer;

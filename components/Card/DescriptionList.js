const DescriptionList = (data) => {
  return (
    <div>
      {data.map((item, index) => (
        <span key={index}>
          <p>{item}</p>
          <br />
        </span>
      ))}
    </div>
  );
};
export default DescriptionList;

const Button = ({
  text,
  border = "rounded-md",
  fontSize = false,
  width = false,
  uppercase = true,
  bgcolor,
  py = "py-2",
}) => {
  return (
    <button
      className={`${border} ${bgcolor} ${py} ${
        fontSize ? fontSize : null
      } px-8 ${
        width ? width : null
      } flex items-center justify-center font-bold text-white ${
        uppercase ? "uppercase" : null
      }`}
    >
      {text}
    </button>
  );
};
export default Button;

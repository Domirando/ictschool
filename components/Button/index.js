const Button = ({ text, border = "rounded-md", bgcolor }) => {
  return (
    <button
      className={
        bgcolor +
        " " +
        border +
        " px-8 h-full flex items-center justify-center py-2 font-bold text-white uppercase"
      }
    >
      {text}
    </button>
  );
};
export default Button;

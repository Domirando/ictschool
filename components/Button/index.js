const Button = ({ text, bgcolor }) => {
  return (
    <button
      className={
        bgcolor +
        " px-8 h-full flex items-center justify-center py-2 font-bold rounded-md text-white uppercase"
      }
    >
      {text}
    </button>
  );
};
export default Button;

const Button = ({ text, border = "rounded-md", uppercase=true, bgcolor, py="py-2" }) => {
  return (
    <button
      className={`${border} ${bgcolor} ${py} px-8 h-full flex items-center justify-center font-bold text-white ${uppercase?'uppercase':null}`
      }
    >
      {text}
    </button>
  );
};
export default Button;

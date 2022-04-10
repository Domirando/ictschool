import Link from 'next/link'
const Button = ({
  text,
  border = "rounded-md",
  fontSize = false,
  width = false,
  uppercase = true,
  bgcolor,
  py = "py-2",
  href="/404"
}) => {
  return (
    <button
      className={`${border} ${bgcolor} ${py} ${fontSize} ${width} px-8  flex items-center justify-center font-bold text-white ${
        uppercase ? "uppercase" : null
      }`}
    >
      <Link href={href}>{text}</Link>
    </button>
  );
};
export default Button;

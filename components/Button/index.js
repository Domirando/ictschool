import styles from "./button.module.css";
const Button = ({ text, bgcolor}) => {
  return <button className={bgcolor + " px-8 py-2 font-bold rounded-md text-white uppercase"}>{text}</button>;
};
export default Button;

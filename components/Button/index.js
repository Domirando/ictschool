import styles from './button.module.css'
const Button = ({text, bgcolor}) => {
    return <button className={bgcolor+' p-6 text-white'}>{text}</button>
}
export default Button
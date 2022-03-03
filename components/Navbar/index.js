import styles from './navbar.module.css'
import {faEnvelopeOpen, faPhone} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Navbar = () => {
    return (
        <nav>
            {/*<img src="https://ictschool.uz/wp-content/uploads/2019/10/AKSS-logo3-UZ.png"/>*/}
            <div className={styles.topBarBg}>
                <div className={styles.barContainer}>
                    <div className={styles.left}>
                        <img className={styles.flag}
                             src="https://ictschool.uz/wp-content/plugins/polylang/flags/uz.png" width="18"
                             height="12"/>
                        <img className={styles.flag}
                             src="https://ictschool.uz/wp-content/plugins/polylang/flags/ru.png" width="18"
                             height="12"/>
                        <FontAwesomeIcon className={styles.icon} icon={faEnvelopeOpen}
                                         font-size={"15px"}
                                         color="white"/>
                        <p>info@ictschool.uz</p>
                        <FontAwesomeIcon className={styles.icon} icon={faPhone} font-size={"15px"} color="white"/>
                        <p className={styles.num}><a>1206</a></p>
                    </div>
                    <div className={styles.right}><p>E-CLASS</p></div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
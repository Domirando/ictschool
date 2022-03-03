import styles from './navbar.module.css'
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
    return (
        <nav>
             {/*<img src="https://ictschool.uz/wp-content/uploads/2019/10/AKSS-logo3-UZ.png"/>*/}
            <div className={styles.topBarBg}>
                <div className={styles.barContainer}>
                    <div className={styles.left}>
                        <span className="flags">
                            <img className="uzbFlag flag" src="https://ictschool.uz/wp-content/plugins/polylang/flags/uz.png" width="18" height="12"/>
                        </span>
                        <span className="flags">
                            <img className="ruFlag flag" src="https://ictschool.uz/wp-content/plugins/polylang/flags/ru.png" width="18" height="12"/>
                        </span>
                    </div>
                    <div className={styles.right}><p>E-CLASS</p></div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
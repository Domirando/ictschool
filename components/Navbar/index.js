import styles from './navbar.module.css'
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
             {/*<img src="https://ictschool.uz/wp-content/uploads/2019/10/AKSS-logo3-UZ.png"/>*/}
            <div className="top-bar">
                <div className="bar-container">
                    <span className="top-bar-left">
                        <span className="flags">
                            <img className="uzbFlag flag" src="https://ictschool.uz/wp-content/plugins/polylang/flags/uz.png" width="18" height="12"/>
                        </span>
                        <span className="flags">
                            <img className="ruFlag flag" src="https://ictschool.uz/wp-content/plugins/polylang/flags/ru.png" width="18" height="12"/>
                        </span>
                    </span>
                    <div className="top-bar-right">E-CLASS <i className="fa fa-envelope-open-o" aria-hidden="true"></i></div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
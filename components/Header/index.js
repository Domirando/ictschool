import styles from "./header.module.css";
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import state from '../../util/state'

const Header = ({title, text, image, gradient, btn, headerBg, headerHeight}) => {
    let navTitle = state.navbar.map((items, index) => items.items === null ? <li className={styles.items} key={index}>{items.title}</li> :
        <li key={index} className={styles.items}>
            {items.title}
            <FontAwesomeIcon icon={faAngleDown} className={styles.icon}/>
        </li>)
    return (
        <div className="headerContainer">
            <style jsx>{`
              .headerContainer {
                background: ${gradient},
                url("${headerBg}") no-repeat center center / cover;
                min-height: ${headerHeight};
                padding: 50px 100px;
                color: white;
                display: flex;
                flex-direction: column;
                gap: 50px;
              }
            `}</style>
            {/*logo-image*/}
            <div className={styles.logo}>
                <Image
                    src={
                        "https://ictschool.uz/wp-content/uploads/2019/10/AKSS-logo3-UZ-300x31.png"
                    }
                    alt={"logo"}
                    height="40px"
                    width="300px"
                />
            </div>
            {/*nav*/}
            <ul className={styles.navListTitles}>
                {
                    navTitle
                }
            </ul>
            {/*title*/}

            {/*text*/}

            {/*btn*/}
        </div>
    );
};
export default Header;

import styles from "./header.module.css";
import Image from 'next/image'
import state from '../../util/state'

const Header = ({title, text, image, gradient, btn, headerBg, headerHeight}) => {
    let navTitles = state.navbar.map((items, index) => items.title)
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
                    navTitles.map((items, index) => <li>{items}</li>)
                }
            </ul>
            {/*title*/}

            {/*text*/}

            {/*btn*/}
        </div>
    );
};
export default Header;

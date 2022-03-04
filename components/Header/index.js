import styles from "./header.module.css";
import Image from 'next/image'

const Header = ({title, text, image, gradient, btn, headerBg, headerHeight}) => {
    return (
        <div className="headerContainer">
            <style jsx>{`
              .headerContainer {
                background-image: url("${headerBg}");
                min-height: ${headerHeight};
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
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

            {/*title*/}

            {/*text*/}

            {/*btn*/}
        </div>
    );
};
export default Header;

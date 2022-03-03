import styles from './footer.module.css'
import FooterColumn from './FooterColumn'
import footerState from '../../util/state'

const Footer = () => {
    let footerItems = footerState.footerColumnData.map((index, items) =>
        <FooterColumn heading={items.title}/>
    )
    return (
        <footer>
            <div className={styles.container}>
                <div className={styles.rowsContainer}>
                    <div className={styles.footerColumn}>
                        <div className={styles.footerText}>
                            <div className={styles.textWidget}>
                                <img src={"https://ictschool.uz/wp-content/uploads/2019/10/AKSS-logo3-UZ-300x31.png"}/>
                            </div>
                            <div className={styles.textWidget}>
                                <p>Mahtumquli ko’chasi , Yashnabod tumani, Tashkent</p>
                            </div>
                            <div className={styles.textWidget}>
                                <p className={styles.textWhite}>info@ictschool.uz</p>
                            </div>
                        </div>
                        <hr className={styles.straight}/>
                        <ul>
                            <li type="disc">O'zbek</li>
                            <li type="disc">Русский</li>
                        </ul>
                    </div>
                    {footerItems}
                </div>
            </div>
        </footer>
    )
}
export default Footer
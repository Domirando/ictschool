import styles from './footer.module.css'

const Footer = () => {
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
                    </div>
                    <div className={styles.footerColumn}>
                        <div>asf</div>
                    </div>
                    <div className={styles.footerColumn}>
                        <div>afdsaf</div>
                    </div>
                    <div className={styles.footerColumn}>
                        <div>afsafa</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer
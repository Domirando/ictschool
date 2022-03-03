import styles from './footer.module.css'

const FooterColumn = ({heading}) => {
    return (
        <div>
            {heading}
            <hr className={styles.straight}/>
        </div>
    )
}
export default FooterColumn
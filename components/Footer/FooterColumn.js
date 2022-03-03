import styles from './footer.module.css'
import Link from 'next/link'
const FooterColumn = ({item}) => {
    return (
        <div>
            {item.title}
            <hr className={styles.straight}/>
            {item.items.map((el, index) => {
                <Link href={el.url} className={styles.list}>{el.title}</Link>
            })}
        </div>
    )
}
export default FooterColumn
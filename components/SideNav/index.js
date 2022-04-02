import styles from './styles.module.css';

function SideNav(props) {
    let {open, smth} = props
    return (
        // Todo: map navbar items as sidenav items
        <div className={
            open?`visile ${styles.side_nav}`
            :`hidden ${styles.side_nav}`}>
            <li>hi</li>
            <li>hi</li>
        </div>
    );
}

export default SideNav;
import styles from './Header.module.css'

export function Header(){
    return (
     <header>
        <div className={styles.navContainer}>
            <img src="" alt="logo" />
            <ul className={styles.navMenu}>
                <li>Home</li>
                <li>About me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className={styles.connect}>Contact me</div>
        </div>
        
     </header>
    );
}
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';

export function Header(){
    return (
     <header>
        <div className={styles.navContainer}>
            <img style={{width:100}} src={logo} alt="logo" />
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
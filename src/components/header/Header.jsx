import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState } from 'react';


export function Header(){
    const [menu, setmenu] = useState('home');
    return (
     <header>
        <div className={styles.navContainer}>
            <img style={{width:100}} src={logo} alt="logo" />
            <ul className={styles.navMenu}>
                <li><AnchorLink className={styles.anchorLink} offset={50} href='#home'><p onClick={() => setmenu('home')} className={menu === 'home' ? styles.active : null}>Home</p></AnchorLink></li>
                <li><AnchorLink className={styles.anchorLink} offset={50} href='#about-me'><p onClick={() => setmenu('about')} className={menu === 'about' ? styles.active : null}>About me</p></AnchorLink></li>
                <li><AnchorLink className={styles.anchorLink} offset={50} href='#portfolio'><p onClick={() => setmenu('portfolio')} className={menu === 'portfolio' ? styles.active : null}>Portfolio</p></AnchorLink></li>
                <li><AnchorLink className={styles.anchorLink} offset={50} href='#'><p>Contact</p></AnchorLink></li>
            </ul>
            <div className={styles.connect}>Contact me</div>
        </div>
        
     </header>
    );
}
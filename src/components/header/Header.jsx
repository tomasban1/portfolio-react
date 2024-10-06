/* eslint-disable react/prop-types */
 
import styles from './Header.module.css';
import logo from '../../assets/logo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';



export function Header({menu, setMenu}){
   
    
    return (
     <header>
        <div className={styles.navContainer}>
            <img style={{width:100}} src={logo} alt="logo" />
            <ul className={styles.navMenu}>
                <li>
                    <AnchorLink className={styles.anchorLink} offset={50} href='#home'>
                        <p onClick={() => setMenu('home')} className={menu === 'home' ? styles.active : null}>Home</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className={styles.anchorLink} offset={50} href='#about-me'>
                        <p onClick={() => setMenu('about')} className={menu === 'about' ? styles.active : null}>About me</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className={styles.anchorLink} offset={50} href='#portfolio'>
                        <p onClick={() => setMenu('portfolio')} className={menu === 'portfolio' ? styles.active : null}>Portfolio</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className={styles.anchorLink} offset={50} href='#credentials'>
                        <p onClick={() => setMenu('credentials')} className={menu === 'credentials' ? styles.active : null}>Credentials</p>
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink className={styles.anchorLink} offset={50} href='#footer'>
                        <p onClick={() => setMenu('footer')} className={menu === 'footer' ? styles.active : null}>Contact</p>
                    </AnchorLink>
                </li>
            </ul>
        </div>
     </header>
    );
}
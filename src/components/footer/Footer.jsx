import styles from './Footer.module.css';
import navStyle from '../header/Header.module.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState } from 'react';
import logo from '../../assets/logo.svg';
import curlyLeft from '../../assets/curly-left.png';
import curlyRight from '../../assets/curly-right.png';

export function Footer(){
        const [menu, setmenu] = useState('home');
    return (
        <>
            <span className={styles.line}></span>
            <div className={styles.mainContainer}>
                <div className={navStyle.navContainer}>
                        <ul className={styles.navMenu}>
                            <li><AnchorLink className={navStyle.anchorLink} offset={50} href='#home'><p onClick={() => setmenu('home')} className={menu === 'home' ? navStyle.active : null}>Home</p></AnchorLink></li>
                            <li><AnchorLink className={navStyle.anchorLink} offset={50} href='#about-me'><p onClick={() => setmenu('about')} className={menu === 'about' ? navStyle.active : null}>About me</p></AnchorLink></li>
                            <li><AnchorLink className={navStyle.anchorLink} offset={50} href='#portfolio'><p onClick={() => setmenu('portfolio')} className={menu === 'portfolio' ? navStyle.active : null}>Portfolio</p></AnchorLink></li>
                            <li><AnchorLink className={navStyle.anchorLink} offset={50} href='#'><p>Contact</p></AnchorLink></li>
                        </ul>
                 </div>
                <img style={{width:100}} src={logo} alt="logo" />
                <div className={styles.myInfo}>
                    <span style={{width:80, marginRight:'205'}}>My info:</span>
                    <img className={styles.braces} src={curlyLeft} alt="" />
                    <div>
                        <p>Email: tomasbanius@gmail.com</p>
                        <p>Phone number: 132545545</p>
                        <p>Socials:</p>
                    </div>
                    <img className={styles.braces} src={curlyRight} alt="" />
                </div>
            </div>
        
            

        </>
    );
}
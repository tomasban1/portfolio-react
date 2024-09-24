/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import styles from './Hero.module.css';
import logo from '../../assets/myLogo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

export function Hero ({setMenu}){
    return (
        <div id='home' className={styles.heroContainer}>
            <img style={{width:200, height:200, borderRadius: '100%'}} src={logo} alt="Profile pic" />
            <div className={styles.description}>
                <h1 style={{width:700, alignSelf: 'center'}}>I'am <span className={styles.name}>Tomas Banisevičius,</span> <br/> welcome to my portfolio page!</h1>
                <p>Here you can learn some basic things about me, what I am doing now, and what are my goals - expectations for the future, as well as look at some of my projects, that I have made so far! My info is at the end of the page, in case you want to contact me. Have a nice day!</p>
            </div>
            <div className={styles.btnContainer}>
                 <AnchorLink className={styles.anchorLink} offset={50} href='#footer'>
                    <p onClick={() => setMenu('footer')} className={styles.btnContactMe}>Contact me!</p>
                </AnchorLink>
                <a className={styles.btnResume} href='https://drive.google.com/file/d/1JATdEG9VABbRlJReByKnRTmUZ9IjMEPX/view?usp=sharing' target='_blank'>My resume..</a>
            </div>
        </div>
    );
}
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
                <h1 className={styles.descHeading}>I'am <span className={styles.name}>Tomas Banisevičius,</span> <br/> welcome to my portfolio page!</h1>
                <p>Here you can learn some basic things about me, and what are my goals - expectations for the future, as well as look at some of my projects, that I have made so far! My info is in my resume and at the end of the page, in case you want to contact me! Also, check out the fitness AI chat agent that I created, it's at the bottom right corner. Type your fitness goal, and it will help you, weather you want to loose weight or gain some muscle!💪</p>
            </div>
            <div className={styles.btnContainer}>
                 <AnchorLink className={styles.anchorLink} offset={50} href='#footer'>
                    <button onClick={() => setMenu('footer')} className={styles.button85} role="button">Contact Me!</button>
                </AnchorLink>
                <a className={styles.btnResume} href='https://drive.google.com/file/d/1Id8nAKuKKXXKBWOPTMPYn29w1ZWcooMT/view?usp=sharing' target='_blank'>My resume..</a>
            </div>
        </div>
    );
}


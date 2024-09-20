/* eslint-disable react/no-unescaped-entities */
import styles from './Hero.module.css';
import logo from '../../assets/myLogo.png'

export function Hero (){
    return (
        <div id='home' className={styles.heroContainer}>
            <img style={{width:200, height:200, borderRadius: '100%'}} src={logo} alt="Profile pic" />
            <div className={styles.description}>
                <h1 style={{width:700, alignSelf: 'center'}}>I'am <span className={styles.name}>Tomas Banisevičius,</span> <br/> welcome to my portfolio page!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis saepe quae rem blanditiis impedit excepturi deleniti, ut, in dolor quidem suscipit eos atque, libero dolore earum asperiores. Ea, architecto.</p>
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.btnContactMe}>Contact Me!</button>
                <button className={styles.btnResume}>My resume..</button>
            </div>
        </div>
    );
}
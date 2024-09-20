/* eslint-disable react/no-unescaped-entities */
 
import { aboutMeData } from '../data/aboutMeData';
import styles from './AboutMe.module.css';
import arrow from '../../assets/arrow2.png';


export function AboutMe(){
    return (
        <div id='about-me' className={styles.about}>
            <div className={styles.aboutMeSection}>
                <h1>About me</h1>
                <h2 style={{textAlign:"center", width:800}}>I'm an active person, I go to the gym regularly, I believe a healthy body is a healthy mind! Look at the cards below to find out more in detail😎</h2>
                <img src={arrow} alt="arrow" />
            </div>
            <div className={styles.section}>
                {aboutMeData.map((item, index) => 
                <div key={index} className={styles.card}>
                    <div className={`${styles.cardSide} ${styles.cardFront}`}>{item.cardName}</div>
                    <div className={`${styles.cardSide} ${styles.cardBack}`}>
                        <ul className={styles.list}>
                            <li>{item.item1}</li>
                            <li>{item.item2}</li>
                            <li>{item.item3}</li>
                            <li>{item.item4}</li>
                            <li>{item.item5}</li>
                        </ul>
                    </div>
                </div>)}
            </div>
        </div>
    );
}
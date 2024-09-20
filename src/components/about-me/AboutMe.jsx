 
import { aboutMeData } from '../data/aboutMeData';
import styles from './AboutMe.module.css';


export function AboutMe(){
    return (
        <div className={styles.about}>
            <div style={{marginTop:40}}>
                <h1>About me</h1>
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
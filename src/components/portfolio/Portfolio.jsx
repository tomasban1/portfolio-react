import styles from './Portfolio.module.css';
import { portfolioData } from '../data/portfolioData';

export function Portfolio(){
    return (
      <div className={styles.topContainer}>
        <div>
            <h1>Some of my projects:</h1>
        </div>
        <div className={styles.cardContainer}>
          {portfolioData.map((item, index) => 
              <div key={index} className={styles.card}>
                <img src={item.img} alt="pic" />
                <span className={styles.gameSummary}>{item.summary}</span>
                <ul className={styles.game}>
                  <li>{item.property1}</li>
                  <li>{item.property2}</li>
                  <a href={item.link} target='_blank'>Game link here..</a>
                </ul>
              </div>
          )}
        
        </div>
      </div>
    );
}
import styles from './Portfolio.module.css';

export function Portfolio(){
    return (
      <div className={styles.topContainer}>
        <div>
            <h1>Some of my projects:</h1>
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img style={{width:'100%', height:250}} src="/" alt="pic" />
            </div>
            <div className={styles.card}></div>
            <div className={styles.card}></div>
        </div>
      </div>
    );
}
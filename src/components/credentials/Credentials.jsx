import certificate from '../../assets/certificate.png';
import styles from './Credentials.module.css';

export function Credentials(){
    return (
        <>
            <div id='credentials' className={styles.credContainer}>
                 <h1>Credentials</h1>
                <img className={styles.credImg} src={certificate} alt="" />
            </div>
           
        </>
    );
}
import Link from "next/link";
import styles from "./components/Home.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.left}>
                    <div className={styles.circle}></div>
                </div>
                
                <div className={styles.center}></div>
                
                <div className={styles.right}></div>
            </div>
            
            
        </>
    );
}
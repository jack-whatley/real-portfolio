import Link from "next/link";
import Script from "next/script";
import styles from "./components/Home.module.css";

export default function Page() {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.left} id="left-div"></div>
                
                <div className={styles.center}></div>
                
                <div className={styles.right} id="right-div"></div>
            </div>
            
            <Script src="https://code.jquery.com/jquery-3.6.3.slim.min.js" strategy="afterInteractive"/>
            <Script src="/random.js"/>
        </>
    );
}
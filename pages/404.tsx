import styles from "./Components/FourOFour.module.css"
import Link from "next/link";
import Head from "next/head";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 Error</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            <div className={styles.center}>
                <div className={styles.titleCont}>
                    <h3 className={styles.four}>404</h3>
                    <h3 className={styles.fourText}>This URL doesn&apos;t exist.</h3>
                </div>
                <Link className={styles.return} href="/">
                    <div className={styles.returnCont}>
                        Home
                    </div>
                </Link>
            </div>
        </>
    )
}
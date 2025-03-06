import Head from "next/head";
import Background from "../components/Background";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>CyberGuard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Background />
      <Navbar />

      <section className={styles.hero}>
        <h1>
          <span>Protect what matters.</span>
        </h1>
        <h1 className={styles.subheading}>Stay safe, stay resilient.</h1>
        <button className={styles.homeBtn}>Learn More About Us!</button>
      </section>

      {/* Floating Icons */}
      <div className={`${styles.floatingIcon} ${styles.leftIcon}`}>
        {/* <img src="/news-icon.svg" alt="News" /> */}
      </div>
      <div className={`${styles.floatingIcon} ${styles.rightIcon}`}>
        {/* <img src="/chat-icon.svg" alt="Chat" /> */}
      </div>
    </>
  );
}

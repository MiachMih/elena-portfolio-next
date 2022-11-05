import Link from "next/link";
import styles from "./index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Elena Coach</title>
        <meta
          name="description"
          content="Providing quality coaching to help you choose your life"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        Choose your language
        <Link className={styles.btn} href="/ru">
          Русский
        </Link>
        <Link className={styles.btn} href="/en">
          English
        </Link>
      </div>
    </>
  );
}

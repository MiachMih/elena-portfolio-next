import Link from "next/link";
import styles from "./index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      Choose your language
      <Link className={styles.btn} href="/ru">
        Русский
      </Link>
      <Link className={styles.btn} href="/en">
        English
      </Link>
    </div>
  );
}

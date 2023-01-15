import { Rubik } from "@next/font/google";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const rubik = Rubik({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <div className={`${rubik.className} ${styles.header}`}>
        <div className={styles.logo}>
          <div className={styles.logo_decoration}></div>
          <Link href="/">
            <h2 className={styles.logo_image}>
              Home
            </h2>
          </Link>
        </div>
        <div className={styles.links}>
          <div className={styles.link_container}>
            <Link href="/projects" className={styles.header_link}>
              <h1>Projects</h1>
            </Link>
          </div>
          <div className={styles.link_container}>
            <Link href="/about" className={styles.header_link}>
              <h1>About</h1>
            </Link>
          </div>
          <div className={styles.link_container}>
            <Link href="/contact" className={styles.header_link}>
              <h1>Contact</h1>
            </Link>
          </div>
          <div className={styles.hamburger}></div>
        </div>
      </div>
    </>
  );
}

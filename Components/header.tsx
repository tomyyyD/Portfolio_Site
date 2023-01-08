import { Rubik } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const rubik = Rubik({ subsets: ["latin"] });

export default function Header() {
  return (
    <>
      <div className={`${rubik.className} ${styles.header}`}>
        <div className={styles.logo}>
          <a href="">
            <Image
              className={styles.logo_image}
              src="/Logo.svg"
              alt="my logo"
              width="70"
              height="60"
            ></Image>
          </a>
        </div>
        <div className={styles.links}>
          <Link href="/Projects" className={styles.header_link}>
            <h1>Projects</h1>
          </Link>
          <Link href="/about" className={styles.header_link}>
            <h1>About</h1>
          </Link>
          <Link href="/Contact" className={styles.header_link}>
            <h1>Contact</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

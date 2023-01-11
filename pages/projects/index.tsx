import { Rubik } from "@next/font/google";
import Head from "next/head";
import Header from "../../Components/header";
import generics from "../../styles/generics.module.css";
import styles from "../../styles/Home.module.css";

const rubik = Rubik({ subsets: ['latin'] })

// returns a random angle in [-4, 4) 
function randomAngle(): number {
  return Math.floor((Math.random() * 8) - 4);
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={`${styles.main} ${rubik.className}`}>
        <div className={styles.title_text}>
          <h1 className={styles.header_text}>Projects</h1>
          <div className={`${generics.main_green} ${styles.header_underline}`}></div>
        </div>
        <div className={styles.projects_list}>
          <div className={styles.project_left}>
            <div className={`${generics.ccw_1} ${generics.main_red} ${styles.project_container}`}>
              <h1>Scratch-112</h1>
              <ul>
                <li>A Block-Based programming language created in Python. Blocks use a drag and drop interface to create programs.</li>
                <li>An Imperative language that supports looping, conditional statements, functions, and recursion.</li>
                <li>Blocks are interpreted into Python and the Python is run to execute the program you create using the blocks.</li>
              </ul>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={`${generics.cw_1} ${generics.secondary_blue} ${styles.project_container}`}>
              <h1>Scratch-112</h1>
              <ul>
                <li>A Block-Based programming language created in Python. Blocks use a drag and drop interface to create programs.</li>
                <li>An Imperative language that supports looping, conditional statements, functions, and recursion.</li>
                <li>Blocks are interpreted into Python and the Python is run to execute the program you create using the blocks.</li>
              </ul>
            </div>
          </div>
          <div className={styles.project_left}>
            <div className={`${generics.cw_3} ${generics.main_green} ${styles.project_container}`}>
              <h1>Scratch-112</h1>
              <ul>
                <li>A Block-Based programming language created in Python. Blocks use a drag and drop interface to create programs.</li>
                <li>An Imperative language that supports looping, conditional statements, functions, and recursion.</li>
                <li>Blocks are interpreted into Python and the Python is run to execute the program you create using the blocks.</li>
              </ul>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={`${generics.ccw_3} ${generics.main_purple} ${styles.project_container}`}>
              <h1>Scratch-112</h1>
              <ul>
                <li>A Block-Based programming language created in Python. Blocks use a drag and drop interface to create programs.</li>
                <li>An Imperative language that supports looping, conditional statements, functions, and recursion.</li>
                <li>Blocks are interpreted into Python and the Python is run to execute the program you create using the blocks.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
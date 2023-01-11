//fonts
import { Rubik } from "@next/font/google";
//components
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import Header from "../../Components/header";
//syles
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
          <Link className={styles.project_left} href="/projects/scratch-112">
            <div className={`${generics.ccw_1} ${generics.main_red} ${styles.project_container}`}>
              <h1 className={styles.project_title}>Scratch-112</h1>
              <ul className={styles.project_summary}>
                <li>A Block-Based programming language created in Python. Blocks use a drag and drop interface to create programs.</li>
                <li>An Imperative language that supports looping, conditional statements, functions, and recursion.</li>
                <li>Blocks are interpreted into Python and the Python is run to execute the program you create using the blocks.</li>
              </ul>
              <div className={styles.screenshot_container}>
                <Image className={styles.screenshot} src="/screenshots/Scratch-112.1.png" alt="Scratch-112 GUI" width={600} height={450}></Image>
                <Image className={`${styles.screenshot} ${styles.screenshot_two}`} src="/screenshots/Scratch-112.2.png" alt="Scratch-112 GUI populated with blocks" width={600} height={450}></Image>
              </div>
            </div>
          </Link>
          <Link className={styles.project_right} href="/projects/pocketqube">
            <div className={`${generics.cw_1} ${generics.secondary_blue} ${styles.project_container}`}>
              <h1 className={styles.project_title}>PocketQube Satellite</h1>
              <ul className={styles.project_summary}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error ullam, ex voluptates pariatur velit ut, nesciunt blanditiis explicabo magnam aut fugit deleniti beatae repellendus sit enim in unde laborum.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime facere mollitia? Explicabo, quod doloremque placeat aliquid beatae obcaecati deserunt sunt quia at velit perspiciatis rerum numquam incidunt atque impedit!</li>
              </ul>
            </div>
          </Link>
          <Link className={styles.project_left} href="/projects/temponet">
            <div className={`${generics.cw_3} ${generics.main_green} ${styles.project_container}`}>
              <h1 className={styles.project_title}>TempoNet</h1>
              <ul className={styles.project_summary}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, consectetur. Cupiditate, velit. Eaque sit, vero est fuga aliquid deleniti explicabo accusantium eum praesentium aspernatur exercitationem repellat id sapiente aperiam quasi!</li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt accusantium impedit, vitae vero inventore rem excepturi quia odit ut sapiente aspernatur dolor, recusandae, consequatur cum ab reprehenderit illo quibusdam? Quo.</li>
              </ul>
            </div>
          </Link>
          <Link className={styles.project_right} href="projects/ojrtpac">
            <div className={`${generics.ccw_3} ${generics.main_purple} ${styles.project_container}`}>
              <h1 className={styles.project_title}>ojrtpac.com</h1>
              <ul className={styles.project_summary}>
                <li>A Block-Based programming language created in Python. Blocks use a drag and drop interface to create programs.</li>
                <li>An Imperative language that supports looping, conditional statements, functions, and recursion.</li>
                <li>Blocks are interpreted into Python and the Python is run to execute the program you create using the blocks.</li>
              </ul>
            </div>
          </Link>
          <Link className={styles.project_left} href="/projects/portfolio">
            <div className={`${generics.ccw_1} ${generics.main_red} ${styles.project_container}`}>
              <h1 className={styles.project_title}>This Website!</h1>
              <ul className={styles.project_summary}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod quasi sunt? Ipsum, impedit. Magni exercitationem obcaecati quasi autem eligendi itaque laboriosam assumenda amet natus perspiciatis molestiae nobis, consequuntur blanditiis?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet, labore consectetur blanditiis accusantium corrupti inventore molestiae adipisci soluta delectus error? Asperiores aliquid corrupti provident quasi officiis consequatur sit. Enim!</li>
              </ul>
              <div className={styles.screenshot_container}>
              </div>
            </div>
          </Link>
          <Link className={styles.project_right} href="/projects/chatroom-app">
            <div className={`${generics.cw_1} ${generics.main_blue} ${styles.project_container}`}>
              <h1 className={styles.project_title}>ChatRoom App</h1>
              <ul className={styles.project_summary}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod quasi sunt? Ipsum, impedit. Magni exercitationem obcaecati quasi autem eligendi itaque laboriosam assumenda amet natus perspiciatis molestiae nobis, consequuntur blanditiis?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet, labore consectetur blanditiis accusantium corrupti inventore molestiae adipisci soluta delectus error? Asperiores aliquid corrupti provident quasi officiis consequatur sit. Enim!</li>
              </ul>
              <div className={styles.screenshot_container}>
              </div>
            </div>
          </Link>
          <Link className={styles.project_left} href="/projects/twitch-bot">
            <div className={`${generics.ccw_1} ${generics.main_purple} ${styles.project_container}`}>
              <h1 className={styles.project_title}>Twitch-bot Maze</h1>
              <ul className={styles.project_summary}>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quod quasi sunt? Ipsum, impedit. Magni exercitationem obcaecati quasi autem eligendi itaque laboriosam assumenda amet natus perspiciatis molestiae nobis, consequuntur blanditiis?</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, eveniet, labore consectetur blanditiis accusantium corrupti inventore molestiae adipisci soluta delectus error? Asperiores aliquid corrupti provident quasi officiis consequatur sit. Enim!</li>
              </ul>
              <div className={styles.screenshot_container}>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </>
  )
}
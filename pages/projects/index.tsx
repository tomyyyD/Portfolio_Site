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
          <div className={styles.project_left}>
            <div className={`${generics.ccw_1} ${generics.main_red} ${styles.project_container}`}>
              <Link href="/projects/scratch-112">
                <h1 className={styles.project_title}>Scratch-112</h1>
                <ul className={styles.project_summary}>
                  <li>A Block-Based programming language created in Python. Blocks use a drag and drop interface to create programs.</li>
                  <li>An Imperative language that supports looping, conditional statements, functions, and recursion.</li>
                  <li>Blocks are interpreted into Python and the Python is run to execute the program you create using the blocks.</li>
                </ul>
                <div className={styles.screenshot_container}>
                  <Image priority className={styles.screenshot} src="/screenshots/Scratch-112.1.png" alt="Scratch-112 GUI" width={600} height={450}></Image>
                  <Image priority className={`${styles.screenshot} ${styles.screenshot_two}`} src="/screenshots/Scratch-112.2.png" alt="Scratch-112 GUI populated with blocks" width={600} height={450}></Image>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={`${generics.cw_1} ${generics.secondary_blue} ${styles.project_container}`}>
              <Link href="/projects/pocketqube">
                <h1 className={styles.project_title}>PocketQube Satellite</h1>
                <ul className={styles.project_summary}>
                  <li>I am an undergraduate research assistant on the PocketQube satelite project!</li>
                  <li>I am working in Carnegie Mellon University&apos;s Robotics Exploration Laboratory, RExLab for short.</li>
                  <li>I started working on this projects December 1st 2022, and, so far, I have made a logging system that recieves data from the satellite and logs the bytes in a file structure based on the time it was logged, which makes the data easy to retrieve and unpack!</li>
                </ul>
              </Link>
            </div>
          </div>
          <div className={styles.project_left}>
            <div className={`${generics.cw_1} ${generics.main_green} ${styles.project_container}`}>
              <Link href="/projects/temponet">
                <h1 className={styles.project_title}>TempoNet</h1>
                <ul className={styles.project_summary}>
                  <li>This is a currently in-developmet app designed to help runners find other runners in their location to run with.</li>
                  <li>The app will have a &quot;matching&quot; algorithm that uses factors such as zip code, average running pace, average running distance, average weekly mileage, gender, and preferred racing events.</li>
                  <li>It has a pleasing flat colored UI with friendly icons and a matte grey background.</li>
                </ul>
                <div className={styles.screenshot_container}>
                  <Image className={styles.phone_screenshot} priority src="/screenshots/temponet.1.PNG" alt="screenshot of TempoNet login page" width={300} height={650}></Image>
                  <Image className={styles.phone_screenshot} priority src="/screenshots/temponet.5.PNG" alt="TempoNet Search Screen" width={300} height={650}></Image>
                  <Image className={styles.phone_screenshot} priority src="/screenshots/temponet.4.PNG" alt="TempoNet Search Screen" width={300} height={650}></Image>
                  <Image className={styles.phone_screenshot} priority src="/screenshots/temponet.2.PNG" alt="TempoNet Registration Screen" width={300} height={650}></Image>
                  <Image className={styles.phone_screenshot} priority src="/screenshots/temponet.3.PNG" alt="TempoNet Search Screen" width={300} height={650}></Image>
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={`${generics.cw_1} ${generics.main_purple} ${styles.project_container}`}>
              <Link href="/projects/ojrtpac">
                <h1 className={styles.project_title}>ojrtpac.com</h1>
                <ul className={styles.project_summary}>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error ullam, ex voluptates pariatur velit ut, nesciunt blanditiis explicabo magnam aut fugit deleniti beatae repellendus sit enim in unde laborum.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime facere mollitia? Explicabo, quod doloremque placeat aliquid beatae obcaecati deserunt sunt quia at velit perspiciatis rerum numquam incidunt atque impedit!</li>
                </ul>
              </Link>
            </div>
          </div>
          <div className={styles.project_left}>
            <div className={`${generics.cw_1} ${generics.main_red} ${styles.project_container}`}>
              <Link href="/projects/portfolio">
                <h1 className={styles.project_title}>This Website</h1>
                <ul className={styles.project_summary}>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error ullam, ex voluptates pariatur velit ut, nesciunt blanditiis explicabo magnam aut fugit deleniti beatae repellendus sit enim in unde laborum.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime facere mollitia? Explicabo, quod doloremque placeat aliquid beatae obcaecati deserunt sunt quia at velit perspiciatis rerum numquam incidunt atque impedit!</li>
                </ul>
              </Link>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={`${generics.cw_1} ${generics.main_blue} ${styles.project_container}`}>
              <Link href="/projects/chatroom-app">
                <h1 className={styles.project_title}>ChatRoom App</h1>
                <ul className={styles.project_summary}>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error ullam, ex voluptates pariatur velit ut, nesciunt blanditiis explicabo magnam aut fugit deleniti beatae repellendus sit enim in unde laborum.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime facere mollitia? Explicabo, quod doloremque placeat aliquid beatae obcaecati deserunt sunt quia at velit perspiciatis rerum numquam incidunt atque impedit!</li>
                </ul>
              </Link>
            </div>
          </div>
          <div className={styles.project_left}>
            <div className={`${generics.cw_1} ${generics.main_purple} ${styles.project_container}`}>
              <Link href="/projects/twitchbot">
                <h1 className={styles.project_title}>Twitchbot Game</h1>
                <ul className={styles.project_summary}>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus error ullam, ex voluptates pariatur velit ut, nesciunt blanditiis explicabo magnam aut fugit deleniti beatae repellendus sit enim in unde laborum.</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam maxime facere mollitia? Explicabo, quod doloremque placeat aliquid beatae obcaecati deserunt sunt quia at velit perspiciatis rerum numquam incidunt atque impedit!</li>
                </ul>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
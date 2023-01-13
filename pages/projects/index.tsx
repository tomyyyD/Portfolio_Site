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
              <h1 className={styles.project_title}>Scratch-112</h1>
              <ul className={styles.project_summary}>
                <li>A Block-Based programming language created in Python. Blocks use a drag and drop interface to create programs.</li>
                <li>An Imperative language that supports looping, conditional statements, functions, and recursion.</li>
                <li>Blocks are interpreted into Python and the Python is run to execute the program you create using the blocks.</li>
              </ul>
              <div className={styles.screenshot_container}>
                <Image priority className={styles.screenshot} src="/screenshots/scratch112/Scratch-112.1.png" alt="Scratch-112 GUI" width={600} height={450}></Image>
                <Image priority className={`${styles.screenshot} ${styles.screenshot_two}`} src="/screenshots/scratch112/Scratch-112.2.png" alt="Scratch-112 GUI populated with blocks" width={600} height={450}></Image>
              </div>
              <Link href="/projects/scratch-112">
              </Link>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={`${generics.cw_1} ${generics.secondary_blue} ${styles.project_container}`}>
              <h1 className={styles.project_title}>PocketQube Satellite</h1>
              <ul className={styles.project_summary}>
                <li>I am an undergraduate research assistant on the PocketQube satelite project!</li>
                <li>I am working in Carnegie Mellon University&apos;s Robotics Exploration Laboratory, RExLab for short.</li>
                <li>I started working on this projects December 1st 2022, and, so far, I have made a logging system that recieves data from the satellite and logs the bytes in a file structure based on the time it was logged, which makes the data easy to retrieve and unpack!</li>
              </ul>
              <Link href="/projects/pocketqube">
              </Link>
            </div>
          </div>
          <div className={styles.project_left}>
            <div className={`${generics.ccw_2} ${generics.main_green} ${styles.project_container}`}>
              <h1 className={styles.project_title}>TempoNet</h1>
              <ul className={styles.project_summary}>
                <li>This is a currently in-developmet app designed to help runners find other runners in their location to run with.</li>
                <li>The app will have a &quot;matching&quot; algorithm that uses factors such as zip code, average running pace, average running distance, average weekly mileage, gender, and preferred racing events.</li>
                <li>It has a pleasing flat colored UI with friendly icons and a matte grey background.</li>
              </ul>
              <div className={styles.screenshot_container}>
                <Image className={styles.phone_screenshot} priority src="/screenshots/temponet/temponet.1.PNG" alt="screenshot of TempoNet login page" width={300} height={650}></Image>
                <Image className={styles.phone_screenshot} priority src="/screenshots/temponet/temponet.5.PNG" alt="TempoNet Search Screen" width={300} height={650}></Image>
                <Image className={styles.phone_screenshot} priority src="/screenshots/temponet/temponet.4.PNG" alt="TempoNet Search Screen" width={300} height={650}></Image>
                <Image className={styles.phone_screenshot} priority src="/screenshots/temponet/temponet.2.PNG" alt="TempoNet Registration Screen" width={300} height={650}></Image>
                <Image className={styles.phone_screenshot} priority src="/screenshots/temponet/temponet.3.PNG" alt="TempoNet Search Screen" width={300} height={650}></Image>
              </div>
              <Link href="/projects/temponet">
              </Link>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={`${generics.cw_1} ${generics.main_purple} ${styles.project_container}`}>
              <h1 className={styles.project_title}>ojrtpac.com</h1>
              <ul className={styles.project_summary}>
                <li>A website built with 2 friends for a high school club I was the president of. The club was focused on providing students and staff with technology help via a remote and in-person help desk. </li>
                <li>This website was built with Python Django, normal HTML, CSS, JS, with an SQLite database and deployed on Heroku.</li>
                <li>For this website we built a proprietary ticketing system, our own administrator portal to manage tickets, as well as the frontend that users see.</li>
              </ul>
              <div className={styles.screenshot_container}>
                <Image priority className={styles.screenshot} src="/screenshots/ojrtpac/ojrtpac.1.png" alt="ojrtpac home page" width={800} height={600}></Image>
                <Image priority className={styles.screenshot} src="/screenshots/ojrtpac/ojrtpac.2.png" alt="ojrtpac home page" width={800} height={600}></Image>
                <Image priority className={styles.screenshot} src="/screenshots/ojrtpac/ojrtpac.3.png" alt="ojrtpac home page" width={800} height={600}></Image>
              </div>
              <Link href="/projects/ojrtpac">
              </Link>
            </div>
          </div>
          <div className={styles.project_left}>
            <div className={`${generics.cw_3} ${generics.main_red} ${styles.project_container}`}>
              <h1 className={styles.project_title}>This Website</h1>
              <ul className={styles.project_summary}>
                <li>This website is rather straightforward as websites go. There is no need for a database or fancy development.</li>
                <li>This website is designed to showcase various projects that I have worked on. It is also to showcase my creative side and the designs I can come up with for websites and applications.</li>
                <li>It is Built with NextJS, ReactJS (typescript), and CSS</li>
              </ul>
              <div className={styles.screenshot_container}>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <h2 style={{ padding: "3rem", width: "60%", textAlign: "center" }}>No need for screenshots here! Go explore around the site to see how it looks!</h2>
                </div>
              </div>
              <Link href="/projects/portfolio">
              </Link>
            </div>
          </div>
          <div className={styles.project_right}>
            <div className={`${generics.ccw_1} ${generics.main_blue} ${styles.project_container}`}>
              <h1 className={styles.project_title}>ChatRoom App</h1>
              <ul className={styles.project_summary}>
                <li>An app written in React Native with Expo and Firebase for iOS.</li>
                <li>It usees the Firebase Realtime database for communicating in real time with friends or anyone else in your chatroom.</li>
                <li>Any user had the ability to create chatrooms and others users can access those chatrooms</li>
              </ul>
              <Link href="/projects/chatroom-app">
              </Link>
            </div>
          </div>
          <div className={styles.project_left}>
            <div className={`${generics.cw_1} ${generics.main_purple} ${styles.project_container}`}>
              <h1 className={styles.project_title}>Twitchbot Game</h1>
              <ul className={styles.project_summary}>
                <li>A bot for Twitch written in Python and using the Twitch API to access chat data.</li>
                <li>The bot accesses messages that users put in the chat to control the character within the game. Users can type up, down, left, right to move the red square (character) through a maze and get to the finishing square.</li>
                <li>It uses the built in Python Socket libraries to get data from Twitch and send it to the maze game written with Pygame.</li>
              </ul>
              <Link href="/projects/twitchbot">
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
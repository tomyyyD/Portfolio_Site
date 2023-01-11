import { Rubik } from '@next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../Components/footer'
import Header from '../Components/header'
import styles from '../styles/Home.module.css'

const rubik = Rubik({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="made with create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main className={`${styles.main} ${rubik.className}`}>
        <div className={styles.title_container}>
          <div className={styles.title_text}>
            <div className={styles.title_decoration_1}></div>
            <div className={styles.title_decoration_2}></div>
            <h1>Thomas Damiani</h1>
            <h4>Software Engineer</h4>
          </div>
          <div className={styles.title_sidebar}>
            <div className={`${styles.grid_item} ${styles.grid_tl}`}>
              <h2>Me</h2>
              <ul className={styles.grid_content}>
                <li><p>CS student at Carnegie Mellon University</p></li>
                <li><p>undergraduate research assistant at CMU RExLab</p></li>
                <li>3-season Student-Athlete</li>
              </ul>
              <Link href="/about">
                <div>
                  <p>Learn More</p>
                  <hr></hr>
                </div>
              </Link>
            </div>
            <div className={`${styles.grid_item} ${styles.grid_tr}`}>
              <h2>Projects</h2>
              <ul className={styles.grid_content}>
                <li>Scratch112 - my own block programming language.</li>
                <li>TempoNet - a mobile app to connect runners</li>
                <li>And many more!</li>
              </ul>
              <Link href="/projects">
                <div>
                  <p>Learn More</p>
                  <hr></hr>
                </div>
              </Link>
            </div>
            <div className={`${styles.grid_item} ${styles.grid_bl}`}>
              <h2>Get In Touch</h2>
              <ul className={styles.grid_content}>
                <li><p>If you are interested in working with me, let me know!</p></li>
              </ul>
              <Link href="/contact">
                <div>
                  <p>Learn More</p>
                  <hr></hr>
                </div>
              </Link>
            </div>
            <div className={`${styles.grid_item} ${styles.grid_br}`}>
              <h2>More Projects!</h2>
              <ul className={styles.grid_content}>
                <li>OJR TPAC site - a website for a technology help club.</li>
                <li>Physics Simulation - a site simulating round particles.</li>
              </ul>
              <Link href="/projects">
                <div>
                  <p>Learn More</p>
                  <hr></hr>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}

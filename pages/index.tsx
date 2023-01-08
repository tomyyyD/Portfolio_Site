import { Rubik } from '@next/font/google'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
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
      <main className={styles.main}>
        <div className={styles.title_content}>
          <h1 className={rubik.className}>Thomas Damiani</h1>
        </div>
        <div className={styles.main_content}>
          <h1>projects</h1>
        </div>
      </main>
    </>
  )
}
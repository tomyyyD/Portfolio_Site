//Fonts
import { Rubik } from "@next/font/google"
//components
import Head from "next/head"
import Header from "../Components/header"
import Title from "../Components/title"
//styles
import styles from "../styles/Home.module.css"

const rubik = Rubik({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>

      </Head>
      <Header />
      <main className={`${styles.main} ${rubik.className}`}>
        <Title title="Contact Me!" color="--secondary-blue" />
      </main>
    </>
  )
}
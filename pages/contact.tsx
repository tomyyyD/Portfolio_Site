//components
import Head from "next/head"
import Title from "../Components/title"
//styles
import generics from "../styles/generics.module.css"
import styles from "../styles/Home.module.css"

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <Title title="Contact Me!" color={generics.secondary_blue} />
      <div className={`${styles.about_text} ${styles.project_left}`}>
        <div className={`${generics.main_green} ${styles.project_container}`}>
          <p>If you&apos;d like to get in contact with me send me an email at thomas64d.7@gmail.com </p>
        </div>
      </div>
    </>
  )
}
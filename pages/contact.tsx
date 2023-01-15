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
    </>
  )
}
// Fonts
import { Rubik } from "@next/font/google"
// Components
import Head from "next/head"
import Link from "next/link"
import Header from "../Components/header"
import Title from "../Components/title"
// styles
import generics from "../styles/generics.module.css"
import styles from "../styles/Home.module.css"

const rubik = Rubik({ subsets: ['latin'] })

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.io"></link>
			</Head>
			<Header></Header>
			<main className={`${styles.main} ${rubik.className}`}>
				<Title title="About" color="--main-blue"></Title>
			</main>
		</>
	)
}
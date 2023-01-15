// Components
import Head from "next/head"
import Title from "../Components/title"
// styles
import generics from "../styles/generics.module.css"
import styles from "../styles/Home.module.css"

export default function About() {
	return (
		<>
			<Head>
				<title>About</title>
				<link rel="icon" href="/favicon.ico"></link>
			</Head>
			<Title title="About" color={generics.main_blue} />
		</>
	)
}
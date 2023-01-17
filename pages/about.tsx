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
			<div className={styles.projects_list}>
				<div className={`${generics.secondary_blue} ${styles.about_container}`}>
					<h1 className={styles.project_title}>Who am I?</h1>
					<div className={styles.about_text}>
						<p>
							I am a student in the School of Computer Science at Carnegie Mellon University! I am a Computer Science major
							and I am considering my concentration options at the moment, but it will be Algorithms and Complexity, Systems,
							or Machine Learning.
						</p>
						<p>
							Before studying at CMU, I went to Owen J Roberts High school, a public high school in Pottstown, PA, which is a
							small town that straddles the border between Philadelphia suburbs and farm country.
						</p>
					</div>
					<p></p>
				</div>
				<div className={`${generics.main_red} ${styles.about_container}`}>
					<h1 className={styles.project_title}>What do I do?</h1>
					<div className={styles.about_text}>
						<p>
							I love computers. I grew up always curious and always wanting to understand everything that was in front of me.
							It was easy for most things, you could just take it apart and see what was inside, but with computers it was very
							different. You could never see what was actually happening and that drove me to try and learn how computers worked.
							I started trying to learn how to code in 6th grade on Khan Academy learning some basic JavaScript, which wasn&apos;t
							really JavaScript at all in retrospect, and I loved it.
						</p>
						<p>
							From there, I learned more and more every year and built projects for myself along the way. Almost all of these
							projects can be found on my github <a style={{ textDecoration: "underline" }} href="https://www.github.com/tomyyyd"> here</a>.
							Now, I spend my time learning as much as I can about the field of computer science in school while building projects
							for myself on the side. I have experience building websites like this as well as being the full-stack dev for other
							sites built with Django.
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
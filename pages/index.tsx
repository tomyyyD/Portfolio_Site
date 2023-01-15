import Head from 'next/head'
import Grid_Tile from '../Components/grid_tile'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Thomas Damiani</title>
        <meta name="description" content="made with create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title_container}>
        <div className={styles.title_text}>
          <div className={styles.title_decoration_1}></div>
          <div className={styles.title_decoration_2}></div>
          <h1>Thomas Damiani</h1>
          <h4>Software Engineer</h4>
        </div>
        <div className={styles.title_sidebar}>
          <Grid_Tile
            title='Me'
            elements={['CS student at Carnegie Mellon University',
              'undergraduate research assistant at CMU RExLab',
              '3-season Student-Athlete']}
            route='about'
            position={styles.grid_tl}
          />
          <Grid_Tile
            title="Projects"
            elements={['Scratch112 - my own block programming language',
              'TempoNet - a mobile app to connect runners',
              'TwitchBot - a game that Twitch Chat can play']}
            route="projects"
            position={styles.grid_tr}
          />
          <Grid_Tile
            title="Get In Touch"
            elements={['If you are interested in working with me, let me know!']}
            route="contact"
            position={styles.grid_bl}
          />
          <Grid_Tile
            title='More Projects!'
            elements={['OJR TPAC site - a website for a technology help club',
              'Physics Simulation - a site simulating round particles']}
            route='projects'
            position={styles.grid_br}
          />
        </div>
      </div>
    </>
  )
}

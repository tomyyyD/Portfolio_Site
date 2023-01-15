import { Rubik } from '@next/font/google'
import type { AppProps } from 'next/app'
import Header from '../Components/header'
import '../styles/globals.css'
import styles from '../styles/Home.module.css'

const rubik = Rubik({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className={`${styles.main} ${rubik.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

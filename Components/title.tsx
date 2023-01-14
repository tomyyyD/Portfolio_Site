import styles from "../styles/Home.module.css"

interface title {
  title: string,
  color: string,
}

export default function Title(props: title) {
  return (
    <div className={styles.title_text}>
      <h1 className={styles.header_text}>{props.title}</h1>
      <div className={styles.header_underline} style={{ backgroundColor: `var(${props.color})` }}></div>
    </div>
  )
}
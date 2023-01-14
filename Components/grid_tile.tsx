import Link from "next/link";
import styles from "../styles/Home.module.css";

interface tile_content {
  title: string,
  elements: Array<string>,
  route: string,
  position: string,
}

export default function Grid_Tile(props: tile_content) {
  return (
    <>
      <div className={`${styles.grid_item} ${props.position}`}>
        <h2>Me</h2>
        <ul className={styles.grid_content}>
          {props.elements.map((element, index) => (
            <li key={index}><p>{element}</p></li>
          ))}
        </ul>
        <Link href={`/${props.route}`}>
          <div>
            <p>Learn More</p>
            <hr></hr>
          </div>
        </Link>
      </div>
    </>
  )
}
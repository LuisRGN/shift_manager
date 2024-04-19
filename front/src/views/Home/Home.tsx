import SliceImg from "../../components/Slide/SliceImg";
import { Games } from "../../components/Games/Games";
import styles from "./Home.module.css"

const Home = () => {
return (
    <>
    <SliceImg/>
    <h1 className={styles.main}>LISTA DE JUEGOS</h1>
    <Games/>
    </>
)
}

export default Home 
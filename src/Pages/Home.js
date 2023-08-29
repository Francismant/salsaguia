import Header from "../assets/components/Header"
import styles from './Home.module.scss'
import photoProfil from "../assets/images/photo profil (1).png"

function Home() {
  return (
    <>
    <Header/>
    <div className={styles.backgroundHome}>
        <section className={styles.block}>
            <div className="d-flex justify-content-start gap20 center">
            <img src={photoProfil} alt="" />
            <div className="tac d-flex flex-column gap2">
            <h2 className="FontsizetitreSection mt20">Présentation</h2>
            <div className="d-flex  flex-column gap1">
            <p>Je m’appelle Francis Mant.</p>
            <p>Passionné de danses latine, j’ai débuté la salsa en 2003.
</p>
            </div>
            </div>
            </div>
        </section>
    </div>
    </>
  )
}

export default Home
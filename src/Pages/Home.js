import Header from "../assets/components/Header"
import styles from './Home.module.scss'
import photoProfil from "../assets/images/photo profil (1).png"

function Home() {
  return (
    <>
      <div className={styles.backgroundHome}>
        <Header />
        <section className={styles.block}>
          <div className="df jcs gap15 center pt30">
            <img src={photoProfil} alt="" />
            <div className="tac df fc gap2 mt20">
              <h2 className="FontsizetitreSection mt20">Présentation</h2>
              <div className="df fc gap1">
                <p>Je m’appelle Francis Mant.</p>
                <p>Passionné de danses latine, j’ai débuté la salsa en 2003.
                </p>
              </div>
            </div>
          </div>
          <p className={styles.textContentHome}>Très rapidement je me suis fait remarqué par la qualité de mon guidage (d’où le nom de mon site) et j’ai intégré
            une association en tantque taxi danseur. J’ai participé à de nombreux festivals qui m’ont permi de me
            perfectionner en salsa mais aussi en Bachata etKizomba pour atteindre mon objectif qui était celui de pouvoir
            enseigner.
            Diplômé du titre de professeur de danse, de l’école de danses latines et tropical de Paris, je donne régulièrement
            des cours collectifs avant les soirées, dans de nombreuses festivités latines du Nord.
            Je propose des cours personnalisés et en groupe pour tous niveaux (débutants, intermédiaire ou même
            avancé)
            Je vous aiderai à prendre confiance en vous, je vous ferai travailler la musicalité et vous enseignerai de
            nombreux pas de danse et enchainements que vous parviendrez à refaire aisément en soirée.</p>
          <p className={styles.textContentHome}>La danse est une activité qui offre une combinaison unique d'énergie, d'interaction sociale, de coordination,
            d'expressivité, de condition physique et d'ouverture culturelle. Elle procure à la fois du plaisir, de la créativité et de
            nombreux bienfaits pour le corps et l'esprit.</p>
          <div className="mt20 df fc jcc aic gap1">
            <p>Voici ce que je vous propose au travers de mes cours :</p>
            <ul className="tac">
              <li>Travail des pas de base</li>
              <li>Enchainements</li>
              <li>Guidage</li>
              <li>Coordination</li>
              <li>Musicalité</li>
              <li>Ouverture de bal (mariage)</li>
            </ul>
            <p>N’hésitez plus et venez réserver votre cours de danse*</p>
          </div>
          <button className={styles.btnResaCours}>Réservation cours</button>
        </section>
      </div>
    </>
  )
}

export default Home
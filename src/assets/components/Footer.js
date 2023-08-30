import fb from "../images/facebook.png"
import insta from "../images/ri_instagram-fill.png"
import twitter from "../images/skill-icons_twitter.png"
import styles from "./Footer.module.scss"

function Footer() {
    return (
        <footer className="colorHeaderFooter">
            <div className="df fr jcc aic gap5">
                <a href=""><img className={styles.sizeLogo} src={fb} alt="logo de facebook" /></a>
                <a href=""><img className={styles.sizeLogoInsta} src={insta} alt="logo de instagram" /></a>
                <a href=""><img className={styles.sizeLogo} src={twitter} alt="logo de twitter" /></a>
            </div>
            <div>
                <p>SalsaGuia | Copyright©2023 |Tous droits réservés  -  Mentions légales </p>
            </div>
        </footer>
    )
}

export default Footer
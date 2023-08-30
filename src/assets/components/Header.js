import logo from "../images/Logo_Salsa 6.png";
import iconConnexion from "../icones/mingcute_user-4-line.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="colorHeader df fc gap2">
      <div className="topHeader df aic jca">
        <img src={logo} alt="image représentant 2 danseurs" />
        <div className="df fc aic jce">
          <h1 className="textFamilyHeader">
            SalsaGuia...Cours particuliers et collectifs
          </h1>
          <p className="textFamilyHeader">(salsa, bachata,kizomba)</p>
        </div>
        <img src={iconConnexion} alt="icone de profil pour se connecter" />
      </div>
      <Navbar />
    </header>
  );
}

export default Header;

import logo from "../images/Logo_Salsa 6.png";
import iconConnexion from "../icones/mingcute_user-4-line.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="colorHeader d-flex flex-column gap2 mt20">
      <div className="topHeader d-flex align-items-center justify-content-around">
        <img src={logo} alt="image représentant 2 danseurs" />
        <div className="d-flex flex-column align-items-center justify-content-end">
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

import './MenuLeft.scss'
import icone01 from './icone01.png'
import icone02 from './icone02.png'
import icone03 from './icone03.png'
import icone04 from './icone04.png'


function MenuLeft() {

    return (
        <div className="menu-left">
            <img className="icone-menu-left" src={icone01} alt="pictogramme en position tailleur"/>
            <img className="icone-menu-left" src={icone02} alt="pictogramme cycliste"/>
            <img className="icone-menu-left" src={icone03} alt="pictogramme nageur"/>
            <img className="icone-menu-left" src={icone04} alt="pictogramme d'une haltère"/>
            <p className="copy-right">Copiryght, SportSee 2020</p>
        </div>
    )
}
export default MenuLeft
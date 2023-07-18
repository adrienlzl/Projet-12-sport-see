import React from 'react';
import './Header.scss'
import logoSportSee from './sportSeeLogo.png'
import { NavLink } from 'react-router-dom';


function Header() {

    return (
     <nav className="header-nav">
         <img className="logo-header" src={logoSportSee} alt="Logo Sport See"/>
         <NavLink exact={true.toString()} to="/">Accueil</NavLink>
         <NavLink exact={true.toString()} to="/Profile">Profil</NavLink>
         <NavLink exact={true.toString()} to="/Reglages">Réglages</NavLink>
         <NavLink exact={true.toString()} to="/Community">Communauté</NavLink>
     </nav>
    );
}
    export default Header;


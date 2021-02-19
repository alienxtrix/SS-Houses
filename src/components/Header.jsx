import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/static/logo_sshouses.png";
import "../assets/styles/components/header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={Logo} alt="Logo SS Houses" />

      <div className="header__menu">
        {/* <div className="header__menu--profile">
          <img alt="" />
        </div> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <a href="/">Registrarse</a>
          </li>
          <li>
            <Link to="/login">Iniciar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

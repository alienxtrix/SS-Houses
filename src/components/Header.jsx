import React from "react";
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
          <li>
            <a href="/">Registrarse</a>
          </li>
          <li>
            <a href="/">Iniciar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;

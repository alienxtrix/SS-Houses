import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/static/logo_sshouses.png";
import "../assets/styles/components/header.scss";

function Header({ isLogin }) {
  return (
    <header className="header">
      <img className="header__img" src={Logo} alt="Logo SS Houses" />

      <div className="header__menu">
        {/* <div classNameName="header__menu--profile">
          <img alt="" />
        </div> */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          {isLogin ? (
            <>
              <li>
                <Link to="/register">Registrarse</Link>
              </li>
              <li>
                <Link to="/login">Iniciar Sesión</Link>
              </li>
            </>
          ) : (
            <li>
              <div className="dropdown">
                <a className="dropbtn">Usuario/Vendedor</a>
                <div className="dropdown-content">
                  <Link to="/newHouse">Agregar nueva casa</Link>
                  <Link to="/detailHouse">Editar casa</Link>
                  <a href="">Editar información</a>
                  <a href="">Ver mi lista de casas</a>
                  <Link to="/login">Cerrar Sesión</Link>
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
}

export default Header;

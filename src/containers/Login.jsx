import React from "react";
import LoginButton from "../components/LoginButton";
import Header from "../components/Header";
function Login() {
  return (
    <>
      <Header isLogin />
      <div className="Login__container">
        <p className="Login__title">Iniciar Sesión</p>
        <div className="Login__mailCont">
          <p className="Login__emailText">Email</p>
          <input type="text" id="lmail" className="Login__email" />
        </div>
        <div className="Login__passCont">
          <p className="Login__passwordText">Password</p>
          <input type="password" id="lpass" className="Login__password" />
        </div>
        <div className="Login__buttons">
          <div>
            <button className="Login__btnCancelar">Cancelar</button>
          </div>
          <div>
            <LoginButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;

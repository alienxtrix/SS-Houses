import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../assets/styles/components/Login.scss";

const LoginButton = () =>{
    const { loginWithRedirect } = useAuth0();

    return (
        <button className="Login__btnIniciar" onClick = {() => loginWithRedirect()}>
            Iniciar
        </button>
    )
}

export default LoginButton
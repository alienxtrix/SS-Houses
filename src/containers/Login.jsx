import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
function Login() {
  // const { loginWithRedirect } = useAuth0();

  return (
    <>
      <Header isLogin />
      <button onClick={() => loginWithRedirect()}>
        <Link to="/">Log In</Link>
      </button>
    </>
  );
}

export default Login;

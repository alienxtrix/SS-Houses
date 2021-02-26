import React from "react";
import Logo from "../assets/static/logo_sshouses.png";
import Robot from "../assets/static/Not_Found_Robot.png";
import Z1 from "../assets/static/z1.png";
import Z2 from "../assets/static/z2.png";
import Z3 from "../assets/static/z3.png";
import "../assets/styles/components/NotFound.scss";
import Header from "../components/Header";

function NotFound() {
  return (
    <>
      <Header />
      <div className="notfound__container">
        <div className="notfound__Zs">
          <img className="notfound__Z1" src={Z1} alt="zzz" />
          <img className="notfound__Z2" src={Z2} alt="zzz" />
          <img className="notfound__Z3" src={Z3} alt="zzz" />
        </div>
        <img className="notfound__robot" src={Robot} alt="Robot not found" />
        <div className="notfound__p1">Site Not Found</div>
        <div className="notfound__p2">
          Well this is akward. The site you are looking for is not here.
        </div>
        <img className="notfound__img" src={Logo} alt="Logo SS Houses" />
      </div>
    </>
  );
}

export default NotFound;

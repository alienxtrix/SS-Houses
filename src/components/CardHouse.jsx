import React from "react";
import houseImg from "../assets/static/images.jpeg";

function CardHouse() {
  return (
    <div>
      <img src={houseImg} alt="" />
      <div>
        <h3>Ciudad, state</h3>
        <h4>date</h4>
      </div>
    </div>
  );
}

export default CardHouse;

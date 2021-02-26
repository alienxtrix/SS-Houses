import React from "react";
import Header from "../components/Header";
import "../assets/styles/containers/detailHouse.scss";
function DetailHouse() {
  return (
    <>
      <Header></Header>
      <section className="container__detailHouse">
        <div className="left-column">
          <img data-image="black" src="images/black.png" alt="" />
          <img data-image="blue" src="images/blue.png" alt="" />
          <img
            data-image="red"
            className="active"
            src="images/red.png"
            alt=""
          />
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>Headphones</span>
            <h1>Beats EP</h1>
            <p>
              The preferred choice of a vast range of acclaimed DJs. Punchy,
              bass-focused sound and high isolation. Sturdy headband and on-ear
              cushions suitable for live performance
            </p>
          </div>

          <div className="product-configuration">
            <div className="product-color">
              <span>Color</span>

              <div className="color-choose">
                <div>
                  <input
                    data-image="red"
                    type="radio"
                    id="red"
                    name="color"
                    value="red"
                    checked
                  />
                  <label for="red">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    data-image="blue"
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                  />
                  <label for="blue">
                    <span></span>
                  </label>
                </div>
                <div>
                  <input
                    data-image="black"
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                  />
                  <label for="black">
                    <span></span>
                  </label>
                </div>
              </div>
            </div>

            <div className="cable-config">
              <span>Cable configuration</span>

              <div className="cable-choose">
                <button>Straight</button>
                <button>Coiled</button>
                <button>Long-coiled</button>
              </div>

              <a href="#">How to configurate your headphones</a>
            </div>
          </div>

          <div className="product-price">
            <span>148$</span>
            <a href="#" className="cart-btn">
              Add to cart
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailHouse;

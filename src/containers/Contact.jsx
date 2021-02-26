import React from "react";
import Header from "../components/Header";
function Contact() {
  return (
    <>
      <Header></Header>
      <section class="team container">
        <header class="team__head">
          <h1>Quienes somos</h1>
        </header>
        <div class="team__who">
          <div class="light-side">
            <h2>Ligth Side</h2>
            <div class="team__who--image"></div>
          </div>
          <div class="dark-side">
            <h2>Dark Side</h2>
            <div class="team__who--image"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

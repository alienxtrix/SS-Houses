import React from "react";
import "../assets/styles/components/search.scss";

function Search() {
  return (
    <section className="main">
      <h2 className="main__title">¿Qué lugar buscas casa?</h2>
      <input type="text" className="main__input" placeholder="Buscar..." />
    </section>
  );
}

export default Search;

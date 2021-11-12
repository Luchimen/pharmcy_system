import React from "react";

export const Category = () => {
  return (
    <section className="category container">
      <h2 className="category__title">Categorias</h2>
      <div className="category__list">
        <a href="#">Antibioticos</a>
        <a href="#">AntiHistaminicos</a>
        <a href="#">AntiInflamatorios</a>
        <a href="#">Analgesicos</a>
        {/* <li className="category__listitem">
          <a href="#">Antibioticos</a>
        </li>
        <li className="category__listitem">
          <a href="#">AntiHistaminicos</a>
        </li>
        <li className="category__listitem">
          <a href="#">AntiInflamatorios</a>
        </li>
        <li className="category__listitem">
          <a href="#">Analgesicos</a>
        </li> */}
      </div>
    </section>
  );
};

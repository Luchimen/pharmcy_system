import React from "react";
import { Link } from "react-router-dom";

export const Category = () => {
  return (
    <section className="category container">
      <h2 className="category__title">Categorias</h2>
      <div className="category__list">
        <Link to="/category/antibioticos">Antibioticos</Link>
        <Link to="/category/anti-histaminicos">AntiHistaminicos</Link>
        <Link to="/category/anti-inflamatorios">AntiInflamatorios</Link>
        <Link to="/category/analgesicos">Analgesicos</Link>
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

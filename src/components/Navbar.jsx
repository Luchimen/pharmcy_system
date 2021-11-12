import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container container">
      <h2 className="navbar__title">Logotipo</h2>
      <div className="navbar__search">
        <p className="paragraph">Buscar medicamento</p>
        <i className="fas fa-search icon"></i>
      </div>
      <ul className="navbar__list">
        <li className="navbar__listitem">
          <a href="#" className="navbar__item">Inicio</a>
        </li>
        <li className="navbar__listitem">
          <a href="#" className="navbar__item">Catalogo</a>
        </li>
        <li className="navbar__listitem">
          <a href="#" className="navbar__item">Mas buscados</a>
        </li>
      </ul>
      </div>
   
    </nav>
  );
};

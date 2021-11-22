import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__container container">
        <h2 className="navbar__title">Logotipo</h2>
        {/* <div className="navbar__search">
          <p className="paragraph">Buscar medicamento</p>
          <NavLink className="fas fa-search icon" to="/"></NavLink>
        </div> */}
        <ul className="navbar__list">
          <li className="navbar__listitem">
            <Link to="/" className="navbar__item">
              Inicio
            </Link>
          </li>
          <li className="navbar__listitem">
            <Link to="/category" className="navbar__item">
              Categorías
            </Link>
          </li>
          <li className="navbar__listitem">
            <Link to="/moreSearch" className="navbar__item">
              Mas buscados
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

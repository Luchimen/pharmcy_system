import React from "react";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar__title">Logotipo</h2>
      <div className="navbar__search">
        <p>Buscar medicamento</p>
        <i class="fas fa-search"></i>
      </div>
      <ul>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Catalogo</a>
        </li>
        <li>
          <a href="#">Mas buscados</a>
        </li>
      </ul>
    </nav>
  );
};

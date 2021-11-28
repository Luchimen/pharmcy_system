import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export const CategoryPage = () => {
  return (
    <article className="container catPage">
      <h2 className="catPage__title">
        Atención, los medicamentos estan divididos por categorías.
      </h2>
      <p className="catPage__paragraph">
        Por favor <span className="catPage__span">seleccione uno</span>
      </p>
      <ul className="catPage__listlinks">
        <NavLink
          to="analgesicos"
          className={({ isActive }) =>
            "catPage__links" + (isActive ? " activeLink" : "")
          }
        >
          Analgesicos
        </NavLink>

        <NavLink
          to="anti-histaminicos"
          className={({ isActive }) =>
            "catPage__links" + (isActive ? " activeLink" : "")
          }
        >
          Anti Histaminicos
        </NavLink>
        <NavLink
          to="anti-inflamatorios"
          className={({ isActive }) =>
            "catPage__links" + (isActive ? " activeLink" : "")
          }
        >
          Anti Inflamatorios
        </NavLink>
        <NavLink
          to="antibioticos"
          className={({ isActive }) =>
            "catPage__links" + (isActive ? " activeLink" : "")
          }
        >
          Antibioticos
        </NavLink>
      </ul>
      <Outlet />
    </article>
  );
};

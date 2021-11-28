import React from "react";
import { medicaments } from "../utils/medicaments";
export const MoreSearchPage = () => {
  return (
    <section className="container moreSearch1">
      <h2 className="moreSearchPage__title">
        Estos son los medicamentos mas buscados por los usuarios
      </h2>
      <div className="container__search">
        {medicaments.map((medicament) => {
          return (
            <article className="moreSearch__card" key={medicament.title}>
              <figure className="moreSearch__figure">
                <img
                  src={medicament.url}
                  alt="probando"
                  className="card__img"
                />
              </figure>

              <div className="card__text">
                <h3 className="card__title">{medicament.title}</h3>
                <p className="card__paragraph">
                  Categoría: <span>{medicament.category}</span>
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

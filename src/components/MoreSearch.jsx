import React from "react";
import { medicaments } from "../utils/medicaments";
export const MoreSearch = () => {
  //console.log(medicaments);

  return (
    <section className="moreSearch container">
      <h2 className="moreSearch__title">Los más buscados</h2>
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

import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <h2 className="footer__title">Soy un footer</h2>
        <div className="footer__info">
          <p>SOS Cliente</p>
          <p>Este software fue desarrollado por Luis Miguel Castillo Mamani</p>
        </div>
        <div className="footer__contact">
          <Link to="www.facebook.com" className="footer__link">
            - Facebook
          </Link>
          <Link to="www.github.com" className="footer__link">
            - Github
          </Link>
          <Link to="www.portafolio.com" className="footer__link">
            - Portafolio
          </Link>
        </div>
      </div>
    </footer>
  );
};

import { useState } from "react";
import { Link } from "react-router-dom";
import { Mobile } from "../../mediaQueries/Mobile";
import { NotMobile } from "../../mediaQueries/NotMobile";
import "./style.scss";
const Header = () => {
  const [visibility, setVisibility] = useState("");
  const toggleVisibility = () => {
    setVisibility(visibility === "" ? "showRight" : "");
  };
  return (
    <>
      <header className="header">
        <div className="header__background transparent"></div>

        <div className="header__content">
          <Link to="/">
            <span className="header__logo-img"></span>
          </Link>
          <Mobile>
            <span className="header__hamburguer " onClick={toggleVisibility}>
              &equiv;
            </span>
          </Mobile>
          <NotMobile>
            <div className="menu__container">
              <ul className="menu__list">
                <Link to="/">
                  <li className="menu__item">Inicio</li>
                </Link>
                <Link to="/conocenos">
                  <li className="menu__item">Conócenos</li>
                </Link>
                <Link to="/soluciones">
                  <li className="menu__item">Soluciones</li>
                </Link>
                <Link to="/asesorias">
                  <li className="menu__item">Asesorías</li>
                </Link>
                <Link to="/contacto">
                  <li className="menu__item">Contáctanos</li>
                </Link>
              </ul>
            </div>
          </NotMobile>
        </div>
      </header>
      <section className={`menu_full ${visibility}`} onClick={toggleVisibility}>
        <ul className="menu_full__links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/conocenos">Conócenos</Link>
          </li>
          <li>
            <Link to="/soluciones">Soluciones</Link>
          </li>
          <li>
            <Link to="/asesorias">Asesorías</Link>
          </li>
          <li>
            <Link to="/contacto">Contáctanos</Link>
          </li>
        </ul>
      </section>
    </>
  );
};
export { Header };

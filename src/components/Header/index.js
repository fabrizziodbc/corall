import { useState } from "react";
import { Link } from "react-router-dom";
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
           <span className="header__logo-img" ></span>
          </Link>
          <span className="header__hamburguer " onClick={toggleVisibility}>
            &equiv;
          </span>
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

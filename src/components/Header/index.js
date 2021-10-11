import { useState } from "react";
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
          <a href="#home" className="header__logo">
           <span className="header__logo-img" ></span>
          </a>
          <span className="header__hamburguer " onClick={toggleVisibility}>
            &equiv;
          </span>
        </div>
      </header>
      <section className={`menu_full ${visibility}`}>
        <ul className="menu_full__links">
          <li>
            <a href="#home">Inicio</a>
          </li>
          <li>
            <a href="#about">Conócenos</a>
          </li>
          <li>
            <a href="#solutions">Soluciones</a>
          </li>
          <li>
            <a href="#consultancies">Asesorías</a>
          </li>
          <li>
            <a href="#contact">Contáctanos</a>
          </li>
        </ul>
      </section>
    </>
  );
};
export { Header };

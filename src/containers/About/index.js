import { Portada } from "../../components/Portada";

const About = () => {
  const coverIMG =
    "https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  const quienesImg = "";
  return (
    <>
      <Portada coverLink={coverIMG} title="Conócenos" />
      <div className="quienes">
        <p className="about__title">¿QUIÉNES SOMOS?</p>
        <p className="about__subtitle">
          Empresa liberteña dedicada a la{" "}
          <strong>
            investigación y desarrollo de módulos electrónicos innovadores para
            la industria 4.0 aplicando IoT e IA
          </strong>{" "}
          para monitorear y controlar multivariables.
        </p>
        <img url={quienesImg} className="about__img" />
      </div>
      <div className="mision">
        <p className="about__title">Misión</p>
        <p className="about__subtitle">
          Nos esforzamos en{" "}
          <strong>desarrollar dispositivos inteligentes</strong>, con el fin de
          brindar a nuestros clientes una mejor calidad y estilo de vida.
        </p>
        </div>
        <div className="vision">
        <p className="about__title">Visión</p>
        <p className="about__subtitle">
          Haciendo <strong>foco en la investigación e innovación</strong>
          desarrollando dispositivos de calidad con un soporte rápido y
          eficiente....
        </p>
      </div>
      <div className="valores">
        <p className="about__title">Valores</p>
        <ul>
          <li>Calidad del producto</li>
          <li>Desarrollo ágil</li>
          <li>Innovación</li>
          <li>Compromiso</li>
          <li>Comunicación efectiva</li>
          <li>Kaizen</li>
        </ul>
      </div>
      <div className="how">
        <p className="about__title">¿Cómo lo hacemos?</p>
        <p className="about__subltitle">
          <ol>
            <li>Escuchamos tu problema</li>
            <li>Aterrorizamos tu solución</li>
            <li>Lanzamos un piloto</li>
            <li>Validamos el producto</li>
          </ol>
        </p>
      </div>
    </>
  );
};
export { About };

import { InforCard } from "../../components/InfoCard";
import { Portada } from "../../components/Portada";
import { Values } from "../../components/Values";
import { aboutInfo } from "./aboutInfo";
import { valuesInfo } from "./valuesInfo";
import "./style.scss"
const About = () => {
  const coverIMG =
    "https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  return (
    <>
      <Portada coverLink={coverIMG} title="Conócenos" />
      {aboutInfo.map(e=> (
        <div className={e.class} key={e.title}>
        <InforCard
        
          title={e.title}
          content={e.content}
          img={e.img}
        />
      </div>
      ))}
      
      <div className="valores">
        <p className="about__title">Valores</p>
        <Values>
          {valuesInfo.map((e) => (
            <li className="values__item" key={e.value}>
              <p className="values__icon">{e.icon}</p>
              <p className="values__name">{e.value}</p>
            </li>
          ))}
        </Values>
      </div>
      <div className="how">
        <p className="about__title">¿Cómo lo hacemos?</p>
        <span className="about__how"/>
      </div>
    </>
  );
};
export { About };

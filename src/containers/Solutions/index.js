import { Portada } from "../../components/Portada";
import { SolutionCard } from "../../components/SolutionCard";
import { solutionsInfo } from "./solutionsInfo";
import "./style.scss";
const Solutions = () => {
  const coverIMG =
    "https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  return (
    <>
      <Portada coverLink={coverIMG} title="Nuestras soluciones" />
      <div className="cards_container">
        {solutionsInfo.map((e) => (
          <SolutionCard
            key={e.name}
            name={e.name}
            link={e.link}
            description={e.description}
            img={e.img}
          />
        ))}
      </div>
    </>
  );
};
export { Solutions };

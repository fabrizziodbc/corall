import { Portada } from "../../components/Portada";
import { SolutionCard } from "../../components/SolutionCard";
import { Desktop } from "../../mediaQueries/Desktop";
import { Mobile } from "../../mediaQueries/Mobile";
import { Tablet } from "../../mediaQueries/Tablet";
import { solutionsInfo } from "./solutionsInfo";
import "./style.scss";
const Solutions = () => {
  const coverIMG =
    "https://images.pexels.com/photos/1906795/pexels-photo-1906795.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
  return (
    <>
      <Portada coverLink={coverIMG} title="Nuestras soluciones" />
      <Mobile>
        {" "}
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
      </Mobile>
      <Tablet>
        <div className="cards_container cards_container-b">
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
      </Tablet>
      <Desktop>
        <div className="cards_container cards_container-d">
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
      </Desktop>
    </>
  );
};
export { Solutions };

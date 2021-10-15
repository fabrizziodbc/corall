import { Mobile } from "../../mediaQueries/Mobile";
import { NotMobile } from "../../mediaQueries/NotMobile";
import "./style.scss";
const SolutionCard = (props) => {
  return (
    <>
      <Mobile>
        <div className="card__container">
          <span className={`card__name ${props.name}`} />
          <p className="card__description">{props.description}</p>
          <a
            className="card__anchor"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            <button className="card__button">Ver solución</button>
          </a>
        </div>
      </Mobile>
      <NotMobile>
        <div className="card__container card__container-b">
          <span className={`card__name card__name-b ${props.name}`} />
          <p className="card__description card__description-b">{props.description}</p>
          <a
            className="card__anchor"
            href={props.link}
            target="_blank"
            rel="noreferrer"
          >
            <button className="card__button card__button-b">Ver solución</button>
          </a>
        </div>
      </NotMobile>
    </>
  );
};
export { SolutionCard };

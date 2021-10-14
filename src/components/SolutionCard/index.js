import "./style.scss";
const SolutionCard = (props) => {
  return (
    <div className="card__container">
      <span
        className={`card__name ${props.name}`}
      />
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
  );
};
export { SolutionCard };

import { Link } from "react-router-dom";
import "./style.scss";
const Slide = (props) => {
  return (
    <div className="slide__container">
      <div className="slide">
        <p className="slide__title">{props.title}</p>
        <Link to="/conocenos">
          <button className="slide__button slide__button1">
            {props.button1}
          </button>
        </Link>
        <Link to="/soluciones">
          <button className="slide__button slide__button2">
            {props.button2}
          </button>
        </Link>
      </div>
    </div>
  );
};
export { Slide };

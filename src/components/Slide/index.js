import { Link } from "react-router-dom";
import { Mobile } from "../../mediaQueries/Mobile";
import { NotMobile } from "../../mediaQueries/NotMobile";
import "./style.scss";
const Slide = (props) => {
  return (
    <div className="slide__container">
      <div className="slide">
       <Mobile>
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
       </Mobile>
       <NotMobile>
       <p className="slide__title slide__title-b">{props.title}</p>
        <Link to="/conocenos">
          <button className="slide__button slide__button-b slide__button1">
            {props.button1}
          </button>
        </Link>
        <Link to="/soluciones">
          <button className="slide__button slide__button-b slide__button2">
            {props.button2}
          </button>
        </Link>
       </NotMobile>
      </div>
    </div>
  );
};
export { Slide };

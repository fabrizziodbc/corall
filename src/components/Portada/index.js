import { Mobile } from "../../mediaQueries/Mobile";
import { NotMobile } from "../../mediaQueries/NotMobile";

import "./style.scss";
const Portada = (props) => (
  <div className="cover-container">
    <div
      className="cover"
      style={{ backgroundImage: `url(${props.coverLink})` }}
    >
      <div className="cover__background"></div>
      <Mobile>
        <h1 className="cover__title">{props.title}</h1>
      </Mobile>
      <NotMobile>
        <h1 className="cover__title cover__title-b">{props.title}</h1>
      </NotMobile>
    </div>
  </div>
);
export { Portada };

import "./style.scss";
import { FaPhoneAlt } from "react-icons/fa";
const FindMeCard = (props) => {
  return (
    <div className="FindMeCard">
      <i className={`FindMeCard__icon `}> {props.cardIcon}</i>
      <div className="FindMeCard__info">
        <p className="FindMeCard__title">{props.cardTitle}</p>
        <p className="FindMeCard__content">{props.cardContent}</p>
      </div>
    </div>
  );
};
export { FindMeCard };

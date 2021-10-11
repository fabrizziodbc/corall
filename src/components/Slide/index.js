import "./style.scss";
const Slide = (props) => {
  return (
    <>
      <div
        className="slide__background"
        style={{ backgroundImage: `url(${props.slideLink})` }}
      ></div>
      <div className="slide__background-opacity"></div>
      <div className="slide">
        <i className={`slide__icon ${props.icon}`}></i>
        <p className="slide__title">{props.title}</p>
        <button className="slide__button slide__button1">
          {props.button1}
        </button>
        <button className="slide__button slide__button2">
          {props.button2}
        </button>
      </div>
    </>
  );
};
export { Slide };

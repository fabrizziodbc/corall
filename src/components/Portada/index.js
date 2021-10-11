import "./style.scss"
const Portada = (props) => (
  <div className="cover-container">
    <div
      className="cover"
      style={{ backgroundImage: `url(${props.coverLink})` }}
    >
      <div className="cover__background"></div>
      <h1 className="cover__title">{props.title}</h1>
    </div>
  </div>
);
export { Portada };

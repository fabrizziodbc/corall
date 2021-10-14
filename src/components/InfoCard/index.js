import "./style.scss";
const InforCard = (props) => {
  return (
    <>
      <p className="about__title">{props.title}</p>
      <p className="about__content">{props.content}</p>
      <span
        className="about__img"
        style={{ backgroundImage: `url(${props.img})` }}
      />
    </>
  );
};
export { InforCard };

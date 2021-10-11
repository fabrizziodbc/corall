
import "./style.scss";
const Loading = () => {
  return (
    <div className="loader-container" id="loader">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
export { Loading };

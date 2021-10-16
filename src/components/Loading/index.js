import { useEffect, useState } from "react";
import "./style.scss";
const Loading = () => {
  const [visibility, setVisibility] = useState("show");
  useEffect(() => {
    setVisibility("show");
    setTimeout(() => {
      setVisibility("hide");
    }, 2500);
  }, []);
  return (
    <div className={`loader-container ${visibility}`}>
      <div id="loading-wrapper">
        <div id="loading-text">CARGANDO</div>
        <div id="loading-content"></div>
      </div>
    </div>
  );
};
export { Loading };

import { useEffect, useState } from "react";
import "./style.scss";
const Loading = () => {
  const [visibility, setVisibility] = useState("show");
  useEffect(() => {
    setVisibility("show");
    console.log("si se ve");
    setTimeout(() => {
      setVisibility("hide");
      console.log("ya no se ve xd");
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

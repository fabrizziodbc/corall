import { useState, useEffect } from "react";
import { Slide } from "../Slide";
import { CarouselNav } from "../CarouselNav";
import { slideInfo } from "./slidesInfo";
import "./style.scss";
const Carousel = () => {
  const [state, setState] = useState(1);
  setTimeout(() => {
    if (state === 3) {
      setState(1);
    } else {
      setState(state + 1);
    }
  }, 5000);
  return (
    <>
      <div className="carrousel_container">
        <Slide
          slideLink={slideInfo[state - 1].slideLink}
          icon={slideInfo[state - 1].icon}
          title={slideInfo[state - 1].title}
          button1={slideInfo[state - 1].button1}
          button2={slideInfo[state - 1].button2}
        />
      <CarouselNav navState={state}/>
      </div>
    </>
  );
};
export { Carousel };

import "./style.scss";
import { slideInfo } from "./slidesInfo";
import Carousel from "react-bootstrap/Carousel";
import { Slide } from "../Slide";
const Carrousel = () => {
  return (
    <div className="carrousel-container">
      <Carousel>
        {slideInfo.map(e=>(
          <Carousel.Item interval={1000}>
          <span className={`d-block w-100 slide ${e.style}`} />
          <Carousel.Caption>
            <Slide
              title={e.title}
              button1={e.button1}
              button2={e.button2}
            />
          </Carousel.Caption>
        </Carousel.Item>
        ))}
        

      </Carousel>
    </div>
  );
};
export { Carrousel };

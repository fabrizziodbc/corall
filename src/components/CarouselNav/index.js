import { useState } from "react";
import "./style.scss"
const CarouselNav = (props) => {
    const [state, setState] = useState(props.navState);
    const activeDot = ()=> {
        if (state === 1) {
            
        }
    }
    return(
        <div className="CarouselNav">
            <div className="CarouselNav__arrows">
                <span className="CarouselNav__arrows-l">&#x25c0;</span>
                <span className="CarouselNav__arrows-r">&#x25b6;</span>
            </div>
            
            <div className="CarouselNav__dots">
                <span className="CarouselNav__dot">&#x26ab;&#xfe0e;</span>
                <span className="CarouselNav__dot">&#x26ab;&#xfe0e;</span>
                <span className="CarouselNav__dot">&#x26ab;&#xfe0e;</span>
            </div>
        </div>
    )
}
export {CarouselNav};
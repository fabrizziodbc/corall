import { Mobile } from "../../mediaQueries/Mobile";
import { NotMobile } from "../../mediaQueries/NotMobile";
import "./style.scss";
const Values = (props) => {
  return (
    <>
      <Mobile>
        <ul className="values-list">{props.children}</ul>
      </Mobile>
      <NotMobile>
        <ul className="values-list values-list-b">{props.children}</ul>
      </NotMobile>
    </>
  );
};
export { Values };

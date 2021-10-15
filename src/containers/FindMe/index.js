import { FindMeCard } from "../../components/FindMeCard";
import { cardsInfo } from "./cardsInfo";
import { Mobile } from "../../mediaQueries/Mobile";
import { NotMobile } from "../../mediaQueries/NotMobile";
import "./style.scss"

const FindMe = () => {
  return (
      <>
    <Mobile>
      <div>
        {cardsInfo.map((c) => (
          <FindMeCard
            key={c.cardTitle}
            cardIcon={c.cardIcon}
            cardTitle={c.cardTitle}
            cardContent={c.cardContent}
          />
        ))}
      </div>
    </Mobile>
    <NotMobile>
      <div className="findme__container">
        {cardsInfo.map((c) => (
          <FindMeCard
            key={c.cardTitle}
            cardIcon={c.cardIcon}
            cardTitle={c.cardTitle}
            cardContent={c.cardContent}
          />
        ))}
      </div>
    </NotMobile>
    </>
  );
};
export { FindMe };

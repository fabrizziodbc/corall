import { FindMeCard } from "../../components/FindMeCard";
import { cardsInfo } from "./cardsInfo";

const FindMe = ()=>{
    return(
        <div>
            {cardsInfo.map(c=> <FindMeCard key={c.cardTitle} cardIcon={c.cardIcon} cardTitle={c.cardTitle} cardContent={c.cardContent} />)}
        </div>
       
    )
}
export {FindMe};
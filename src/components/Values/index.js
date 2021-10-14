import "./style.scss"
const Values = (props) => {
    return(
        <ul className="values-list">
            {props.children}
        </ul>
    )
};
export {Values}
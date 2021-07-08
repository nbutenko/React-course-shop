import Menu from "./Menu";
import Title from "./Title";

function Header(props) {
    return (
        <div>
            <Title name={props.name} motto={props.motto}/>
            <Menu menu={props.menu} search={props.search}/>
        </div>
    )
}

export default Header;
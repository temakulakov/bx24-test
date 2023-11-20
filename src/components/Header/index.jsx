import "./Header.css"
import {name} from "../../store/data";
import Roller from "./Roller";
const Header = () => {
    return <div className={"header"}><Roller/><h1>{name[0]}</h1></div>
};

export default Header;

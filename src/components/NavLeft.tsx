import { Link } from "react-router-dom";
import { NavDiv } from "../GlobalStyle";

const NavLeft = () => {
    return (
        <NavDiv>
            <li>
                <Link to="/">Scott Hall</Link>
            </li>
        </NavDiv>
    )
};

export default NavLeft;
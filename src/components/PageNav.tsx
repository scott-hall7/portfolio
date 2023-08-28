import { Link } from "react-router-dom"
import { NavDiv, ContactButton } from "../GlobalStyle"

const PageNav = () => {
    return (
        <NavDiv>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <ContactButton to="/contact">Contact</ContactButton>
            </li>
        </NavDiv>
    )
}

export default PageNav;
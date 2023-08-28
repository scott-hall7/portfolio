import { NavDiv, ContactButton} from '../GlobalStyle'

const HomeNav = () => {
    return (
        <NavDiv>
            <li>
                <ContactButton to="/contact">Contact</ContactButton>
            </li>
        </NavDiv>
    )
}

export default HomeNav;
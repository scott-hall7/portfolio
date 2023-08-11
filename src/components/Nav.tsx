import NavLeft from "./NavLeft";
import NavRight from "./NavRight";
import { useMatch } from "react-router";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  font-size: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 8rem;
  align-items: center;
`;


const Nav = () => {
    const match = useMatch('/')

    return (
        <nav>
            <StyledUl>
                <NavLeft></NavLeft>
                <NavRight match={match}></NavRight>
            </StyledUl>
        </nav>
    )
};

export default Nav;
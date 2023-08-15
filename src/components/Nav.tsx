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

const StyledNav = styled.nav`
  padding: 1rem 1rem 0rem 1rem;
`;



const Nav = () => {
    const match = useMatch('/')

    return (
        <StyledNav>
            <StyledUl>
                <NavLeft></NavLeft>
                <NavRight match={match}></NavRight>
            </StyledUl>
        </StyledNav>
    )
};

export default Nav;
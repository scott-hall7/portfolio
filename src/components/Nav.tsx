import { useMatch } from "react-router";
import NavLeft from "./NavLeft";
import HomeNav from './HomeNav'
import PageNav from './PageNav'
import styled from "styled-components";

const NavUl = styled.ul`
  list-style-type: none;
  font-size: 2.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 8rem;
  align-items: center;
  padding: 1rem;
`;

const Nav = () => {
    const match = useMatch('/');
    const navRight = match ? <HomeNav /> : <PageNav />;

    return (
        <nav>
            <NavUl>
                <NavLeft></NavLeft>
                {navRight}
            </NavUl>
        </nav>
    )
};

export default Nav;
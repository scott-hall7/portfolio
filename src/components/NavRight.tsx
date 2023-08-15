/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

const ContactButton = styled(Link)`
    background-color: rgb(179, 19, 18);
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    &:hover {
        background-color: rgb(43, 42, 76);
        color: white;
    }
`;

const NavRight = ({match}: any) => {

    
    const linkDisplay = {
        display: match ? "none" : ""
    }

    return (
        <StyledDiv>
            <li>
                <Link style={linkDisplay} to="/about">About</Link>
            </li>
            <li>
                <Link style={linkDisplay} to="/projects">Projects</Link>
            </li>
            <li>
                <ContactButton to="/contact">Contact</ContactButton>
            </li>
        </StyledDiv>
    )
};

export default NavRight;
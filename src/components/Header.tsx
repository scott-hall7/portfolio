import styled from "styled-components";
import { Link } from 'react-router-dom'
import NavRight from "./NavRight";
// eslint-disable-next-line @typescript-eslint/no-var-requires

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.25rem;
`;

const StyledH1 = styled.h1`
  font-size: 8rem;
  text-shadow: 3px 3px rgb(179, 19, 18);
`;

const StyledH2 = styled.h2`
  font-size: 3rem;
  text-shadow: 1px 1px rgb(179, 19, 18);
`;

const StyledHr = styled.hr`
  border: .25rem solid rgb(179, 19, 18);
  border-radius: 15px;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  font-size: 2.5rem;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Header = () => {
    return (
      <HeaderStyle>
        <StyledH1>Full <br/> Stack <br/> Developer</StyledH1>
        <StyledH2>(not the <a href="https://en.wikipedia.org/wiki/Scott_Hall">wrestler</a>, sorry!)</StyledH2>
        <StyledHr />
        <StyledUl>
        <StyledDiv>
          <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </StyledDiv>
        </StyledUl>
      </HeaderStyle>
    );
  };
  
  export default Header;
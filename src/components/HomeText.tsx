import { Link } from 'react-router-dom'
import styled from "styled-components";

const HomeTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledH1 = styled.h1`
  font-size: 6rem;
  text-shadow: 3px 3px rgb(234, 144, 108);
`;

const StyledH2 = styled.h2`
  font-size: 4rem;
`;

const StyledHr = styled.hr`
  border: .50rem solid rgb(179, 19, 18);
  border-radius: 15px;
`;

const HomeUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  font-size: 2.5rem;
`;

const HomeText = () => {
    return (
      <HomeTextDiv>
        <StyledH1>Full<br/>Stack<br/>Developer</StyledH1>
        <StyledH2>(not the <a href="https://en.wikipedia.org/wiki/Scott_Hall" target="_blank" rel="noopener noreferrer">wrestler</a>, sorry!)</StyledH2>
        <StyledHr />
        <HomeUl>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </HomeUl>
      </HomeTextDiv>
    );
  };
  
  export default HomeText;
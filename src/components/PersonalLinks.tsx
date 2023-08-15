/* eslint-disable @typescript-eslint/no-var-requires */
import styled from 'styled-components'
const github = require('../photos/github.png')
const linkedin = require('../photos/linkedin.png');

const LinksDiv = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: center;
`;

const LinksImg = styled.img`
  width: 2.5rem;
  height: auto;
  background-color: rgb(238, 226, 222);
  padding: .5rem;
  border-radius: .25rem;
  &:hover {
    transform: scale(1.05)
  }
`;


const PersonalLinks = () => {
  return (
    <LinksDiv>
        <a href="https://github.com/scott-hall7"><LinksImg src={github}/></a>
        <a href="https://www.linkedin.com/in/scott-hall-5b5189130/"><LinksImg src={linkedin} alt="link to personal linkedin"/></a>
    </LinksDiv>
  );
};
  
  export default PersonalLinks;

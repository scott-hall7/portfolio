import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

const NoPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  height: 100%;
  gap: 2rem;
  text-align: center;
`;

const NoPageH1 = styled.h1`
  font-size: 8rem;
  text-shadow: 3px 3px rgb(234, 144, 108);
`;

const NoPageH2 = styled.h2`
  font-size: 3rem;
`;

const HomeLink = styled(Link)`
  color: rgb(234, 144, 108);
  &:hover {
    color: rgb(43, 42, 76);
  }
`;

const NoPage = () => {
    return (
        <NoPageDiv>
          <NoPageH1>404</NoPageH1>
          <NoPageH2>That page does not exist.</NoPageH2>
          <NoPageH2>Go back <HomeLink to="/">home!</HomeLink></NoPageH2>
        </NoPageDiv>
    );
  };
  
  export default NoPage;
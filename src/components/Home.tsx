import styled from "styled-components";
import HomeText from './HomeText'
import HomeImage from './HomeImage'
import { LayoutDiv } from "../GlobalStyle";
// eslint-disable-next-line @typescript-eslint/no-var-requires

const HomeContainer = styled.div`
  display: flex;
  gap: 9rem;
  padding: 1rem 1rem 3rem 1rem;
  margin: 0px 2rem;
  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Home = () => {
  return (
    <LayoutDiv>
      <HomeContainer>
          <HomeText/>
          <HomeImage />
      </HomeContainer>
    </LayoutDiv>
  );
};
  
  export default Home;

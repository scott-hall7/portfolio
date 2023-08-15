import styled from "styled-components";
import Header from './Header'
import Image from './Image'
import { LayoutDiv } from "../GlobalStyle";
// eslint-disable-next-line @typescript-eslint/no-var-requires

const HomeContainer = styled.div`
  display: flex;
  gap: 5rem;
  @media (max-width: 1220px) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const Home = () => {
  return (
    <LayoutDiv>
      <HomeContainer>
          <Header />
          <Image />
      </HomeContainer>
    </LayoutDiv>
  );
};
  
  export default Home;

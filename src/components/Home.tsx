import styled from "styled-components";
import Header from './Header'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const homeImage = require('../photos/DSC00236.JPG')

const HomeDiv = styled.div`
  margin: 6rem 4rem 4rem 4rem;
  display: flex;
  justify-content: space-evenly;
`;

const HomeImg = styled.img`
  height: 40rem;
  width: auto;
  border-radius: 2rem;
  border: 1rem solid rgb(238, 226, 222);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <>
      <HomeDiv>
          <Header />
          <HomeImg src={homeImage} alt="personal photo" />
      </HomeDiv>
    </>
  );
};
  
  export default Home;

/* eslint-disable @typescript-eslint/no-var-requires */
import styled from "styled-components";
const homeImage = require('../photos/home.jpg')

const HomeImg = styled.img`
  width: auto;
  max-height: 600px;
  border-radius: 2rem;
  border: 1rem solid rgb(238, 226, 222);
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    max-height: 400px;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const Home = () => {
  return (
    <ImageDiv>
        <HomeImg src={homeImage} alt="At the narrows, in Zion National Park" />
    </ImageDiv>  
  );
};
  
  export default Home;

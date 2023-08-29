/* eslint-disable @typescript-eslint/no-var-requires */
const homeImage = require('../photos/home.jpg')
import styled from "styled-components";

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const HomeImg = styled.img`
  max-height: 500px;
  width: auto;
  border-radius: 2rem;
  @media (max-width: 600px) {
    max-height: 400px;
  }
`;

const HomeImage = () => {
  return (
    <ImageDiv>
        <HomeImg src={homeImage} alt="At the narrows, in Zion National Park" />
    </ImageDiv>  
  );
};
  
  export default HomeImage;

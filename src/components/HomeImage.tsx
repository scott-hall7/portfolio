/* eslint-disable @typescript-eslint/no-var-requires */
import styled from "styled-components";
const homeImage = require('../photos/home.jpg')

const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const HomeImg = styled.img`
  max-height: 600px;
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

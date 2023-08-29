import { Link } from 'react-router-dom'
import { styled, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    @font-face {
        font-family: 'Work Sans';
        src: url('./fonts/WorkSans-VariableFont_wght.ttf') format('ttf');
    }
    font-family: 'WorkSans', sans-serif;
    margin: 0;
    padding: 0;
  }

  html, body {
    color: rgb(43, 42, 76);
    background-color: rgb(238, 226, 222);
    height: 100%;
    @media (max-width: 700px) {
        font-size: 8px;
    }
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
      color: rgb(234, 144, 108);
      text-decoration: underline;
  }

  button:hover {
    cursor: pointer;
  }
`;

export const LayoutDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageContainer = styled.div`
  display: flex;
  padding: 1rem 1rem 3rem 1rem;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.25rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  @media (max-width: 700px) {
    font-size: 16px;
    margin: 0px 2rem;
  }
`;

export const PageHeader = styled.h1`
  font-size: 3.5rem;
  text-shadow: 2px 2px rgb(234, 144, 108);
`;

export const NavDiv = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
`

export const ContactButton = styled(Link)`
    background-color: rgb(179, 19, 18);
    color: white;
    padding: 1rem;
    border-radius: 1rem;
    &:hover {
        background-color: rgb(43, 42, 76);
        color: white;
    }
`;

export default GlobalStyle;

import { styled, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @media (max-width: 600px) {
    html {
      font-size: 8px;
    }
  }

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
    width: 100%;
    height: 100%;
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

  svg: {
    width: 2rem;
    height: auto;
  }
`;

export const LayoutDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageContainer = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  align-items: center;
  gap: 2rem;
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  @media (max-width: 600px) {
    font-size: 16px;
    margin: 0px 2rem;
  }
`;

export const PageHeader = styled.h1`
  font-size: 4rem;
  text-shadow: 2px 2px rgb(234, 144, 108);
`;

export default GlobalStyle;

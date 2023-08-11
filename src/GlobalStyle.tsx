import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    @font-face {
        font-family: 'Work Sans';
        src: url('./fonts/WorkSans-VariableFont_wght.ttf') format('ttf');
    }
    font-family: 'WorkSans', sans-serif;
    margin: 0;
    padding: 0;
    background-color: rgb(43, 42, 76);
    color: rgb(238, 226, 222);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
      color: rgb(234, 144, 108);
      text-decoration: underline;
  }
`

export default GlobalStyle;
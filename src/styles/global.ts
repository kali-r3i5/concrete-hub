import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;   
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, h1, h2, h3, a, p {
    font-family: Railway-Light, monospace;
  }

  h1 {
    font-size: 2.8;
    font-weight: bold;
  }

  #root {
    margin: 0 auto;
    max-width: 1025px;
    padding: 40px 20px;
  }

  button, a {
    cursor: pointer;
  }
`;

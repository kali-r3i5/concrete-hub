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

  body, input, button {
    font-size: 16px;
    font-family: Roboto, sans-serif;
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
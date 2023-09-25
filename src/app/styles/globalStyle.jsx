import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    color: white;
  }
  body {
    margin: 0;
    min-height: 100vh;
    font-weight: 300;
  }

  html {
    overflow: scroll;
    overflow-x: hidden;
  }

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  h2 {
    font-size: 20px;
    font-weight: 300;
  }
`;

export default GlobalStyle;

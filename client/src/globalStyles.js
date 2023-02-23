import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  :root {
  --primary-color1: #222831;
  --primary-color2: #393e46;
  --primary-color3: #00adb5;
  --font-color: #eeeeee;
}
`;

export default GlobalStyle;

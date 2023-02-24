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
  --primary-color4: #eeeeee;

  --fluid-width: 90vw;
  --max-width: 1120px;
  --nav-height: 6rem;
}
.container {
  width: var(--fluid-width);
  max-width: var(--max-width);
  margin: 0 auto;
}
`;

export default GlobalStyle;

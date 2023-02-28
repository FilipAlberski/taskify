import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eeeeee;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
  }
  *{
    box-sizing: border-box;
  }
  :root {
  --primary-color-dark: #222831;
  --background-color:#1abc9c;
  --background-color-darker: #16a085;
  
  --primary-color:#f5f5f5;
  --primary-color-light: #eeeeee;

  --secondary-color: #00adb5;
  --secondary-color-dark: #393e46;

  --fluid-width: 90vw;
  --max-width: 1120px;
  --nav-height: 6rem;

  --fixed-width: 500px;
  --borderRadius: 0.4rem;

   /* box shadow*/
   --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

`;

export default GlobalStyle;

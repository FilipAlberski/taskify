import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
   
    
    font-family: Open-Sans, Helvetica, Sans-Serif;
    
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :root {
 
}
`;

const lightTheme = {
    color: "#000",
    background: "#f5f5f5",
    background2: "#fff",
    specialColor: "#0077b6",
    white: "#fff",
};

const darkTheme = {
    color: "#fff",
    background: "#32333d",
    background2: "#373740",
    specialColor: "#141414",
    white: "#fff",
};

export { GlobalStyle, lightTheme, darkTheme };

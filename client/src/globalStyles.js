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
    background: "#f5f5f5", //offwhite
    background2: "#fff", //white
    background3: "#dddddd", //lightgray
    specialColor: "#0077b6",
    disabledColor: "#6baecf",
    white: "#fff",

    bigShadow: "8px 8px 64px 0px rgba(66, 68, 90, 1)",
};

const darkTheme = {
    color: "#fff",
    background: "#0d1116", //darkgray
    background2: "#161b22", //lightdarkgray
    background3: "#212121", //darkergray
    specialColor: "#9a02b9",
    disabledColor: "#3a084b",
    white: "#fff",

    bigShadow: "8px 8px 64px 0px rgba(102, 102, 102, 1)",
};

export { GlobalStyle, lightTheme, darkTheme };

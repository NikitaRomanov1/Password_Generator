import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box; 
}
  body {
       font-family: "Roboto", sans-serif;
   }`;

export default Global;

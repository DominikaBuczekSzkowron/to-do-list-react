import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
::after,
::before {
  box-sizing: inherit;
}

body {
  background-color: #eeec;
  font-family: "Montserrat", sans-serif;
}

.container {
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;
}
`;

import { createGlobalStyle } from 'styled-components'

// font-family: 'Baloo 2', cursive;
// font-family: 'Roboto', sans-serif;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px red;
  }

  body {
    background: ${props => props.theme["background"]};
    --webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }`;

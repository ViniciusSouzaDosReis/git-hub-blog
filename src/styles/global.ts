import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.blue};
  }

  body {
    background-color: ${(props) => props.theme['base-background']};
    color: ${(props) => props.theme['base-title']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    text-decoration: none;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme['base-text']};
    line-height: 160%;
  }
`

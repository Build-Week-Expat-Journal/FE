import { createGlobalStyle } from 'styled-components/macro';
import { rem } from 'polished';

const GlobalStyles = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
    overflow-y: scroll;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  * {
    min-height: 0;
    min-width: 0;
  }
  body {
    font-size: ${props => props.theme.typography.fontSize};
    line-height: ${props => props.theme.typography.lineHeight};
    color: ${props => props.theme.colors.baseFont};
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.headingFont};
    font-family: ${props => props.theme.fontFamily.heading};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
    letter-spacing: 0.01em;
    margin: 0;
  }
  h1 {
    color: ${props => props.theme.colors.h1Font};
    font-size: ${rem(64)};
  }
  h2 {
    font-size: ${rem(36)};
  }
  p {
    padding: 0;
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
    height: 100%;
  }
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
`;

export default GlobalStyles;

import { css } from 'styled-components';
import theme from './theme';

const { breakpoints } = theme;

// media query helper
// Example usage

// styled.div`
//   height: 100vh;
//   ${media.md`
//     height: 60vh;
//   `}
// `

export default Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${breakpoints[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

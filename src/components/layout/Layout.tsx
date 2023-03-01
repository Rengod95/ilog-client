import styled from '@emotion/styled';

export const Layout = styled.div`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }

  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -webkit-tap-highlight-color: transparent; /* 3*/
  }
  body,
  p,
  table,
  blockquote,
  address,
  pre,
  iframe,
  form,
  figure,
  dl {
    margin: 0;
  }

  a {
    background-color: transparent;
    text-decoration: none;
    color: inherit;
  }

  svg,
  img,
  embed,
  object,
  iframe {
    vertical-align: bottom;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    -webkit-appearance: none; /* 1 */
    appearance: none;
    vertical-align: middle;
    color: inherit;
    font: inherit;
    background: transparent;
    padding: 0;
    margin: 0;
    border-radius: 0;
    text-align: inherit;
    text-transform: inherit; /* 2 */
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
  }

  /* Lists (enumeration) */
  /* ============================================ */

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;

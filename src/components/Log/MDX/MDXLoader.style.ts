import { Flex } from '@/components/UI/FlexBox';
import styled from '@emotion/styled';

export const MarkdownWrapper = styled.section`
  width: 100%;
  heigth: auto;
  .md {
    padding: 1.6rem;
    margin-top: 1rem;
    line-height: 1.6rem;
    height: auto;

    pre {
      overflow: auto;

      /* width */
      ::-webkit-scrollbar {
        height: 8px;
        border-radius: 10px;
        background: ${({ theme }) => theme.color.primary.dark};
      }

      /* Track */
      ::-webkit-scrollbar-track {
        /* background: ${({ theme }) => theme.color.primary.main}; */
      }

      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 10px;
        background: ${({ theme }) => theme.color.error.main};
      }

      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: transparent;
        background: ${({ theme }) => theme.color.success.main};
      }

      color: ${({ theme }) => theme.color.text.primary};
    }

    details,
    figcaption,
    figure {
      display: block;
    }
    a {
      background-color: transparent;
      text-decoration: none;
    }

    b,
    strong {
      font-weight: ${({ theme }) => theme.weight.bolder};
    }

    img {
      border-style: none;
      max-width: 100%;
      box-sizing: content-box;
      background-color: transparent;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 2.4rem;
      margin-bottom: 1.4rem;
      font-weight: ${({ theme }) => theme.weight.boldest};
      color: ${({ theme }) => theme.color.primary.dark};
    }
    color: ${({ theme }) => theme.color.primary.main};
  }

  h1 {
    font-size: ${({ theme }) => theme.size.font.xxxl};
    line-height: 3rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.primary.dark};
  }

  h2 {
    line-height: 3rem;
    font-size: ${({ theme }) => theme.size.font.xxl};
    border-bottom: 1px solid ${({ theme }) => theme.color.success.light};
  }

  h3 {
    line-height: 3rem;
    font-size: ${({ theme }) => theme.size.font.xl};
    border-bottom: 1px solid ${({ theme }) => theme.color.primary.dark};
  }

  h4 {
    line-height: 3rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.primary.dark};
    font-size: ${({ theme }) => theme.size.font.lg};
  }

  h5 {
    line-height: 3rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.primary.dark};
    font-size: ${({ theme }) => theme.size.font.md};
  }

  h6 {
    font-size: ${({ theme }) => theme.size.font.sm};
  }

  p {
    line-height: 1.6rem;
    font-size: ${({ theme }) => theme.size.font.md};
  }

  blockquote {
    margin: 0;
    padding: 0 1em;
    border-left: 0.25em solid ${({ theme }) => theme.color.text.hint};
    background-color: ${({ theme }) => theme.color.secondary.dark};
  }

  ul,
  ol {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 1.2rem;
  }

  pre {
    background-color: #101010;
    border-radius: 0.8rem 0.8rem 5px 5px;
    box-shadow: ${({ theme }) => theme.shadow.default};
    padding: 1rem;
    font-size: ${({ theme }) => theme.size.font.md};

    @media (max-width: 720px) {
      font-size: ${({ theme }) => theme.size.font.xs};
    }
  }

  p,
  blockquote,
  ul,
  ol,
  dl,
  table,
  pre,
  details {
    margin-top: 0;
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.color.text.primary};
  }

  blockquote > :first-child {
    margin-top: 0;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  h1 tt,
  h1 code,
  h2 tt,
  h2 code,
  h3 tt,
  h3 code,
  h4 tt,
  h4 code,
  h5 tt,
  h5 code,
  h6 tt,
  h6 code {
    padding: 0 0.2em;
    font-size: inherit;
  }

  ul ul,
  ul ol,
  ol ol,
  ol ul {
    margin-top: 0;
    margin-bottom: 0;
    color: ${({ theme }) => theme.color.primary.dark};
  }

  li > p {
    margin-top: 1.6rem;
  }

  li + li {
    margin-top: 0.3rem;
  }

  dl {
    padding: 0;
  }

  li > code {
    background-color: ${({ theme }) => theme.color.success.dark};
    font-size: ${({ theme }) => theme.size.font.md};
    color: ${({ theme }) => theme.color.text.secondary};
  }

  g-emoji {
    display: inline-block;
    min-width: 1ch;
    font-family: 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 1em;
    font-style: normal !important;
    font-weight: 400;
    line-height: 1;
    vertical-align: -0.075em;
  }

  g-emoji img {
    width: 1em;
    height: 1em;
  }
`;

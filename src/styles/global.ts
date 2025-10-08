import { css } from "@emotion/react";

import Reset from "./reset";

const GlobalStyle = css`
  ${Reset}
  * {
    box-sizing: border-box;
  }

  :root {
    --min-width: 375px;
    --max-width: 600px;
    --tablet-min-width: 768px;
    --tablet-max-width: 1366px;
    --tablet-ratio-width: 1280px;
    --tablet-ratio-height: 800px;
  }

  html,
  body {
    overscroll-behavior: none;
    font-size: 62.5%;
    scrollbar-width: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  select {
    background: #fff;
  }

  #root {
    width: 100%;
    min-width: var(--min-width);
    max-width: var(--max-width);
    min-height: 100dvh;
    background-color: #fff;
    margin: 0 auto;
  }

  @media (min-width: 430px) {
    #root {
      max-width: var(--max-width);
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;

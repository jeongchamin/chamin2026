import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-1Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-2ExtraLight') format('truetype');
    font-weight: 200;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-3Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-4Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-5Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-6SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-7Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-8ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url('/fonts/Paperlogy-9Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  html {
    font-size: 16px;  /* 데스크탑 기준 */
    font-weight: 400;

    ${({ theme }) => theme.media.mobile} {
      font-size: 15px; 
      font-weight: 400;
    }
  }

  body {
    font-family: 'Paperlogy','Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    transition: background-color 0.3s ease, color 0.3s ease;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .masonry-grid {
    display: flex;
    width: 100%;
    gap: 12px;
  }

  .masonry-column {
    display: flex;
    flex-direction: column;
  }
`;

export default GlobalStyle;
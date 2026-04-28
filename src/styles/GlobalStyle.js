import { createGlobalStyle } from "styled-components";

import Paper1 from '../assets/fonts/Paperlogy-1Thin.ttf';
import Paper2 from '../assets/fonts/Paperlogy-2ExtraLight.ttf';
import Paper3 from '../assets/fonts/Paperlogy-3Light.ttf';
import Paper4 from '../assets/fonts/Paperlogy-4Regular.ttf';
import Paper5 from '../assets/fonts/Paperlogy-5Medium.ttf';
import Paper6 from '../assets/fonts/Paperlogy-6SemiBold.ttf';
import Paper7 from '../assets/fonts/Paperlogy-7Bold.ttf';
import Paper8 from '../assets/fonts/Paperlogy-8ExtraBold.ttf';
import Paper9 from '../assets/fonts/Paperlogy-9Black.ttf';

const GlobalStyle = createGlobalStyle`

@font-face {
    font-family: 'Paperlogy';
    src: url(${Paper1}) format('truetype');
    font-weight: 100;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url(${Paper2}) format('truetype');
    font-weight: 200;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url(${Paper3}) format('truetype');
    font-weight: 300;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url(${Paper4}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url(${Paper5}) format('truetype');
    font-weight: 500;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url(${Paper6}) format('truetype');
    font-weight: 600;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url(${Paper7}) format('truetype');
    font-weight: 700;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url(${Paper8}) format('truetype');
    font-weight: 800;
  }
  @font-face {
    font-family: 'Paperlogy';
    src: url(${Paper9}) format('truetype');
    font-weight: 900;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  html {
    font-size: 16px;  /* 데스크탑 기준 */

    ${({ theme }) => theme.media.mobile} {
      font-size: 14px; 
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
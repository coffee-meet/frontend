import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { media } from "@/styles/theme";

export const globalStyle = css`
  ${emotionReset}

  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  body {
    font-family:
      "Pretendard",
      Pretendard,
      -apple-system,
      BlinkMacSystemFont,
      system-ui,
      Roboto,
      "Helvetica Neue",
      "Segoe UI",
      "Apple SD Gothic Neo",
      "Noto Sans KR",
      "Malgun Gothic",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      sans-serif !important;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    ${media.mobile} {
      -ms-overflow-style: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  body,
  html {
    overflow: hidden;
    background-color: #000;
  }

  div {
    box-sizing: border-box;
  }
  button {
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
  }
  button:focus {
    outline: none;
  }
  input:focus {
    outline: none;
  }
  textarea:focus {
    outline: none;
  }
  .wave {
    animation: complete 2s;
    opacity: 0;
  }

  @keyframes complete {
    0% {
      opacity: 1;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    100% {
      opacity: 0;
      position: absolute;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .fade-out {
    opacity: 0;
    transition: opacity 1s ease-in-out;
  }

  .is_animating {
    animation: like 0.5s 1;
  }

  @keyframes like {
    0% {
      transform: scale(1);
    }
    90% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1.1);
    }
  }

  .dark-mode {
    color: white;
  }
  .postTitle {
    @media (max-width: 375px) {
      font-size: 20px;
    }
  }
`;

import React, { Component } from "react";
import styled, { css, createGlobalStyle } from "styled-components";

const textCrop = (
  lineHeight = 1.3,
  topAdjustment = 0,
  bottomAdjustment = 0
) => {
  const topCrop = 8;
  const bottomCrop = 8;
  const cropFontSize = 36;
  const cropLineHeight = 1.2;

  const dynamicTopCrop =
    (topCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2)) /
    cropFontSize;

  const dynamicBottomCrop =
    (bottomCrop + (lineHeight - cropLineHeight) * (cropFontSize / 2)) /
    cropFontSize;

  const marginBottom = `-${dynamicTopCrop + topAdjustment}em`;

  const marginTop = `-${dynamicBottomCrop + bottomAdjustment}em`;

  return css`
    line-height: ${lineHeight};

    &::before,
    &::after {
      content: "";
      display: block;
      height: 0;
      width: 0;
    }

    &::before {
      margin-bottom: ${marginBottom};
    }

    &::after {
      margin-top: ${marginTop};
    }
  `;
};

const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
 }

 html, body, #root {
   margin: 0;
   padding: 0
 }

 body {
   font-family: "Muli", sans-serif;
   padding: 1em;
 }
`;

const StyledApp = styled.div`
  .container {
    border: 1px solid magenta;
    width: 50%;

    :not(:last-child) {
      margin-bottom: 1em;
    }
  }

  .text-crop {
    ${textCrop(undefined, 0, 0)};
  }

  .text-1 {
    font-size: 1em;
  }

  .text-2 {
    font-size: 2em;
  }

  .text-3 {
    font-size: 4em;
  }
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />

        <h1>Without text crop</h1>
        <div className="container">
          <span className="text-1">
            Laborum sint deserunt qui ex consequat proident voluptate et
            excepteur elit quis.
          </span>
        </div>

        <div className="container">
          <span className="text-2">
            Nulla laborum nostrud officia id nulla eiusmod minim ea.
          </span>
        </div>

        <div className="container">
          <span className="text-3">
            Nulla laborum nostrud officia id nulla eiusmod minim ea.
          </span>
        </div>

        <h1>With text crop</h1>
        <div className="container">
          <span className="text-1 text-crop">
            Laborum sint deserunt qui ex consequat proident voluptate et
            excepteur elit quis.
          </span>
        </div>

        <div className="container">
          <span className="text-2 text-crop">
            Voluptate anim ad nisi nulla reprehenderit laborum.
          </span>
        </div>

        <div className="container">
          <span className="text-3 text-crop">
            Voluptate anim ad nisi nulla reprehenderit laborum.
          </span>
        </div>
      </StyledApp>
    );
  }
}

export default App;

# Text Crop

I've recently come across this article https://medium.com/eightshapes-llc/cropping-away-negative-impacts-of-line-height-84d744e016ce. Basically it's a solution for cropping out the white space in text elements produced by line-height.

In this React project I've translated the utility function in the article for use with styled-components. This comes very useful for laying out UIs with precision.

Demo: https://iansanwich.github.io/study-text-crop/

![image](https://user-images.githubusercontent.com/36854142/51173988-abcc7900-18f1-11e9-96a6-565cf9c28a8a.png)

```js
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
```

--- 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

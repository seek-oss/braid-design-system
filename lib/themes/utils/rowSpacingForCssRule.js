import { px } from './toUnit';

export default (ruleName, { rowHeight, rowSpacing }) => {
  const css = {
    '.none': {
      [ruleName]: 0
    }
  };

  Object.keys(rowSpacing).forEach(size => {
    css[`.${size}`] = {
      [ruleName]: px(rowSpacing[size] * rowHeight)
    };
  });

  return css;
};

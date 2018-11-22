import { px } from './toUnit';

export default (ruleName, { columnWidth, columnSpacing }) => {
  const css = {
    '.none': {
      [ruleName]: 0
    }
  };

  Object.keys(columnSpacing).forEach(size => {
    css[`.${size}`] = {
      [ruleName]: px(columnSpacing[size] * columnWidth)
    };
  });

  return css;
};

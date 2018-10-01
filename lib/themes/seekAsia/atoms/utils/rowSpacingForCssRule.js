import tokens from '../../tokens/tokens';
const { rowHeight, rowSpacing } = tokens;

export default ruleName => {
  const css = {
    '.none': {
      [ruleName]: 0
    }
  };

  Object.keys(rowSpacing).forEach(size => {
    css[`.${size}`] = {
      [ruleName]: `${rowSpacing[size] * rowHeight}px`
    };
  });

  return css;
};

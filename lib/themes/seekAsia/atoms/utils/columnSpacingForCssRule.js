import tokens from '../../tokens/tokens';
const { columnWidth, columnSpacing } = tokens;

export default ruleName => {
  const css = {
    '.none': {
      [ruleName]: 0
    }
  };

  Object.keys(columnSpacing).forEach(size => {
    css[`.${size}`] = {
      [ruleName]: `${columnSpacing[size] * columnWidth}px`
    };
  });

  return css;
};

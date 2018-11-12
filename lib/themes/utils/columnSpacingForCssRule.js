export default (ruleName, { columnWidth, columnSpacing }) => {
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

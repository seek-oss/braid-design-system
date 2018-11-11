export default (ruleName, { rowHeight, rowSpacing }) => {
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

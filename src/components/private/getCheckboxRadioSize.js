export default theme => {
  const scale = theme.tokens.type.standard.size / 28;
  const rows = Math.round(theme.tokens.interactionRows * scale);

  return rows * theme.tokens.rowHeight;
};

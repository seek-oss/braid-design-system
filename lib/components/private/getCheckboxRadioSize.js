export default theme => {
  const scale = theme.tokens.text.standard.desktop.size / 28;
  const rows = Math.round(theme.tokens.interactionRows * scale);

  return rows * theme.tokens.rowHeight;
};

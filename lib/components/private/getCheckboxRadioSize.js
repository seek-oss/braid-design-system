export default theme => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = theme.tokens.text.standard.mobile.size / 28;
  const rows = Math.round(theme.tokens.interactionRows * scale);

  return rows * theme.tokens.rowHeight;
};

import { Theme } from 'treat/theme';

export default ({ grid, touchableSize, typography }: Theme) => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = (typography.text.standard.mobile.rows * grid) / 42;
  const rows = Math.round(touchableSize * scale);

  return grid * rows;
};

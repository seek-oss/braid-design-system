import { Theme } from 'treat/theme';

export default ({ grid, touchableSpace, typography }: Theme) => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = typography.text.standard.mobile.size / 28;
  const rows = Math.round(touchableSpace * scale);

  return grid * rows;
};

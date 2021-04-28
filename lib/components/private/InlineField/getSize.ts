import { Theme } from 'treat/theme';

export default (
  textSize: keyof Theme['typography']['text'],
  { grid, touchableSize, typography }: Theme,
) => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = (typography.text[textSize].mobile.rows * grid) / 42;
  const rows = Math.round(touchableSize * scale);

  return grid * rows;
};

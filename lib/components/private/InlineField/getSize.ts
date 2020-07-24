import { Theme } from 'treat/theme';

export default ({ grid, touchableSize, typography }: Theme) => {
  if ('fontSize' in typography.text.standard.mobile) {
    // We currently don't support responsive checkboxes and
    // radio buttons, but nobody actually needs it (so far)
    const scale = typography.text.standard.mobile.fontSize / 28;
    const rows = Math.round(touchableSize * scale);

    return grid * rows;
  }

  return typography.text.standard.mobile.capHeight * 2;
};

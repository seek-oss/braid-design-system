import { Theme } from 'treat/theme';

export default ({ spacing, typography, utils }: Theme) => {
  // We currently don't support responsive checkboxes and
  // radio buttons, but nobody actually needs it (so far)
  const scale = typography.text.standard.mobile.size / 28;
  const rows = Math.round(spacing.touchableRows * scale);

  return utils.rows(rows);
};

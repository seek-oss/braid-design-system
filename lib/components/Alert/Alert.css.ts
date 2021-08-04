import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';

const toneVariants = {
  promote: 'promote',
  info: 'info',
  positive: 'positive',
  caution: 'caution',
  critical: 'critical',
} as const;

export const boxShadowForTone = styleVariants(toneVariants, (tone) => ({
  boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.alertBorderColor[tone]}`,
}));

export const keylineForTone = styleVariants(toneVariants, (tone) => ({
  background: vars.borderColor[tone],
}));

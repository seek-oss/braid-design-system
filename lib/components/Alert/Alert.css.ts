import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';

export const boxShadowForTone = styleVariants(
  {
    promote: 'promote',
    info: 'info',
    positive: 'positive',
    caution: 'caution',
    critical: 'critical',
  } as const,
  (borderColor) => ({
    boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.alertBorderColor[borderColor]}`,
  }),
);

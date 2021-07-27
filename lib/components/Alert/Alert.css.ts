import { styleVariants } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';

export const boxShadowForTone = styleVariants(
  {
    promote: 'promoteLight',
    info: 'infoLight',
    positive: 'positiveLight',
    caution: 'cautionLight',
    critical: 'criticalLight',
  } as const,
  (borderColor) => ({
    boxShadow: `inset 0 0 0 ${vars.borderWidth.standard} ${vars.borderColor[borderColor]}`,
  }),
);

// DELETE ME?
import { styleVariants } from '@vanilla-extract/css';
import { pick } from 'lodash';
import { vars } from '../../themes/vars.css';

const tones = ['promote', 'info', 'positive', 'caution', 'critical'] as const;

export const keylineBackground = styleVariants(
  pick(vars.foregroundColor, tones),
  (background) => ({
    background,
  }),
);

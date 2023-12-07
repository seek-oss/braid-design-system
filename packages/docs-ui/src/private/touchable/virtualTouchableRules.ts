import type { CSSProperties } from '@vanilla-extract/css';

import { hitArea } from './hitArea';

export const virtualTouchableRules: CSSProperties = {
  transform: 'translateY(-50%)',
  minHeight: hitArea,
  minWidth: hitArea,
  height: '100%',
  top: '50%',
};

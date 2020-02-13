import { style } from 'sku/treat';
import { debugTouchable } from './debugTouchable';
import { hitArea } from './hitArea';

export const virtualTouchable = style({
  position: 'relative',
  ':after': {
    content: '""',
    position: 'absolute',
    transform: 'translateY(-50%)',
    minHeight: hitArea,
    minWidth: hitArea,
    height: '100%',
    top: '50%',
    left: -10,
    right: -10,
  },
  selectors: {
    ...debugTouchable({ after: true }),
  },
});

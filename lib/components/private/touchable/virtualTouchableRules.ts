import { hitArea } from './hitArea';

export const virtualTouchableRules = {
  transform: 'translateY(-50%)',
  minHeight: hitArea,
  minWidth: hitArea,
  height: '100%',
  top: '50%',
};

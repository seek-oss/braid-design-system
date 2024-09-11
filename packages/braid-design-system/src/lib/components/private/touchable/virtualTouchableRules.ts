import { hitArea } from './hitArea';

/*
These rules are shared between locations that cannot share a common class
e.g. between a pseudo element and a regular dom element
*/
export const virtualTouchableRules = {
  minHeight: hitArea,
  minWidth: hitArea,
  height: '100%',
  width: '100%',
  transform: 'translate(-50%, -50%)',
  top: '50%',
  left: '50%',
};

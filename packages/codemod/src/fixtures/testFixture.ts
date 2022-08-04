// @ts-ignore
import { atoms } from 'braid-design-system/css';
// @ts-ignore
import { myShadow } from './shadows';

const atomProps = {
  [myShadow ? 'boxShadow' : 'card']: ['borderNeutralLight', 'borderFormAccent'],
};

export const className = atoms({
  top: 0,
  boxShadow: 'borderNeutralLight',
  ...atomProps,
});

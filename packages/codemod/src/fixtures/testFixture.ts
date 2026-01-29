// eslint-disable-next-line no-restricted-imports
import { atoms } from 'braid-src/css';

// @ts-expect-error
import { myShadow } from './shadows';

const atomProps = {
  [myShadow ? 'boxShadow' : 'card']: ['borderNeutralLight', 'borderFormAccent'],
};

export const className = atoms({
  top: 0,
  boxShadow: 'borderNeutralLight',
  ...atomProps,
});

import { responsiveAtomicStyles, unresponsiveAtomicStyles } from './atoms.css';
import { createAtomsFn } from './sprinkles/createAtomsFn';

// console.log(responsiveAtomicStyles, unresponsiveAtomicStyles);

export const atoms = createAtomsFn({
  ...responsiveAtomicStyles,
  ...unresponsiveAtomicStyles,
});

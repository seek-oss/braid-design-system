import {
  pseudoAtomicStyles,
  responsiveAtomicStyles,
  unresponsiveAtomicStyles,
} from './atoms.css';
import { createAtomsFn } from './sprinkles/createAtomsFn';

export const atoms = createAtomsFn({
  ...responsiveAtomicStyles,
  ...unresponsiveAtomicStyles,
  ...pseudoAtomicStyles,
});

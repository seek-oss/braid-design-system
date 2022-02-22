import { ResponsiveSpace } from '../css/atoms/atoms';
import { space as spaceValues } from '../css/atoms/atomicProperties';

const validSpaceValues = Object.keys(spaceValues);

export const cleanSpaceValue = (space?: ResponsiveSpace) =>
  typeof space === 'undefined' ||
  typeof space === 'boolean' ||
  (typeof space === 'string' && !validSpaceValues.includes(space))
    ? 'none'
    : space;

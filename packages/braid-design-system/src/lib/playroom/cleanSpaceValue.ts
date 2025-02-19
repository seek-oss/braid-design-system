import { space as spaceValues } from '../css/atoms/atomicProperties';
import type { ResponsiveSpace } from '../css/atoms/atoms';

import { breakpointNames } from './../css/breakpoints';

const validSpaceValues = Object.keys(spaceValues);

export const cleanSpaceValue = (space?: ResponsiveSpace) => {
  const validResponsiveObject =
    typeof space === 'object' &&
    Object.keys(space).some(
      (bp) =>
        breakpointNames.includes(bp as (typeof breakpointNames)[number]) &&
        validSpaceValues.includes(space[bp as keyof typeof space]),
    );
  const validArray =
    Array.isArray(space) && space.some((s) => validSpaceValues.includes(s));
  const validSpace =
    typeof space === 'string' && validSpaceValues.includes(space);

  return validSpace || validResponsiveObject || validArray ? space : undefined;
};

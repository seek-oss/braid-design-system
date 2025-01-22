import { useContext } from 'react';

import { breakpointContext } from '../BraidProvider/BreakpointContext';

import { resolveResponsiveObject } from './resolveResponsiveObject';

import type { RequiredResponsiveObject } from '../../css/atoms/sprinkles.css';

export const useResponsiveValue = () => {
  const breakpointName = useContext(breakpointContext);

  return function responsiveValue<Value>(
    value: RequiredResponsiveObject<Value>,
  ): Value | null {
    return breakpointName
      ? resolveResponsiveObject(breakpointName, value)
      : null;
  };
};

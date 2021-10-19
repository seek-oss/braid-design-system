import { useContext } from 'react';
import type { RequiredResponsiveObject } from '../../css/atoms/sprinkles.css';

import { breakpointContext } from '../BraidProvider/BreakpointContext';
import { resolveResponsiveObject } from './resolveResponsiveObject';

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

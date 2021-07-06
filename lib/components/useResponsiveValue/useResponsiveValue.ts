import { useContext } from 'react';
import { RequiredResponsiveObject } from '../../css/atoms/sprinkles.css';

import { breakpointContext } from '../BraidProvider/BreakpointContext';
import { resolveResponsiveObject } from './resolveResponsiveObject';

export const useResponsiveValue = () => {
  const breakpointName = useContext(breakpointContext);

  return function responsiveValue<
    ResponsiveValue extends RequiredResponsiveObject<any>
  >(value: ResponsiveValue): ResponsiveValue[keyof ResponsiveValue] | null {
    return breakpointName
      ? resolveResponsiveObject(breakpointName, value)
      : null;
  };
};

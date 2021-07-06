import { RequiredResponsiveObject } from '../../css/atoms/sprinkles.css';
import { Breakpoint, breakpointNames } from '../../css/breakpoints';

export function resolveResponsiveObject<
  ResponsiveValue extends RequiredResponsiveObject<any>
>(
  breakpointName: Breakpoint,
  value: ResponsiveValue,
): ResponsiveValue[keyof ResponsiveValue] | null {
  let resolvedValue: ResponsiveValue[keyof ResponsiveValue] | null = null;

  for (let i = 0; i < breakpointNames.length; i++) {
    const currentBreakpointName = breakpointNames[i];
    const valueForBreakpoint = value[currentBreakpointName];

    if (valueForBreakpoint !== undefined) {
      resolvedValue = valueForBreakpoint;
    }

    if (breakpointName === currentBreakpointName) {
      return resolvedValue;
    }
  }

  return resolvedValue;
}

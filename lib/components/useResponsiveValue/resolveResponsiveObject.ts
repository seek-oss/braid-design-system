import { RequiredResponsiveObject } from '../../css/atoms/sprinkles.css';
import { Breakpoint, breakpointNames } from '../../css/breakpoints';

export function resolveResponsiveObject<Value>(
  breakpointName: Breakpoint,
  value: RequiredResponsiveObject<Value>,
): Value | null {
  let resolvedValue: Value | null = null;

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

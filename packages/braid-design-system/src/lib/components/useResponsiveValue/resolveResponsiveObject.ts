import { type Breakpoint, breakpointNames } from '../../css/breakpoints';

import type { RequiredResponsiveObject } from '../../css/atoms/sprinkles.css';

export function resolveResponsiveObject<Value>(
  breakpointName: Breakpoint,
  value: RequiredResponsiveObject<Value>,
): Value | null {
  let resolvedValue: Value | null = null;

  for (const currentBreakpointName of breakpointNames) {
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

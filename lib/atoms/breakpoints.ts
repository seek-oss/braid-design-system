export const breakpointNames = ['mobile', 'tablet', 'desktop'] as const;

export const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
} as const;

export type Breakpoint = keyof typeof breakpoints;

import { Breakpoint, breakpointNames } from '../css/breakpoints';

export interface ResponsiveRangeProps {
  above?: Exclude<Breakpoint, 'wide'>;
  below?: Exclude<Breakpoint, 'mobile'>;
}

export const resolveResponsiveRangeProps = (
  props: ResponsiveRangeProps,
): [boolean, boolean, boolean, boolean] => {
  const { above, below } = props;

  if (!above && !below) {
    return [false, false, false, false];
  }

  const startIndex = above ? breakpointNames.indexOf(above) + 1 : 0;
  const endIndex = below
    ? breakpointNames.indexOf(below) - 1
    : breakpointNames.length - 1;
  const range = breakpointNames.slice(startIndex, endIndex + 1);

  const includeMobile = range.indexOf('mobile') >= 0;
  const includeTablet = range.indexOf('tablet') >= 0;
  const includeDesktop = range.indexOf('desktop') >= 0;
  const includeWide = range.indexOf('wide') >= 0;

  return [includeMobile, includeTablet, includeDesktop, includeWide];
};

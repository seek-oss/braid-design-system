import { breakpointNames } from '../atoms/breakpoints';
export var resolveResponsiveRangeProps = function resolveResponsiveRangeProps(props) {
  const above = props.above,
      below = props.below;

  if (!above && !below) {
    return [false, false, false];
  }

  const startIndex = above ? breakpointNames.indexOf(above) + 1 : 0;
  const endIndex = below ? breakpointNames.indexOf(below) - 1 : breakpointNames.length - 1;
  const range = breakpointNames.slice(startIndex, endIndex + 1);
  const includeMobile = range.indexOf('mobile') >= 0;
  const includeTablet = range.indexOf('tablet') >= 0;
  const includeDesktop = range.indexOf('desktop') >= 0;
  return [includeMobile, includeTablet, includeDesktop];
};
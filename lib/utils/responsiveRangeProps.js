import { breakpointNames } from '../atoms/breakpoints';
export var resolveResponsiveRangeProps = function resolveResponsiveRangeProps(props) {
  var above = props.above,
      below = props.below;

  if (!above && !below) {
    return [false, false, false];
  }

  var startIndex = above ? breakpointNames.indexOf(above) + 1 : 0;
  var endIndex = below ? breakpointNames.indexOf(below) - 1 : breakpointNames.length - 1;
  var range = breakpointNames.slice(startIndex, endIndex + 1);
  var includeMobile = range.indexOf('mobile') >= 0;
  var includeTablet = range.indexOf('tablet') >= 0;
  var includeDesktop = range.indexOf('desktop') >= 0;
  return [includeMobile, includeTablet, includeDesktop];
};
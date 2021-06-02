import { vars as internalVars } from '../lib/themes/vars.css';

const {
  grid,
  space,
  touchableSize,
  contentWidth,
  backgroundColor,
  foregroundColor,
  borderColor,
  borderRadius,
  borderWidth,
} = internalVars;

export const vars = {
  grid,
  space,
  touchableSize,
  contentWidth,
  backgroundColor,
  foregroundColor,
  borderColor,
  borderRadius,
  borderWidth,
};

export { boxStyles } from '../lib/components/Box/boxStyles';
export {
  breakpoints,
  Breakpoint,
  responsiveStyle,
} from '../lib/themes/vanillaUtils';

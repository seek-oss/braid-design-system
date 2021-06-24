import { vars as internalVars } from '../lib/themes/vars.css';
import { atoms as internalAtoms } from '../lib/atoms/atoms';
import { responsiveStyle } from '../lib/atoms/responsiveStyle';
import { breakpoints } from '../lib/atoms/breakpoints';
import { globalHeadingStyle, globalTextStyle } from '../lib/hooks/typography';
var grid = internalVars.grid,
    space = internalVars.space,
    touchableSize = internalVars.touchableSize,
    backgroundColor = internalVars.backgroundColor,
    foregroundColor = internalVars.foregroundColor,
    textWeight = internalVars.textWeight,
    borderColor = internalVars.borderColor,
    borderRadius = internalVars.borderRadius,
    borderWidth = internalVars.borderWidth;
var vars = {
  grid: grid,
  space: space,
  touchableSize: touchableSize,
  backgroundColor: backgroundColor,
  foregroundColor: foregroundColor,
  textWeight: textWeight,
  borderColor: borderColor,
  borderRadius: borderRadius,
  borderWidth: borderWidth
};

function atoms(props) {
  if (process.env.NODE_ENV !== 'production') {
    if ('background' in props) {
      throw new Error("'background' is not available via 'atoms'. This is because Braid uses React context to dynamically apply matching tones to child elements. Please use `<Box background=\"...\">` instead.");
    }
  }

  return internalAtoms(props);
}

export { vars, atoms, breakpoints, responsiveStyle, globalTextStyle, globalHeadingStyle };
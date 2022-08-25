import { vars as internalVars } from '../themes/vars.css';
import { atoms as internalAtoms, Atoms } from '../css/atoms/atoms';
import { colorModeStyle } from '../css/colorModeStyle';
import { responsiveStyle } from '../css/responsiveStyle';
import { breakpoints } from '../css/breakpoints';
import { globalHeadingStyle, globalTextStyle } from '../hooks/typography';
import type { Breakpoint } from '../css/breakpoints';

const {
  grid,
  space,
  touchableSize,
  contentWidth,
  // TODO: COLORMODE RELEASE
  // Release new backgrounds
  backgroundColor: { surfaceDark: _, bodyDark: __, ...backgroundColor },
  foregroundColor,
  textWeight,
  borderColor,
  borderRadius,
  borderWidth,
  shadow,
} = internalVars;

const vars = {
  grid,
  space,
  touchableSize,
  contentWidth,
  backgroundColor,
  foregroundColor,
  textWeight,
  borderColor,
  borderRadius,
  borderWidth,
  shadow,
};

function atoms(props: Omit<Atoms, 'background'>) {
  if (process.env.NODE_ENV !== 'production') {
    if ('background' in props) {
      throw new Error(
        `'background' is not available via 'atoms'. This is because Braid uses React context to dynamically apply matching tones to child elements. Please use \`<Box background="...">\` instead.`,
      );
    }
  }

  return internalAtoms(props);
}

export {
  vars,
  atoms,
  breakpoints,
  responsiveStyle,
  colorModeStyle,
  globalTextStyle,
  globalHeadingStyle,
};
export type { Breakpoint };

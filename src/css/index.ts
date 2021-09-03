import { vars as internalVars } from '../themes/vars.css';
import { atoms as internalAtoms, Atoms } from '../css/atoms/atoms';
import { responsiveStyle } from '../css/responsiveStyle';
import { breakpoints } from '../css/breakpoints';
import { globalHeadingStyle, globalTextStyle } from '../hooks/typography';
import type { Breakpoint } from '../css/breakpoints';

const {
  grid,
  space,
  touchableSize,
  backgroundColor,
  foregroundColor,
  textWeight,
  borderColor,
  borderRadius,
  borderWidth,
} = internalVars;

const vars = {
  grid,
  space,
  touchableSize,
  backgroundColor,
  foregroundColor,
  textWeight,
  borderColor,
  borderRadius,
  borderWidth,
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
  globalTextStyle,
  globalHeadingStyle,
};
export type { Breakpoint };

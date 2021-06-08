import { vars as internalVars } from '../lib/themes/vars.css';
import { atoms as internalAtoms, Atoms } from '../lib/atoms/atoms';
import { responsiveStyle } from '../lib/atoms/responsiveStyle';
import { breakpoints } from '../lib/atoms/breakpoints';
import type { Breakpoint } from '../lib/atoms/breakpoints';

const {
  grid,
  space,
  touchableSize,
  backgroundColor,
  foregroundColor,
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

export { vars, atoms, breakpoints, responsiveStyle };
export type { Breakpoint };

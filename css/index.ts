import { vars as internalVars } from '../lib/themes/vars.css';
import { atoms as internalAtoms, Atoms } from '../lib/atoms/atoms';

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

export function atoms(props: Omit<Atoms, 'background'>) {
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
  breakpoints,
  Breakpoint,
  responsiveStyle,
} from '../lib/themes/vanillaUtils';

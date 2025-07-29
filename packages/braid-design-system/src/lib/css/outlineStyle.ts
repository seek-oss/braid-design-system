import { vars } from '../themes/vars.css';

const outlineTransition = 'outline-color .125s ease';
const resetOutline = `${vars.focusRingSize} solid transparent`;
const focusOutlineColor = vars.borderColor.focus;

// Private API for creating reset and atomic style rule
export const atomicOutlineStyleRule = () => outlineStyle('&:focus-visible');

// Public API
export const outlineStyle = (selector: string) => ({
  outline: resetOutline,
  transition: outlineTransition,
  selectors: {
    [selector]: {
      outlineColor: focusOutlineColor,
    },
  },
});

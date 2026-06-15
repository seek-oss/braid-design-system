import tokens from 'braid-src/lib/themes/docs/tokens';


// What is this magive number?
const menuButton = 49;

export const headerSpaceY = 'small';
const headerPaddingY = tokens.grid * tokens.space[headerSpaceY];
export const menuButtonSize = `${menuButton}px`;
export const headerHeight = `${menuButton + (headerPaddingY * 2)}px`;
export const menuWidth = '260px';
export const gutterSize = 'medium';
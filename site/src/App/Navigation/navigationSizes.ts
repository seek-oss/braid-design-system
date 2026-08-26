import tokens from 'braid-src/lib/themes/docs/tokens';

// What is this magic number?
const menuButton = 38;

export const headerSpaceY = 'small';
const headerPaddingY = tokens.grid * tokens.space[headerSpaceY];
const headerHeightPx = menuButton + headerPaddingY * 2;
export const menuButtonSize = `${menuButton}px`;
export const headerHeight = `${headerHeightPx}px`;
export const headerScrollOffset =
  headerHeightPx + tokens.grid * tokens.space.large;
export const menuWidth = '280px';
export const gutterSize = 'medium';
export const contentBlockXLWidth = tokens.contentWidth.large + 200;

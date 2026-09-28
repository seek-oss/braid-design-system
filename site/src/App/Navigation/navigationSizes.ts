import tokens from 'braid-src/lib/themes/docs/tokens';

export const headerSpaceY = 'small';
const headerPaddingY = tokens.grid * tokens.space[headerSpaceY];

// The logo is the tallest element in the header until the nav links appear at
// the `wide` breakpoint, where small buttons set the height instead.
export const headerLogoSize = 28;
const navLinkHeight = Math.floor(tokens.touchableSize * tokens.grid * 0.8);

const headerHeightPx = headerLogoSize + headerPaddingY * 2;
const headerHeightWidePx = navLinkHeight + headerPaddingY * 2;

export const headerHeight = `${headerHeightPx}px`;
export const headerHeightWide = `${headerHeightWidePx}px`;
export const headerScrollOffset =
  headerHeightWidePx + tokens.grid * tokens.space.large;
export const menuWidth = '280px';
export const gutterSize = 'medium';
export const contentBlockXLWidth = tokens.contentWidth.large + 200;

// The breakpoint at which the side navigation becomes visible. Page spacing
// steps up at the same point, so the two stay in step.
export const sideNavBreakpoint = 'wide' as const;

// Space above page content is split across the surface wrapper and the content
// box inside it, so both parts are needed to offset the full-bleed home hero.
export const pageContentSpaceY = 'small';
export const pageContentSpaceTop = {
  mobile: 'medium',
  [sideNavBreakpoint]: 'xxlarge',
} as const;

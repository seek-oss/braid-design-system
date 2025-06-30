import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const linkableHeading = style({
  display: 'inline-block',
  maxWidth: 'fit-content',
  scrollMarginBlockStart: vars.space.small,
  borderRadius: vars.borderRadius.small,
  outlineOffset: vars.space.xsmall,
});
export const hashLink = style({
  selectors: {
    [`${linkableHeading}:hover &, ${linkableHeading}:focus-visible &`]: {
      opacity: 1,
    },
  },
});

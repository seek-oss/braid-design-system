import { style } from '@vanilla-extract/css';
import { atoms, vars } from 'braid-design-system/css';

export const linkableHeading = style([
  atoms({
    display: 'block',
    borderRadius: 'small',
  }),
  {
    maxWidth: 'fit-content',
    scrollMarginBlockStart: vars.space.small,
    outlineOffset: vars.space.xsmall,
  },
]);

export const hashLink = style({
  selectors: {
    [`${linkableHeading}:hover &, ${linkableHeading}:focus-visible &`]: {
      opacity: 1,
    },
  },
});

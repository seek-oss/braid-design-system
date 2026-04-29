import { style } from '@vanilla-extract/css';
import { atoms, vars } from 'braid-design-system/css';

export const titleLink = style([
  atoms({
    display: 'flex',
    borderRadius: 'small',
    gap: 'xsmall',
    alignItems: 'center',
  }),
  {
    maxWidth: 'fit-content',
    scrollMarginBlockStart: vars.space.small,
    outlineOffset: vars.space.xsmall,
  },
]);

export const showOnHover = style({
  selectors: {
    [`${titleLink}:hover &, ${titleLink}:focus-visible &`]: {
      opacity: 1,
    },
  },
});

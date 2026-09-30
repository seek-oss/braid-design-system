import { style } from '@vanilla-extract/css';

export const inlineFlex = style({
  display: 'inline-flex',
  gap: '1px',
});

// The below styles are in support of showing
// the rating/review count separator only when
// the content is visible on a single line
const separatorSlot = '1em';

export const clip = style({
  display: 'block',
  overflowInline: 'clip',
  overflowBlock: 'visible',
});

export const row = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'baseline',
  marginInlineStart: `-${separatorSlot}`,
});

export const group = style({
  paddingInlineStart: separatorSlot,
});

export const reviews = style({
  position: 'relative',
  paddingInlineStart: separatorSlot,
  whiteSpace: 'nowrap',
  '::before': {
    content: ['"·"', '"·" / ""'],
    position: 'absolute',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: separatorSlot,
  },
});

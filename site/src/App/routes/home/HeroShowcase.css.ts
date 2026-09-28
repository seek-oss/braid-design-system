import { style } from '@vanilla-extract/css';

export const showcase = style({
  position: 'relative',
  minHeight: 280,
  width: '100%',
});

const tile = style({
  position: 'absolute',
});

export const tileBadges = style([
  tile,
  {
    top: 8,
    left: '8%',
    zIndex: 2,
  },
]);

export const tileField = style([
  tile,
  {
    top: 72,
    left: '18%',
    width: '72%',
    zIndex: 3,
  },
]);

export const tileToggle = style([
  tile,
  {
    top: 188,
    left: '4%',
    // Toggle bolds its label when on, so pin the width to stop the card resizing
    width: 240,
    zIndex: 2,
  },
]);

export const tileButton = style([
  tile,
  {
    top: 20,
    right: 30,
    zIndex: 4,
  },
]);

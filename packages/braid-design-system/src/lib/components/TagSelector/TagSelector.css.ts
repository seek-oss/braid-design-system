import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../css/responsiveStyle';

// Todo - see if you can reuse style from Autosuggest.css.ts
const calcMenuHeight = (numSuggestions: number) =>
  calc(vars.touchableSize)
    .multiply(numSuggestions)
    .add(vars.space.xxsmall)
    .toString();

// Todo - see if you can reuse style from Autosuggest.css.ts
export const menu = style(
  responsiveStyle({
    mobile: {
      maxHeight: calcMenuHeight(6),
      overflowY: 'auto',
    },
    tablet: {
      maxHeight: calcMenuHeight(8),
    },
  }),
);

export const TagOption = style({
  cursor: 'pointer',
  listStyle: 'none',

  ':hover': {
    backgroundColor: 'gainsboro',
  },
});

export const ActiveTagOption = style({
  cursor: 'pointer',
  listStyle: 'none',
  backgroundColor: 'lightgrey',

  ':hover': {
    backgroundColor: 'lightgrey',
  },
});

export const SelectedTagsList = style({
  listStyle: 'none',
  padding: 0,
  display: 'flex',
  gap: '6px',
});

export const SelectedTag = style({
  display: 'inline-block',
  backgroundColor: 'lightgrey',
  padding: '16px',
});

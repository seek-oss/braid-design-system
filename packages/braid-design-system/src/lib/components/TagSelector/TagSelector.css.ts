import { style } from '@vanilla-extract/css';

export const Dropdown = style({
  border: '2px solid black',
  width: 'fit-content',
  paddingInlineEnd: '16px',
  position: 'absolute',
  top: '100%',
  backgroundColor: 'white',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
  zIndex: 2,
});

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

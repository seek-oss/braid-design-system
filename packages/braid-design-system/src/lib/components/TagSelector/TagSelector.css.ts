import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const Dropdown = style({
  border: '2px solid black',
  width: 'fit-content',
  paddingInlineEnd: '16px',
  position: 'absolute',
  top: '100%',
  backgroundColor: 'white',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
});

// Todo combine InactiveTagOption and ActiveTagOption styles properly
export const InactiveTagOption = style({
  listStyle: 'none',

  ':hover': {
    backgroundColor: 'gainsboro',
  },
});

export const ActiveTagOption = style({
  backgroundColor: 'lightgrey',
  listStyle: 'none',
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
  padding: '4px',
});

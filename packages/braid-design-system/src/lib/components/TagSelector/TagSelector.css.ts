import { style } from '@vanilla-extract/css';

export const Wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
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

export const ActiveTagOption = style({
  backgroundColor: 'lightgrey',
});

import { style } from 'sku/treat';

export const source = style({
  position: 'absolute',
  top: 0,
  right: 0,
  height: '10vh',
  width: '10vw',
  minHeight: '80px',
  minWidth: '80px',
});

export const sourceLink = style({
  color: 'white',
  outline: 'none',
  ':focus': {
    transition: '0.2s ease',
    color: 'DeepSkyBlue',
  },
});

export const container = style({});
export const actionsContainer = style({});

export const content = style({
  height: '100vh',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    [`& ${container}`]: {
      maxWidth: '380px',
    },
    [`& ${actionsContainer}`]: {
      maxWidth: '450px',
    },
  },
});

export const linkButton = style({
  width: '100%',
  textDecoration: 'none',
  ':hover': {
    textDecoration: 'none',
    cursor: 'pointer',
  },
});

export const subtitle = style({
  flexWrap: 'wrap',
  justifyContent: 'center',
  selectors: {
    '& > *': {
      whiteSpace: 'nowrap',
    },
  },
});

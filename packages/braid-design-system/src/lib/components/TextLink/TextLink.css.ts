import {
  assignVars,
  createThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { darkMode } from '../../css/atoms/sprinkles.css';
import { vars } from '../../themes/vars.css';

const textLinkVars = createThemeContract({
  color: null,
  colorHover: null,
  textDecoration: null,
  textDecorationHover: null,
});

const lightModeRegularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.link,
  colorHover: vars.foregroundColor.linkHover,
  textDecoration: 'none',
  textDecorationHover: 'underline',
});

const darkModeRegularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.linkLight,
  colorHover: vars.foregroundColor.linkLight,
  textDecoration: 'none',
  textDecorationHover: 'underline',
});

const weakLinkVars = assignVars(textLinkVars, {
  color: 'inherit',
  colorHover: 'inherit',
  textDecoration: 'underline',
  textDecorationHover: 'underline',
});

export const base = style({
  color: textLinkVars.color,
  textDecoration: textLinkVars.textDecoration,
  textDecorationThickness: '0.1em',
  textUnderlineOffset: 3,
  ':hover': {
    color: textLinkVars.colorHover,
    textDecoration: textLinkVars.textDecorationHover,
    /*
      Duplicating the thickness rule due to inconsistent support
      for shorthand properties of `text-decoration`. Without this,
      applying the above decoration rule resets the thickness in
      browsers that do support shorthands.

      We also cannot use the long-form `text-decoration-line` due
      to browser support policy of Edge 16+.
    */
    textDecorationThickness: '0.1em',
  },
  ':focus': {
    color: textLinkVars.colorHover,
  },
});

export const weakLink = style({
  vars: weakLinkVars,
});

export const regularLinkLightMode = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: lightModeRegularLinkVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: darkModeRegularLinkVars,
      },
    },
  },
});

export const regularLinkDarkMode = styleVariants({
  light: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: lightModeRegularLinkVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: darkModeRegularLinkVars,
      },
    },
  },
});

export const visitedLightMode = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkMode}) &:visited`]: {
        color: vars.foregroundColor.linkVisited,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(${darkMode}) &:visited`]: {
        color: vars.foregroundColor.linkLightVisited,
      },
    },
  },
});

export const visitedDarkMode = styleVariants({
  light: {
    selectors: {
      [`html${darkMode} &:visited`]: {
        color: vars.foregroundColor.linkVisited,
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkMode} &:visited`]: {
        color: vars.foregroundColor.linkLightVisited,
      },
    },
  },
});

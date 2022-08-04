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
  fontWeight: null,
  textDecoration: null,
  textDecorationHover: null,
});

const lightModeRegularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.link,
  colorHover: vars.foregroundColor.linkHover,
  fontWeight: vars.textWeight.medium,
  textDecoration: 'none',
  textDecorationHover: 'underline',
});

const darkModeRegularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.linkLight,
  colorHover: vars.foregroundColor.linkLight,
  fontWeight: vars.textWeight.medium,
  textDecoration: 'none',
  textDecorationHover: 'underline',
});

const weakLinkVars = assignVars(textLinkVars, {
  color: 'inherit',
  colorHover: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'underline',
  textDecorationHover: 'underline',
});

export const base = style({
  color: textLinkVars.color,
  fontWeight: textLinkVars.fontWeight,
  textDecoration: textLinkVars.textDecoration,
  ':hover': {
    color: textLinkVars.colorHover,
    textDecoration: textLinkVars.textDecorationHover,
  },
  ':focus': {
    color: textLinkVars.colorHover,
  },
});

export const weakLink = style({
  vars: weakLinkVars,
});

export const inheritLinkColor = style({});

export const regularLinkLightMode = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: lightModeRegularLinkVars,
      },
      [`html:not(${darkMode}) ${inheritLinkColor} > &`]: {
        vars: weakLinkVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: darkModeRegularLinkVars,
      },
      [`html:not(${darkMode}) ${inheritLinkColor} > &`]: {
        vars: weakLinkVars,
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
      [`html${darkMode} ${inheritLinkColor} > &`]: {
        vars: weakLinkVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: darkModeRegularLinkVars,
      },
      [`html${darkMode} ${inheritLinkColor} > &`]: {
        vars: weakLinkVars,
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

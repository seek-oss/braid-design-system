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
});

const lightModeRegularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.link,
  colorHover: vars.foregroundColor.linkHover,
});

const darkModeRegularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.linkLight,
  colorHover: vars.foregroundColor.linkLight,
});

const weakLinkVars = assignVars(textLinkVars, {
  color: 'inherit',
  colorHover: 'inherit',
});

const textDecorationThickness = '0.08em';

export const base = style({
  color: textLinkVars.color,
  textDecoration: vars.linkDecoration,
  textDecorationThickness,
  textUnderlineOffset: 3,
  ':hover': {
    color: textLinkVars.colorHover,
    textDecoration: 'underline',
    /*
      Duplicating the thickness property due to inconsistent support
      for shorthand properties of `text-decoration`. Without this,
      applying the above decoration rule resets the thickness in
      browsers that do support shorthands.

      We also cannot use the long-form `text-decoration-line` due
      to browser support policy of Edge 16+.
    */
    textDecorationThickness,
  },
  ':focus-visible': {
    color: textLinkVars.colorHover,
    outline: `${vars.focusRingSize} solid ${vars.borderColor.focus}`,
    outlineOffset: '0.2em',
    borderRadius: vars.borderRadius.small,
  },
});

export const weakLink = style({
  vars: weakLinkVars,
  textDecoration: 'underline',
  /*
    Duplicating the thickness property again as the `textDecoration`
    property above overrides the `textDecorationThickness` property
    in the `base` style due to CSS rule ordering. Without this property,
    weak links were receiving `auto` thickness instead of the desired
    value.
  */
  textDecorationThickness,
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

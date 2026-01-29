import { createVar, style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms, colorModeStyle, vars } from 'braid-src/css';

export const navItemPaddingY = 'medium' as const;
export const navItemPaddingX = ['small', 'medium'] as const;

export const docNavLink = style([
  atoms({
    borderRadius: 'standard',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingX: navItemPaddingX,
  }),
  {
    outlineOffset: calc.negate(vars.space.xxsmall),
  },
]);

const activeUnderlineVar = createVar();

export const activeUnderline = style({
  height: vars.borderWidth.large,
  background: activeUnderlineVar,
});

export const inactiveUnderlineCorrection = style({
  marginTop: calc.negate(vars.borderWidth.standard),
});

export const centerHorizontally = style({
  left: '50%',
  transform: 'translateX(-50%)',
});

export const activeUnderlineColor = styleVariants({
  light: colorModeStyle({
    lightMode: {
      vars: {
        [activeUnderlineVar]: vars.borderColor.neutral,
      },
    },
  }),
  dark: colorModeStyle({
    darkMode: {
      vars: {
        [activeUnderlineVar]: vars.borderColor.neutralLight,
      },
    },
  }),
});

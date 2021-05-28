import {
  createTheme,
  composeStyles,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from './../../themes/themeVars.css';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { fontSize, capsize, leading, font } from './capsize.css';
import { mapToProperty } from '../../utils';
import { BackgroundVariant } from './../../components/Box/BackgroundContext';

const { typography, touchableSize } = themeVars;
const { foreground } = themeVars.color;
const { accessibleForegroundColors } = themeVars.private;

type Theme = typeof themeVars;
type TextDefinition = Theme['typography']['text'];
type HeadingDefinition = Theme['typography']['heading']['level'];
type TypographicDefinition =
  | TextDefinition[keyof TextDefinition]
  | HeadingDefinition[keyof HeadingDefinition];

export const fontFamily = composeStyles(
  style({
    fontFamily: typography.fontFamily,
  }),
  createTheme(font, {
    capHeight: typography.fontMetrics.capHeight,
    ascent: typography.fontMetrics.ascent,
    descent: typography.fontMetrics.descent,
    lineGap: typography.fontMetrics.lineGap,
    unitsPerEm: typography.fontMetrics.unitsPerEm,
  }),
);

export const fontWeight = styleVariants(
  typography.fontWeight,
  mapToProperty('fontWeight'),
);

const makeTypographyRules = (
  textDefinition: TypographicDefinition,
  debug?: string,
) => {
  const {
    fontSize: mobileFontSize,
    leading: mobileLeading,
  } = textDefinition.mobile;

  const {
    fontSize: tabletFontSize,
    leading: tabletLeading,
  } = textDefinition.tablet;

  return {
    raw: style(
      responsiveStyle({
        mobile: {
          fontSize: calc.multiply(mobileFontSize, '1px'),
          lineHeight: calc.multiply(mobileLeading, '1px'),
        },
        tablet: {
          fontSize: calc.multiply(tabletFontSize, '1px'),
          lineHeight: calc.multiply(tabletLeading, '1px'),
        },
      }),
    ),
    trimmed: composeStyles(
      capsize,
      style(
        responsiveStyle({
          mobile: {
            vars: {
              [fontSize]: mobileFontSize,
              [leading]: mobileLeading,
            },
          },
          tablet: {
            vars: {
              [fontSize]: tabletFontSize,
              [leading]: tabletLeading,
            },
          },
        }),
        debug,
      ),
    ),
  };
};

export const text = {
  xsmall: makeTypographyRules(typography.text.xsmall, 'xsmall'),
  small: makeTypographyRules(typography.text.small, 'small'),
  standard: makeTypographyRules(typography.text.standard, 'standard'),
  large: makeTypographyRules(typography.text.large, 'large'),
};

export const headingWeight = styleVariants(
  typography.heading.weight,
  mapToProperty('fontWeight'),
);

export const heading = {
  '1': makeTypographyRules(typography.heading.level['1'], 'heading1'),
  '2': makeTypographyRules(typography.heading.level['2'], 'heading2'),
  '3': makeTypographyRules(typography.heading.level['3'], 'heading3'),
  '4': makeTypographyRules(typography.heading.level['4'], 'heading4'),
};

export const tone = {
  ...styleVariants(
    {
      brandAccent: foreground.brandAccent,
      caution: foreground.caution,
      critical: foreground.critical,
      formAccent: foreground.formAccent,
      info: foreground.info,
      neutral: foreground.neutral,
      positive: foreground.positive,
      promote: foreground.promote,
      secondary: foreground.secondary,
    },
    mapToProperty('color'),
  ),
  link: style({
    color: foreground.link,
    ...(foreground.link !== foreground.linkHover
      ? {
          ':hover': { color: foreground.linkHover },
          ':focus': { color: foreground.linkHover },
        }
      : {}),
  }),
};

export const invertableTone = {
  neutral: styleVariants({
    light: {
      color: foreground.neutral,
    },
    dark: {
      color: foreground.neutralInverted,
    },
  }),
  secondary: styleVariants({
    light: {
      color: foreground.secondary,
    },
    dark: {
      color: foreground.secondaryInverted,
    },
  }),
};

type Foreground = keyof typeof tone;
type BoxBackground = NonNullable<BackgroundVariant>;
type ToneOverridesForBackground = {
  [background in BoxBackground]?: {
    [foreground in Foreground | 'neutral']?: string;
  };
};
export const toneOverridesForBackground: ToneOverridesForBackground = {
  criticalLight: {
    neutral: style({
      color: accessibleForegroundColors.critical4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.critical3_1,
        },
      },
    }),
    critical: style({
      color: accessibleForegroundColors.critical4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.critical3_1,
        },
      },
    }),
  },
  cautionLight: {
    neutral: style({
      color: accessibleForegroundColors.caution4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.caution3_1,
        },
      },
    }),
    caution: style({
      color: accessibleForegroundColors.caution4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.caution3_1,
        },
      },
    }),
  },
  positiveLight: {
    neutral: style({
      color: accessibleForegroundColors.positive4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.positive3_1,
        },
      },
    }),
    positive: style({
      color: accessibleForegroundColors.positive4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.positive3_1,
        },
      },
    }),
  },
  infoLight: {
    neutral: style({
      color: accessibleForegroundColors.info4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.info3_1,
        },
      },
    }),
    info: style({
      color: accessibleForegroundColors.info4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.info3_1,
        },
      },
    }),
  },
  promoteLight: {
    neutral: style({
      color: accessibleForegroundColors.promote4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.promote3_1,
        },
      },
    }),
    promote: style({
      color: accessibleForegroundColors.promote4_51,
      selectors: {
        ['svg&']: {
          color: accessibleForegroundColors.promote3_1,
        },
      },
    }),
  },
};

const makeTouchableSpacing = (touchableHeight: string, textHeight: string) => {
  const space = calc(touchableHeight)
    .subtract(calc.multiply(textHeight, '1px'))
    .divide(2)
    .toString();

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

export const touchable = styleVariants(typography.text, (textDefinition) =>
  responsiveStyle({
    mobile: makeTouchableSpacing(touchableSize, textDefinition.mobile.leading),
    tablet: makeTouchableSpacing(touchableSize, textDefinition.tablet.leading),
  }),
);

export const truncate = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

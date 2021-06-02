import {
  createTheme,
  composeStyles,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { themeVars } from './../../themes/themeVars.css';
import { responsiveStyle } from '../../themes/vanillaUtils';
import { fontSize, capsize, leading, font } from './capsize.css';
import { mapToProperty } from '../../utils';
import { BackgroundVariant } from './../../components/Box/BackgroundContext';

type Theme = typeof themeVars;
type TextDefinition = Theme['private']['textSize'];
type HeadingDefinition = Theme['private']['headingLevel'];
type TypographicDefinition =
  | TextDefinition[keyof TextDefinition]
  | HeadingDefinition[keyof HeadingDefinition];

export const fontFamily = composeStyles(
  style({
    fontFamily: themeVars.private.fontFamily,
  }),
  createTheme(font, {
    capHeight: themeVars.private.fontMetrics.capHeight,
    ascent: themeVars.private.fontMetrics.ascent,
    descent: themeVars.private.fontMetrics.descent,
    lineGap: themeVars.private.fontMetrics.lineGap,
    unitsPerEm: themeVars.private.fontMetrics.unitsPerEm,
  }),
);

export const fontWeight = styleVariants(
  themeVars.private.textWeight,
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
  xsmall: makeTypographyRules(themeVars.private.textSize.xsmall, 'xsmall'),
  small: makeTypographyRules(themeVars.private.textSize.small, 'small'),
  standard: makeTypographyRules(
    themeVars.private.textSize.standard,
    'standard',
  ),
  large: makeTypographyRules(themeVars.private.textSize.large, 'large'),
};

export const headingWeight = styleVariants(
  themeVars.private.headingWeight,
  mapToProperty('fontWeight'),
);

export const heading = {
  '1': makeTypographyRules(themeVars.private.headingLevel['1'], 'heading1'),
  '2': makeTypographyRules(themeVars.private.headingLevel['2'], 'heading2'),
  '3': makeTypographyRules(themeVars.private.headingLevel['3'], 'heading3'),
  '4': makeTypographyRules(themeVars.private.headingLevel['4'], 'heading4'),
};

export const tone = {
  ...styleVariants(
    {
      brandAccent: themeVars.foregroundColor.brandAccent,
      caution: themeVars.foregroundColor.caution,
      critical: themeVars.foregroundColor.critical,
      formAccent: themeVars.foregroundColor.formAccent,
      info: themeVars.foregroundColor.info,
      positive: themeVars.foregroundColor.positive,
      promote: themeVars.foregroundColor.promote,
      secondary: themeVars.foregroundColor.secondary,
    },
    mapToProperty('color'),
  ),
  link: style({
    color: themeVars.foregroundColor.link,
    ...(themeVars.foregroundColor.link !== themeVars.foregroundColor.linkHover
      ? {
          ':hover': { color: themeVars.foregroundColor.linkHover },
          ':focus': { color: themeVars.foregroundColor.linkHover },
        }
      : {}),
  }),
};

export const invertableTone = {
  neutral: styleVariants({
    light: {
      color: themeVars.foregroundColor.neutral,
    },
    dark: {
      color: themeVars.foregroundColor.neutralInverted,
    },
  }),
  secondary: styleVariants({
    light: {
      color: themeVars.foregroundColor.secondary,
    },
    dark: {
      color: themeVars.foregroundColor.secondaryInverted,
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
      color: themeVars.private.accessibleForegroundColors.critical4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.critical3_1,
        },
      },
    }),
    critical: style({
      color: themeVars.private.accessibleForegroundColors.critical4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.critical3_1,
        },
      },
    }),
  },
  cautionLight: {
    neutral: style({
      color: themeVars.private.accessibleForegroundColors.caution4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.caution3_1,
        },
      },
    }),
    caution: style({
      color: themeVars.private.accessibleForegroundColors.caution4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.caution3_1,
        },
      },
    }),
  },
  positiveLight: {
    neutral: style({
      color: themeVars.private.accessibleForegroundColors.positive4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.positive3_1,
        },
      },
    }),
    positive: style({
      color: themeVars.private.accessibleForegroundColors.positive4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.positive3_1,
        },
      },
    }),
  },
  infoLight: {
    neutral: style({
      color: themeVars.private.accessibleForegroundColors.info4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.info3_1,
        },
      },
    }),
    info: style({
      color: themeVars.private.accessibleForegroundColors.info4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.info3_1,
        },
      },
    }),
  },
  promoteLight: {
    neutral: style({
      color: themeVars.private.accessibleForegroundColors.promote4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.promote3_1,
        },
      },
    }),
    promote: style({
      color: themeVars.private.accessibleForegroundColors.promote4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.private.accessibleForegroundColors.promote3_1,
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

export const touchable = styleVariants(
  themeVars.private.textSize,
  (textDefinition) =>
    responsiveStyle({
      mobile: makeTouchableSpacing(
        themeVars.touchableSize,
        textDefinition.mobile.leading,
      ),
      tablet: makeTouchableSpacing(
        themeVars.touchableSize,
        textDefinition.tablet.leading,
      ),
    }),
);

export const truncate = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

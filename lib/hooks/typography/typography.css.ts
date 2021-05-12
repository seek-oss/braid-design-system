import omit from 'lodash/omit';
import { composeStyles, style, styleVariants } from '@vanilla-extract/css';

import { themeVars } from './../../themes/themeVars.css';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { mapToProperty } from '../../utils';
import { BackgroundVariant } from './../../components/Box/BackgroundContext';
import {
  fontSize,
  capsize,
  leading,
  metricsAscent,
  metricsCapHeight,
  metricsDescent,
  metricsLineGap,
  metricsUnitsPerEm,
} from './capsize.css';
import { calc } from '@vanilla-extract/css-utils';

type Theme = typeof themeVars;
type TextDefinition = Theme['typography']['text'];
type HeadingDefinition = Theme['typography']['heading']['level'];
type TypographicDefinition =
  | TextDefinition[keyof TextDefinition]
  | HeadingDefinition[keyof HeadingDefinition];

export const fontFamily = style({
  fontFamily: themeVars.typography.fontFamily,
  vars: {
    [metricsAscent]: themeVars.typography.fontMetrics.ascent,
    [metricsDescent]: themeVars.typography.fontMetrics.descent,
    [metricsCapHeight]: themeVars.typography.fontMetrics.capHeight,
    [metricsLineGap]: themeVars.typography.fontMetrics.lineGap,
    [metricsUnitsPerEm]: themeVars.typography.fontMetrics.unitsPerEm,
  },
});

export const fontWeight = styleVariants(
  themeVars.typography.fontWeight,
  mapToProperty('fontWeight'),
);

// const roundMarginalFontSize = (
//   size: ReturnType<typeof capsize>['fontSize'],
// ) => {
//   const fontSize = parseFloat(size.replace('px', ''));

//   return `${
//     fontSize % 1 <= 0.01 || fontSize % 1 >= 0.99
//       ? Math.round(fontSize)
//       : fontSize
//   }px`;
// };

const px = (v: string | number) => `${v}px`;
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
          fontSize: calc(mobileFontSize).multiply('1px').toString(),
          lineHeight: calc(mobileLeading).multiply('1px').toString(),
        },
        tablet: {
          fontSize: calc(tabletFontSize).multiply('1px').toString(),
          lineHeight: calc(tabletLeading).multiply('1px').toString(),
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
  xsmall: makeTypographyRules(themeVars.typography.text.xsmall, 'xsmall'),
  small: makeTypographyRules(themeVars.typography.text.small, 'small'),
  standard: makeTypographyRules(themeVars.typography.text.standard, 'standard'),
  large: makeTypographyRules(themeVars.typography.text.large, 'large'),
};

export const headingWeight = styleVariants(
  themeVars.typography.heading.weight,
  mapToProperty('fontWeight'),
);

export const heading = {
  '1': makeTypographyRules(themeVars.typography.heading.level['1'], 'heading1'),
  '2': makeTypographyRules(themeVars.typography.heading.level['2'], 'heading2'),
  '3': makeTypographyRules(themeVars.typography.heading.level['3'], 'heading3'),
  '4': makeTypographyRules(themeVars.typography.heading.level['4'], 'heading4'),
};

export const tone = {
  ...styleVariants(
    omit(themeVars.color.foreground, [
      'linkHover',
      'linkVisited',
      'neutral',
      'neutralInverted',
      'secondaryInverted',
      'rating',
    ]),
    mapToProperty('color'),
  ),
  link: style({
    color: themeVars.color.foreground.link,
    ...(themeVars.color.foreground.link !== themeVars.color.foreground.linkHover
      ? {
          ':hover': { color: themeVars.color.foreground.linkHover },
          ':focus': { color: themeVars.color.foreground.linkHover },
        }
      : {}),
  }),
};

export const invertableTone = {
  neutral: styleVariants({
    light: {
      color: themeVars.color.foreground.neutral,
    },
    dark: {
      color: themeVars.color.foreground.neutralInverted,
    },
  }),
  secondary: styleVariants({
    light: {
      color: themeVars.color.foreground.secondary,
    },
    dark: {
      color: themeVars.color.foreground.secondaryInverted,
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
      color: themeVars.color.foreground.critical4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.critical3_1,
        },
      },
    }),
    critical: style({
      color: themeVars.color.foreground.critical4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.critical3_1,
        },
      },
    }),
  },
  cautionLight: {
    neutral: style({
      color: themeVars.color.foreground.caution4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.caution3_1,
        },
      },
    }),
    caution: style({
      color: themeVars.color.foreground.caution4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.caution3_1,
        },
      },
    }),
  },
  positiveLight: {
    neutral: style({
      color: themeVars.color.foreground.positive4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.positive3_1,
        },
      },
    }),
    positive: style({
      color: themeVars.color.foreground.positive4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.positive3_1,
        },
      },
    }),
  },
  infoLight: {
    neutral: style({
      color: themeVars.color.foreground.info4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.info3_1,
        },
      },
    }),
    info: style({
      color: themeVars.color.foreground.info4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.info3_1,
        },
      },
    }),
  },
  promoteLight: {
    neutral: style({
      color: themeVars.color.foreground.promote4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.promote3_1,
        },
      },
    }),
    promote: style({
      color: themeVars.color.foreground.promote4_51,
      selectors: {
        ['svg&']: {
          color: themeVars.color.foreground.promote3_1,
        },
      },
    }),
  },
};

const makeTouchableSpacing = (touchableHeight: string, textHeight: string) => {
  const space = `calc((${touchableHeight} - ${textHeight}) / 2)`;

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

export const touchable = styleVariants(
  themeVars.typography.text,
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

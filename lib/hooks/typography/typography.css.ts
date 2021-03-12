import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import { style } from '@mattsjones/css-core';

import { themeVars } from './../../themes/themeVars.css';
import { responsiveStyle, styleMap } from '../../themes/nextThemeUtils';
import { createCss } from './capsize';
import { mapToStyleProperty } from '../../utils';
import { BackgroundVariant } from './../../components/Box/BackgroundContext';

type Theme = typeof themeVars;
type TextDefinition = Theme['typography']['text'];
type HeadingDefinition = Theme['typography']['heading']['level'];
type TypographicDefinition =
  | TextDefinition[keyof TextDefinition]
  | HeadingDefinition[keyof HeadingDefinition];

export const fontFamily = style({
  fontFamily: themeVars.typography.fontFamily,
});

export const fontWeight = styleMap(
  mapToStyleProperty(themeVars.typography.fontWeight, 'fontWeight'),
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

const makeTypographyRules = (textDefinition: TypographicDefinition) => {
  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobile
  } = createCss(textDefinition.mobile.capsizeValues);

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tablet
  } = createCss(textDefinition.tablet.capsizeValues);

  return {
    base: responsiveStyle({
      mobile: {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight,
      },
      tablet: {
        fontSize: tabletFontSize,
        lineHeight: tabletLineHeight,
      },
    }),
    leadingTrim: responsiveStyle({
      mobile,
      tablet,
    }),
  };
};

export const text = {
  xsmall: styleMap(makeTypographyRules(themeVars.typography.text.xsmall)),
  small: styleMap(makeTypographyRules(themeVars.typography.text.small)),
  standard: styleMap(makeTypographyRules(themeVars.typography.text.standard)),
  large: styleMap(makeTypographyRules(themeVars.typography.text.large)),
};

export const headingWeight = styleMap(
  mapToStyleProperty(themeVars.typography.heading.weight, 'fontWeight'),
);

export const heading = {
  '1': styleMap(makeTypographyRules(themeVars.typography.heading.level['1'])),
  '2': styleMap(makeTypographyRules(themeVars.typography.heading.level['2'])),
  '3': styleMap(makeTypographyRules(themeVars.typography.heading.level['3'])),
  '4': styleMap(makeTypographyRules(themeVars.typography.heading.level['4'])),
};

export const tone = {
  ...styleMap(
    mapToStyleProperty(
      omit(themeVars.color.foreground, [
        'linkHover',
        'linkVisited',
        'neutral',
        'neutralInverted',
        'secondaryInverted',
        'rating',
      ]),
      'color',
    ),
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
  neutral: styleMap({
    light: {
      color: themeVars.color.foreground.neutral,
    },
    dark: {
      color: themeVars.color.foreground.neutralInverted,
    },
  }),
  secondary: styleMap({
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

export const touchable = styleMap(
  mapValues(themeVars.typography.text, (textDefinition) =>
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
  ),
);

export const truncate = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

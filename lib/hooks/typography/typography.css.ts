import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import { style } from '@mattsjones/css-core';

import {
  theme,
  responsiveStyle,
  styleMap,
} from '../../themes/apac/nextTheme.css';
import { createCss } from './capsize';
import { mapToStyleProperty } from '../../utils';
import { BackgroundVariant } from './../../components/Box/BackgroundContext';

type Theme = typeof theme;
type TextDefinition = Theme['typography']['text'];
type HeadingDefinition = Theme['typography']['heading']['level'];
type TypographicDefinition =
  | TextDefinition[keyof TextDefinition]
  | HeadingDefinition[keyof HeadingDefinition];

export const fontFamily = style({
  fontFamily: theme.typography.fontFamily,
});

export const fontWeight = styleMap(
  mapToStyleProperty(theme.typography.fontWeight, 'fontWeight'),
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
  xsmall: styleMap(makeTypographyRules(theme.typography.text.xsmall)),
  small: styleMap(makeTypographyRules(theme.typography.text.small)),
  standard: styleMap(makeTypographyRules(theme.typography.text.standard)),
  large: styleMap(makeTypographyRules(theme.typography.text.large)),
};

export const headingWeight = styleMap(
  mapValues(theme.typography.heading.weight, (weight) => ({
    fontWeight: theme.typography.fontWeight[weight],
  })),
);

export const heading = {
  '1': styleMap(makeTypographyRules(theme.typography.heading.level['1'])),
  '2': styleMap(makeTypographyRules(theme.typography.heading.level['2'])),
  '3': styleMap(makeTypographyRules(theme.typography.heading.level['3'])),
  '4': styleMap(makeTypographyRules(theme.typography.heading.level['4'])),
};

export const tone = {
  ...styleMap(
    mapToStyleProperty(
      omit(theme.color.foreground, [
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
    color: theme.color.foreground.link,
    ...(theme.color.foreground.link !== theme.color.foreground.linkHover
      ? {
          ':hover': { color: theme.color.foreground.linkHover },
          ':focus': { color: theme.color.foreground.linkHover },
        }
      : {}),
  }),
};

export const invertableTone = {
  neutral: styleMap({
    light: {
      color: theme.color.foreground.neutral,
    },
    dark: {
      color: theme.color.foreground.neutralInverted,
    },
  }),
  secondary: styleMap({
    light: {
      color: theme.color.foreground.secondary,
    },
    dark: {
      color: theme.color.foreground.secondaryInverted,
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
      color: theme.color.foreground.critical4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.critical3_1,
        },
      },
    }),
    critical: style({
      color: theme.color.foreground.critical4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.critical3_1,
        },
      },
    }),
  },
  cautionLight: {
    neutral: style({
      color: theme.color.foreground.caution4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.caution3_1,
        },
      },
    }),
    caution: style({
      color: theme.color.foreground.caution4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.caution3_1,
        },
      },
    }),
  },
  positiveLight: {
    neutral: style({
      color: theme.color.foreground.positive4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.positive3_1,
        },
      },
    }),
    positive: style({
      color: theme.color.foreground.positive4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.positive3_1,
        },
      },
    }),
  },
  infoLight: {
    neutral: style({
      color: theme.color.foreground.info4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.info3_1,
        },
      },
    }),
    info: style({
      color: theme.color.foreground.info4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.info3_1,
        },
      },
    }),
  },
  promoteLight: {
    neutral: style({
      color: theme.color.foreground.promote4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.promote3_1,
        },
      },
    }),
    promote: style({
      color: theme.color.foreground.promote4_51,
      selectors: {
        ['svg&']: {
          color: theme.color.foreground.promote3_1,
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
  mapValues(theme.typography.text, (textDefinition) =>
    responsiveStyle({
      mobile: makeTouchableSpacing(
        theme.touchableSize,
        textDefinition.mobile.leading,
      ),
      tablet: makeTouchableSpacing(
        theme.touchableSize,
        textDefinition.tablet.leading,
      ),
    }),
  ),
);

export const truncate = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

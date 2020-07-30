import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import { style, styleMap, ClassRef } from 'sku/treat';
import { Theme } from 'treat/theme';
import capsize from 'capsize';
import { getAccessibleVariant, mapToStyleProperty } from '../../utils';
import { BackgroundVariant } from './../../components/Box/BackgroundContext';

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily,
}));

export const fontWeight = styleMap(({ typography }) =>
  mapToStyleProperty(typography.fontWeight, 'fontWeight'),
);

type TextDefinition = Theme['typography']['text'];
type HeadingDefinition = Theme['typography']['heading']['level'];
type TypographicDefinition =
  | TextDefinition[keyof TextDefinition]
  | HeadingDefinition[keyof HeadingDefinition];

const roundMarginalFontSize = (
  size: ReturnType<typeof capsize>['fontSize'],
) => {
  const fontSize = parseFloat(size.replace('px', ''));

  return `${
    fontSize % 1 <= 0.01 || fontSize % 1 >= 0.99
      ? Math.round(fontSize)
      : fontSize
  }px`;
};

const makeTypographyRules = (
  textDefinition: TypographicDefinition,
  theme: Theme,
) => {
  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    ...mobile
  } = capsize({
    fontMetrics: theme.typography.fontMetrics,
    capHeight: textDefinition.mobile.capHeight,
    leading: textDefinition.mobile.rows * theme.grid,
  });

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    ...tablet
  } = capsize({
    fontMetrics: theme.typography.fontMetrics,
    capHeight: textDefinition.tablet.capHeight,
    leading: textDefinition.tablet.rows * theme.grid,
  });

  return {
    base: theme.utils.responsiveStyle({
      mobile: {
        fontSize: roundMarginalFontSize(mobileFontSize),
        lineHeight: mobileLineHeight,
      },
      tablet: {
        fontSize: roundMarginalFontSize(tabletFontSize),
        lineHeight: tabletLineHeight,
      },
    }),
    leadingTrim: theme.utils.responsiveStyle({
      mobile,
      tablet,
    }),
  };
};

export const text = {
  xsmall: styleMap((theme) =>
    makeTypographyRules(theme.typography.text.xsmall, theme),
  ),
  small: styleMap((theme) =>
    makeTypographyRules(theme.typography.text.small, theme),
  ),
  standard: styleMap((theme) =>
    makeTypographyRules(theme.typography.text.standard, theme),
  ),
  large: styleMap((theme) =>
    makeTypographyRules(theme.typography.text.large, theme),
  ),
};

export const headingWeight = styleMap(({ typography }) =>
  mapValues(typography.heading.weight, (weight) => ({
    fontWeight: typography.fontWeight[weight],
  })),
);

export const heading = {
  '1': styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level['1'], theme),
  ),
  '2': styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level['2'], theme),
  ),
  '3': styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level['3'], theme),
  ),
  '4': styleMap((theme) =>
    makeTypographyRules(theme.typography.heading.level['4'], theme),
  ),
};

export const tone = {
  ...styleMap((theme) =>
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
  link: style(({ color: { foreground } }) => ({
    color: foreground.link,
    ...(foreground.link !== foreground.linkHover
      ? {
          ':hover': { color: foreground.linkHover },
          ':focus': { color: foreground.linkHover },
        }
      : {}),
  })),
};

export const invertableTone = {
  neutral: styleMap((theme) => ({
    light: {
      color: theme.color.foreground.neutral,
    },
    dark: {
      color: theme.color.foreground.neutralInverted,
    },
  })),
  secondary: styleMap((theme) => ({
    light: {
      color: theme.color.foreground.secondary,
    },
    dark: {
      color: theme.color.foreground.secondaryInverted,
    },
  })),
};

const accessibleColorForTone = (foreground: string) => ({
  color: getAccessibleVariant(foreground),
  selectors: {
    ['svg&']: {
      color: getAccessibleVariant(foreground, { nonText: true }),
    },
  },
});

const accessibleColorVariants = styleMap(({ color: { foreground } }) => ({
  critical: accessibleColorForTone(foreground.critical),
  caution: accessibleColorForTone(foreground.caution),
  positive: accessibleColorForTone(foreground.positive),
  info: accessibleColorForTone(foreground.info),
  promote: accessibleColorForTone(foreground.promote),
}));

type Foreground = keyof typeof tone;
type BoxBackground = NonNullable<BackgroundVariant>;
type ToneOverridesForBackground = {
  [background in BoxBackground]?: {
    [foreground in Foreground | 'neutral']?: ClassRef;
  };
};
export const toneOverridesForBackground: ToneOverridesForBackground = {
  criticalLight: {
    neutral: accessibleColorVariants.critical,
    critical: accessibleColorVariants.critical,
  },
  cautionLight: {
    neutral: accessibleColorVariants.caution,
    caution: accessibleColorVariants.caution,
  },
  positiveLight: {
    neutral: accessibleColorVariants.positive,
    positive: accessibleColorVariants.positive,
  },
  infoLight: {
    neutral: accessibleColorVariants.info,
    info: accessibleColorVariants.info,
  },
  promoteLight: {
    neutral: accessibleColorVariants.promote,
    promote: accessibleColorVariants.promote,
  },
};

const makeTouchableSpacing = (touchableHeight: number, textHeight: number) => {
  const space = (touchableHeight - textHeight) / 2;

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

export const touchable = styleMap(
  ({ grid, typography, touchableSize, utils }) =>
    mapValues(typography.text, (textDefinition) =>
      utils.responsiveStyle({
        mobile: makeTouchableSpacing(
          grid * touchableSize,
          grid * textDefinition.mobile.rows,
        ),
        tablet: makeTouchableSpacing(
          grid * touchableSize,
          grid * textDefinition.tablet.rows,
        ),
      }),
    ),
);

export const truncate = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

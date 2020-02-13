import mapValues from 'lodash/mapValues';
import omit from 'lodash/omit';
import { style, styleMap, ClassRef } from 'sku/treat';
import { Theme } from 'treat/theme';
import basekick from './basekick';
import { getAccessibleVariant, mapToStyleProperty } from '../../utils';
import { BackgroundVariant } from './../../components/Box/BackgroundContext';
import { TextBreakpoint } from '../../themes/makeBraidTheme';

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily,
}));

export const fontWeight = styleMap(({ typography }) =>
  mapToStyleProperty(typography.fontWeight, 'fontWeight'),
);

interface TextDefinition {
  rows: number;
  size: number;
}

const alignTextToGrid = (
  textDefinition: TextDefinition,
  gridRowHeight: number,
  descenderHeightScale: number,
  capHeight: number,
) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition.size,
    typeRowSpan: textDefinition.rows,
    gridRowHeight,
    descenderHeightScale,
    capHeight,
  });

const makeTypographyRules = (
  textDefinition: Record<TextBreakpoint, TextDefinition>,
  { grid, typography, utils }: Theme,
) => {
  const mobile = alignTextToGrid(
    textDefinition.mobile,
    grid,
    typography.descenderHeightScale,
    typography.capHeightScale,
  );

  const tablet = alignTextToGrid(
    textDefinition.tablet,
    grid,
    typography.descenderHeightScale,
    typography.capHeightScale,
  );

  return {
    base: utils.responsiveStyle({
      mobile: mobile.base,
      tablet: tablet.base,
    }),
    baseline: utils.responsiveStyle({
      mobile: mobile.baseline,
      tablet: tablet.baseline,
    }),
    cropFirstLine: utils.responsiveStyle({
      mobile: mobile.cropFirstLine,
      tablet: tablet.cropFirstLine,
    }),
  };
};

export const text = {
  xsmall: styleMap(theme =>
    makeTypographyRules(theme.typography.text.xsmall, theme),
  ),
  small: styleMap(theme =>
    makeTypographyRules(theme.typography.text.small, theme),
  ),
  standard: styleMap(theme =>
    makeTypographyRules(theme.typography.text.standard, theme),
  ),
  large: styleMap(theme =>
    makeTypographyRules(theme.typography.text.large, theme),
  ),
};

export const headingWeight = styleMap(({ typography }) =>
  mapValues(typography.heading.weight, weight => ({
    fontWeight: typography.fontWeight[weight],
  })),
);

export const heading = {
  '1': styleMap(theme =>
    makeTypographyRules(theme.typography.heading.level['1'], theme),
  ),
  '2': styleMap(theme =>
    makeTypographyRules(theme.typography.heading.level['2'], theme),
  ),
  '3': styleMap(theme =>
    makeTypographyRules(theme.typography.heading.level['3'], theme),
  ),
  '4': styleMap(theme =>
    makeTypographyRules(theme.typography.heading.level['4'], theme),
  ),
};

export const tone = {
  ...styleMap(theme => {
    return mapToStyleProperty(
      omit(theme.color.foreground, [
        'linkHover',
        'linkVisited',
        'neutral',
        'neutralInverted',
        'secondaryInverted',
      ]),
      'color',
    );
  }),
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
  neutral: styleMap(theme => ({
    light: {
      color: theme.color.foreground.neutral,
    },
    dark: {
      color: theme.color.foreground.neutralInverted,
    },
  })),
  secondary: styleMap(theme => ({
    light: {
      color: theme.color.foreground.secondary,
    },
    dark: {
      color: theme.color.foreground.secondaryInverted,
    },
  })),
};

const accessibleColorVariants = styleMap(({ color: { foreground } }) => ({
  critical: {
    color: getAccessibleVariant(foreground.critical),
  },
  positive: {
    color: getAccessibleVariant(foreground.positive),
  },
  info: {
    color: getAccessibleVariant(foreground.info),
  },
  promote: {
    color: getAccessibleVariant(foreground.promote),
  },
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
    mapValues(typography.text, textDefinition =>
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

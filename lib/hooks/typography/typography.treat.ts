import mapValues from 'lodash/mapValues';
import { style, styleMap, ClassRef } from 'sku/treat';
import { Theme } from 'treat/theme';
import basekick from './basekick';
import { getAccessibleVariant, isLight, mapToStyleProperty } from '../../utils';
import { TextBreakpoint } from '../../themes/makeTreatTheme';
import { UseBoxStylesProps } from '../../components/Box/useBoxStyles';

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

export const tone = styleMap(theme => {
  const {
    linkHover,
    link,
    // Omit from public API
    linkVisited,
    neutralInverted,
    ...foreground
  } = theme.color.foreground;

  return {
    ...mapToStyleProperty(foreground, 'color'),
    link: {
      color: link,
      ...(link !== linkHover
        ? {
            ':hover': { color: linkHover },
            ':focus': { color: linkHover },
          }
        : {}),
    },
  };
});

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

const textColorForBackground = (
  background: keyof Theme['color']['background'],
) => {
  const resolveOverride = (theme: Theme) => {
    // Override to ensure we use `neutral` foreground color when on
    // JobsDB `brandAccent` background.
    if (theme.name === 'jobsDb' && background === 'brandAccent') {
      return theme.color.foreground.neutralInverted;
    }
  };

  return style(
    theme => ({
      color:
        resolveOverride(theme) ||
        (isLight(theme.color.background[background])
          ? theme.color.foreground.neutral
          : theme.color.foreground.neutralInverted),
    }),
    `textColorForBackground-${background}`,
  );
};

type Foreground = keyof typeof tone;
type BoxBackground = NonNullable<UseBoxStylesProps['background']>;
type BackgroundContrast = {
  [background in BoxBackground]?: {
    [foreground in Foreground | 'default']?: ClassRef;
  };
};
export const backgroundContrast: BackgroundContrast = {
  criticalLight: {
    default: accessibleColorVariants.critical,
    critical: accessibleColorVariants.critical,
  },
  positiveLight: {
    default: accessibleColorVariants.positive,
    positive: accessibleColorVariants.positive,
  },
  infoLight: {
    default: accessibleColorVariants.info,
    info: accessibleColorVariants.info,
  },
  promoteLight: {
    default: accessibleColorVariants.promote,
    promote: accessibleColorVariants.promote,
  },
  brand: {
    default: textColorForBackground('brand'),
  },
  brandAccent: {
    default: textColorForBackground('brandAccent'),
  },
  brandAccentHover: {
    default: textColorForBackground('brandAccent'),
  },
  brandAccentActive: {
    default: textColorForBackground('brandAccent'),
  },
  formAccent: {
    default: textColorForBackground('formAccent'),
  },
  formAccentHover: {
    default: textColorForBackground('formAccent'),
  },
  formAccentActive: {
    default: textColorForBackground('formAccent'),
  },
  positive: {
    default: textColorForBackground('positive'),
  },
  critical: {
    default: textColorForBackground('critical'),
  },
  info: {
    default: textColorForBackground('info'),
  },
  promote: {
    default: textColorForBackground('promote'),
  },
  neutral: {
    default: textColorForBackground('neutral'),
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

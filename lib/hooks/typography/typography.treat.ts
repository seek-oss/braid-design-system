import mapValues from 'lodash/mapValues';
import { style, styleMap, ClassRef } from 'sku/treat';
import { Theme } from 'treat/theme';
import basekick from 'basekick';
import { getAccessibleVariant, isLight, mapToStyleProperty } from '../../utils';
import { Breakpoint } from '../../themes/makeTreatTheme';
import { UseBoxProps } from '../useBox';

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
) =>
  basekick({
    baseFontSize: 1,
    typeSizeModifier: textDefinition.size,
    typeRowSpan: textDefinition.rows,
    gridRowHeight,
    descenderHeightScale,
  });

const makeTypographyRules = (
  textDefinition: Record<Breakpoint, TextDefinition>,
  { grid, typography, utils }: Theme,
) => {
  const mobile = alignTextToGrid(
    textDefinition.mobile,
    grid.row,
    typography.descenderHeightScale,
  );

  const desktop = alignTextToGrid(
    textDefinition.desktop,
    grid.row,
    typography.descenderHeightScale,
  );

  return {
    fontSize: utils.responsiveStyles(
      {
        fontSize: mobile.fontSize,
        lineHeight: mobile.lineHeight,
      },
      {
        fontSize: desktop.fontSize,
        lineHeight: desktop.lineHeight,
      },
    ),
    transform: utils.responsiveStyles(
      {
        transform: mobile.transform,
      },
      {
        transform: desktop.transform,
      },
    ),
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
    neutralInverted, // Omit from public API
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

  return style(theme => ({
    color:
      resolveOverride(theme) ||
      (isLight(theme.color.background[background])
        ? theme.color.foreground.neutral
        : theme.color.foreground.neutralInverted),
  }));
};

type Foreground = keyof typeof tone;
type BoxBackground = NonNullable<UseBoxProps['background']>;
type BackgroundContrast = {
  [background in BoxBackground]?: {
    [foreground in Foreground | 'default']?: ClassRef
  }
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
  brand: {
    default: textColorForBackground('brand'),
  },
  brandAccent: {
    default: textColorForBackground('brandAccent'),
  },
  formAccent: {
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
  secondary: {
    default: textColorForBackground('secondary'),
  },
};

const makeTouchableSpacing = (touchableHeight: number, textHeight: number) => {
  const space = (touchableHeight - textHeight) / 2;

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

export const touchable = styleMap(({ typography, spacing, utils }) =>
  mapValues(typography.text, textDefinition =>
    utils.responsiveStyles(
      makeTouchableSpacing(
        utils.rows(spacing.touchableRows),
        utils.rows(textDefinition.mobile.rows),
      ),
      makeTouchableSpacing(
        utils.rows(spacing.touchableRows),
        utils.rows(textDefinition.desktop.rows),
      ),
    ),
  ),
);

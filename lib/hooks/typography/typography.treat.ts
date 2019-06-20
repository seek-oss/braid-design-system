import mapValues from 'lodash/mapValues';
import { style, css, ClassRef } from 'sku/treat';
import { Theme } from 'treat/theme';
import basekick from 'basekick';
import { getAccessibleVariant, isLight, mapToStyleProperty } from '../../utils';
import { Breakpoint } from '../../themes/makeTreatTheme';
import { UseBoxProps } from '../useBox';

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily,
}));

export const fontWeight = css(({ typography }) =>
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
  small: css(theme => makeTypographyRules(theme.typography.text.small, theme)),
  standard: css(theme =>
    makeTypographyRules(theme.typography.text.standard, theme),
  ),
  large: css(theme => makeTypographyRules(theme.typography.text.large, theme)),
};

export const headingWeight = css(({ typography }) =>
  mapValues(typography.heading.weight, weight => ({
    fontWeight: typography.fontWeight[weight],
  })),
);

export const heading = {
  '1': css(theme =>
    makeTypographyRules(theme.typography.heading.level['1'], theme),
  ),
  '2': css(theme =>
    makeTypographyRules(theme.typography.heading.level['2'], theme),
  ),
  '3': css(theme =>
    makeTypographyRules(theme.typography.heading.level['3'], theme),
  ),
};

export const color = css(theme => {
  const { linkHover, link, ...foreground } = theme.color.foreground;

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

const accessibleColorVariants = css(({ color: { foreground } }) => ({
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
) =>
  style(theme => ({
    color: isLight(theme.color.background[background])
      ? theme.color.foreground.black
      : theme.color.foreground.white,
  }));

type ForegroundColor = keyof typeof color;
type BackgroundColor = NonNullable<UseBoxProps['backgroundColor']>;
type BackgroundContrast = {
  [background in BackgroundColor]?: {
    [foreground in ForegroundColor | 'default']?: ClassRef
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
};

const makeTouchableSpacing = (touchableHeight: number, textHeight: number) => {
  const space = (touchableHeight - textHeight) / 2;

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

export const touchable = css(({ typography, spacing, utils }) =>
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

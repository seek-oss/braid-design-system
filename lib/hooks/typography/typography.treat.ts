import mapValues from 'lodash/mapValues';
import { style, css } from 'sku/treat';
import { Theme } from 'treat/theme';
import basekick from 'basekick';
import { getAccessibleVariant, isLight, mapToStyleProperty } from '../../utils';
import { Breakpoint } from '../../themes/makeTreatTheme';

export const fontFamily = style(({ typography }) => ({
  fontFamily: typography.fontFamily,
}));

export const fontWeight = css(({ typography }) => ({
  regular: {
    fontWeight: typography.fontWeight.regular,
  },
  medium: {
    fontWeight: typography.fontWeight.medium,
  },
  strong: {
    fontWeight: typography.fontWeight.strong,
  },
}));

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
    criticalContrast: {
      color: getAccessibleVariant(foreground.critical),
    },
    positiveContrast: {
      color: getAccessibleVariant(foreground.positive),
    },
    infoContrast: { color: getAccessibleVariant(foreground.info) },
    brandAccentForeground: {
      color: isLight(foreground.brandAccent)
        ? foreground.black
        : foreground.white,
    },
  };
});

const touchableSpace = (theme: Theme, breakpoint: Breakpoint) => {
  const { spacing, utils } = theme;

  return mapValues(theme.typography.text, textDefinition => {
    const touchableHeight = utils.rows(spacing.touchableRows);
    const textHeight = utils.rows(textDefinition[breakpoint].rows);
    const space = (touchableHeight - textHeight) / 2;
    const spaceStyles = {
      paddingTop: space,
      paddingBottom: space,
    };

    return breakpoint === 'desktop'
      ? theme.utils.desktopStyles(spaceStyles)
      : spaceStyles;
  });
};
export const touchable = css(theme => touchableSpace(theme, 'mobile'));
export const touchableDesktop = css(theme => touchableSpace(theme, 'desktop'));

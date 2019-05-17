import { style, css } from 'sku/treat';
import { Theme } from 'treat/theme';
import basekick from 'basekick';
import { Breakpoint } from '../../themes/theme';

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

const makeFontSizeRules = (
  textDefinition: Record<Breakpoint, TextDefinition>,
  { rowHeight, descenderHeightScale, utils }: Theme,
) => {
  const mobile = alignTextToGrid(
    textDefinition.mobile,
    rowHeight,
    descenderHeightScale,
  );

  const desktop = alignTextToGrid(
    textDefinition.desktop,
    rowHeight,
    descenderHeightScale,
  );

  return utils.responsiveStyles(
    {
      fontSize: mobile.fontSize,
      lineHeight: mobile.lineHeight,
    },
    {
      fontSize: desktop.fontSize,
      lineHeight: desktop.lineHeight,
    },
  );
};

const makeTransformRules = (
  textDefinition: Record<Breakpoint, TextDefinition>,
  { rowHeight, descenderHeightScale, utils }: Theme,
) => {
  const mobile = alignTextToGrid(
    textDefinition.mobile,
    rowHeight,
    descenderHeightScale,
  );

  const desktop = alignTextToGrid(
    textDefinition.desktop,
    rowHeight,
    descenderHeightScale,
  );

  return utils.responsiveStyles(
    {
      transform: mobile.transform,
    },
    {
      transform: desktop.transform,
    },
  );
};

export const fontSize = css(theme => ({
  standard: makeFontSizeRules(theme.text.standard, theme),
  large: makeFontSizeRules(theme.text.large, theme),
  level1: makeFontSizeRules(theme.heading.level1, theme),
  level2: makeFontSizeRules(theme.heading.level2, theme),
  level3: makeFontSizeRules(theme.heading.level3, theme),
}));

export const transform = css(theme => ({
  standard: makeTransformRules(theme.text.standard, theme),
  large: makeTransformRules(theme.text.large, theme),
  level1: makeTransformRules(theme.heading.level1, theme),
  level2: makeTransformRules(theme.heading.level2, theme),
  level3: makeTransformRules(theme.heading.level3, theme),
}));

import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';

import { computeValues } from '../hooks/typography/capsize';
import { getAccessibleVariant, getLightVariant, isLight } from '../utils';
import { FontMetrics } from '../hooks/typography/capsize';
import { BraidTokens, TextDefinition } from './tokenType';

const px = (v: string | number) => `${v}px`;

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const unpx = (value: string) => parseInt(value.replace('px', ''), 10);

const fontSizeToCapHeight = (
  grid: number,
  definition: TextDefinition,
  fontMetrics: FontMetrics,
) => {
  const { mobile, tablet } = definition;
  const mobileLeading = mobile.rows * grid;
  const tabletLeading = tablet.rows * grid;

  const mobileCapHeight =
    'fontSize' in mobile
      ? computeValues({
          fontSize: mobile.fontSize,
          leading: mobileLeading,
          fontMetrics,
        }).capHeight
      : px(mobile.capHeight);

  const mobileFontSize =
    'capHeight' in mobile
      ? computeValues({
          capHeight: mobile.capHeight,
          leading: mobileLeading,
          fontMetrics,
        }).fontSize
      : px(mobile.fontSize);

  const tabletCapHeight =
    'fontSize' in tablet
      ? computeValues({
          fontSize: tablet.fontSize,
          leading: tabletLeading,
          fontMetrics,
        }).capHeight
      : px(tablet.capHeight);

  const tabletFontSize =
    'capHeight' in tablet
      ? computeValues({
          capHeight: tablet.capHeight,
          leading: tabletLeading,
          fontMetrics,
        }).fontSize
      : px(tablet.fontSize);

  return {
    mobile: {
      fontSize: unpx(mobileFontSize),
      leading: mobileLeading,
      capHeight: unpx(mobileCapHeight),
      capHeightFloored: px(Math.floor(unpx(mobileCapHeight))),
    },
    tablet: {
      fontSize: unpx(tabletFontSize),
      leading: tabletLeading,
      capHeight: unpx(tabletCapHeight),
      capHeightFloored: px(Math.floor(unpx(tabletCapHeight))),
    },
  };
};

export default (braidTokens: BraidTokens) => {
  const { name, displayName, breakpoint, ...tokens } = braidTokens;
  const { webFont, ...typography } = tokens.typography;

  const inlineFieldScale =
    (typography.text.standard.mobile.rows * tokens.grid) / 42;
  const inlineFieldSize = px(
    tokens.grid * Math.round(tokens.touchableSize * inlineFieldScale),
  );

  const resolvedTokens = {
    ...tokens,
    typography: {
      ...typography,
      fontMetrics: mapValues(typography.fontMetrics, (metric) => `${metric}`),
      fontWeight: mapValues(typography.fontWeight, (weight) => `${weight}`),
      text: mapValues(tokens.typography.text, (definition) =>
        fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics),
      ),
      heading: {
        level: mapValues(tokens.typography.heading.level, (definition) =>
          fontSizeToCapHeight(tokens.grid, definition, typography.fontMetrics),
        ),
        weight: {
          weak: String(
            tokens.typography.fontWeight[tokens.typography.heading.weight.weak],
          ),
          regular: String(
            tokens.typography.fontWeight[
              tokens.typography.heading.weight.regular
            ],
          ),
        },
      },
    },
    space: mapValues(tokens.space, (sp) => px(sp * tokens.grid)),
    touchableSize: px(tokens.touchableSize * tokens.grid),
    grid: px(tokens.grid),
    inlineFieldSize,
    border: {
      ...tokens.border,
      width: mapValues(tokens.border.width, px),
    },
    contentWidth: mapValues(tokens.contentWidth, px),
    color: {
      background: {
        ...tokens.color.background,
        formAccentActive: getActiveColor(tokens.color.background.formAccent),
        formAccentHover: getHoverColor(tokens.color.background.formAccent),
        brandAccentActive: getActiveColor(tokens.color.background.brandAccent),
        brandAccentHover: getHoverColor(tokens.color.background.brandAccent),
        criticalActive: getActiveColor(tokens.color.background.critical),
        criticalHover: getHoverColor(tokens.color.background.critical),
        infoLight: getLightVariant(tokens.color.background.info),
        promoteLight: getLightVariant(tokens.color.background.promote),
        criticalLight: getLightVariant(tokens.color.background.critical),
        positiveLight: getLightVariant(tokens.color.background.positive),
        cautionLight: getLightVariant(tokens.color.background.caution),
        neutralLight: getLightVariant(tokens.color.background.neutral),
      },
      foreground: {
        ...tokens.color.foreground,
        critical4_51: getAccessibleVariant(tokens.color.foreground.critical),
        critical3_1: getAccessibleVariant(tokens.color.foreground.critical, {
          nonText: true,
        }),
        caution4_51: getAccessibleVariant(tokens.color.foreground.caution),
        caution3_1: getAccessibleVariant(tokens.color.foreground.caution, {
          nonText: true,
        }),
        positive4_51: getAccessibleVariant(tokens.color.foreground.positive),
        positive3_1: getAccessibleVariant(tokens.color.foreground.positive, {
          nonText: true,
        }),
        info4_51: getAccessibleVariant(tokens.color.foreground.info),
        info3_1: getAccessibleVariant(tokens.color.foreground.info, {
          nonText: true,
        }),
        promote4_51: getAccessibleVariant(tokens.color.foreground.promote),
        promote3_1: getAccessibleVariant(tokens.color.foreground.promote, {
          nonText: true,
        }),
      },
    },
  } as const;

  return resolvedTokens;
};

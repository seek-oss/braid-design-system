import { darken, lighten } from 'polished';
import mapValues from 'lodash/mapValues';

import { computeValues, getCapHeight } from '../hooks/typography/capsize';
import { getAccessibleVariant, getLightVariant, isLight } from '../utils';
import { FontMetrics } from '../hooks/typography/capsize';
import { BraidTokens, TextDefinition } from './tokenType';

const px = (v: string | number) => `${v}px`;

const getActiveColor = (x: string) =>
  isLight(x) ? darken(0.1, x) : darken(0.05, x);

const getHoverColor = (x: string) =>
  isLight(x) ? darken(0.05, x) : lighten(0.05, x);

const fontSizeToCapHeight = (
  grid: number,
  definition: TextDefinition,
  fontMetrics: FontMetrics,
) => {
  const { mobile, tablet } = definition;
  const mobileCapHeight =
    'fontSize' in mobile
      ? (getCapHeight({ fontSize: mobile.fontSize, fontMetrics }) as number)
      : mobile.capHeight;

  const tabletCapHeight =
    'fontSize' in tablet
      ? (getCapHeight({ fontSize: tablet.fontSize, fontMetrics }) as number)
      : tablet.capHeight;

  return {
    mobile: {
      capHeight: px(mobileCapHeight),
      capHeightFloored: px(Math.floor(mobileCapHeight)),
      leading: px(mobile.rows * grid),
      capsizeValues: computeValues({
        capHeight: mobileCapHeight,
        leading: mobile.rows * grid,
        fontMetrics,
      }),
    },
    tablet: {
      capHeight: px(tabletCapHeight),
      capHeightFloored: px(Math.floor(tabletCapHeight)),
      leading: px(tablet.rows * grid),
      capsizeValues: computeValues({
        capHeight: tabletCapHeight,
        leading: tablet.rows * grid,
        fontMetrics,
      }),
    },
  };
};

export default (braidTokens: BraidTokens) => {
  const { name, displayName, breakpoint, ...tokens } = braidTokens;
  const { fontMetrics, webFont, ...typography } = tokens.typography;

  const getInlineFieldSize = (size: 'standard' | 'small') => {
    const scale = (typography.text[size].mobile.rows * tokens.grid) / 42;
    return px(tokens.grid * Math.round(tokens.touchableSize * scale));
  };

  const resolvedTokens = {
    ...tokens,
    typography: {
      ...typography,
      fontWeight: mapValues(typography.fontWeight, (weight) => `${weight}`),
      text: mapValues(tokens.typography.text, (definition) =>
        fontSizeToCapHeight(tokens.grid, definition, fontMetrics),
      ),
      heading: {
        level: mapValues(tokens.typography.heading.level, (definition) =>
          fontSizeToCapHeight(tokens.grid, definition, fontMetrics),
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
    inlineFieldSize: {
      standard: getInlineFieldSize('standard'),
      small: getInlineFieldSize('small'),
    },
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

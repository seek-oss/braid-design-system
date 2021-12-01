import {
  assignVars,
  createThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createTextStyle } from '@capsizecss/vanilla-extract';

import { vars } from '../../themes/vars.css';
import { breakpointQuery, responsiveStyle } from '../../css/responsiveStyle';

import { mapToProperty } from '../../utils';

type Vars = typeof vars;
type TextDefinition = Vars['textSize'];
type HeadingDefinition = Vars['headingLevel'];
type TypographicDefinition =
  | TextDefinition[keyof TextDefinition]
  | HeadingDefinition[keyof HeadingDefinition];

export const fontFamily = style({
  fontFamily: vars.fontFamily,
});

export const fontWeight = styleVariants(
  vars.textWeight,
  mapToProperty('fontWeight'),
);

const makeTypographyRules = (
  textDefinition: TypographicDefinition,
  debug?: string,
) => {
  const {
    fontSize: mobileFontSize,
    lineHeight: mobileLineHeight,
    capsizeTrims: mobileCapsizeTrims,
  } = textDefinition.mobile;

  const {
    fontSize: tabletFontSize,
    lineHeight: tabletLineHeight,
    capsizeTrims: tabletCapsizeTrims,
  } = textDefinition.tablet;

  return {
    untrimmed: style(
      responsiveStyle({
        mobile: {
          fontSize: mobileFontSize,
          lineHeight: mobileLineHeight,
        },
        tablet: {
          fontSize: tabletFontSize,
          lineHeight: tabletLineHeight,
        },
      }),
    ),
    trimmed: createTextStyle(
      {
        fontSize: mobileFontSize,
        lineHeight: mobileLineHeight,
        ...mobileCapsizeTrims,
      },
      {
        '@media': {
          [breakpointQuery.tablet]: {
            fontSize: tabletFontSize,
            lineHeight: tabletLineHeight,
            ...tabletCapsizeTrims,
          },
        },
      },
      debug,
    ),
  };
};

export const text = {
  xsmall: makeTypographyRules(vars.textSize.xsmall, 'xsmall'),
  small: makeTypographyRules(vars.textSize.small, 'small'),
  standard: makeTypographyRules(vars.textSize.standard, 'standard'),
  large: makeTypographyRules(vars.textSize.large, 'large'),
};

export const headingWeight = styleVariants(
  vars.headingWeight,
  mapToProperty('fontWeight'),
);

export const heading = {
  '1': makeTypographyRules(vars.headingLevel['1'], 'heading1'),
  '2': makeTypographyRules(vars.headingLevel['2'], 'heading2'),
  '3': makeTypographyRules(vars.headingLevel['3'], 'heading3'),
  '4': makeTypographyRules(vars.headingLevel['4'], 'heading4'),
};

const textLinkVars = createThemeContract({
  color: null,
  colorHover: null,
  fontWeight: null,
  textDecoration: null,
  textDecorationHover: null,
});

const regularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.link,
  colorHover: vars.foregroundColor.linkHover,
  fontWeight: vars.textWeight.medium,
  textDecoration: 'none',
  textDecorationHover: 'underline',
});

const weakLinkVars = assignVars(textLinkVars, {
  color: 'inherit',
  colorHover: 'inherit',
  fontWeight: 'inherit',
  textDecoration: 'underline',
  textDecorationHover: 'underline',
});

export const textLink = style({
  color: textLinkVars.color,
  fontWeight: textLinkVars.fontWeight,
  textDecoration: textLinkVars.textDecoration,
  ':hover': {
    color: textLinkVars.colorHover,
    textDecoration: textLinkVars.textDecorationHover,
  },
  ':focus': {
    color: textLinkVars.colorHover,
  },
});

export const regularLink = style({
  vars: regularLinkVars,
});

export const weakLink = style({
  vars: weakLinkVars,
});

export const textLinkVisited = style({
  ':visited': {
    color: vars.foregroundColor.linkVisited,
  },
});

export const tone = styleVariants(
  {
    brandAccent: vars.foregroundColor.brandAccent,
    caution: vars.foregroundColor.caution,
    critical: vars.foregroundColor.critical,
    formAccent: vars.foregroundColor.formAccent,
    info: vars.foregroundColor.info,
    positive: vars.foregroundColor.positive,
    promote: vars.foregroundColor.promote,
    secondary: vars.foregroundColor.secondary,
    link: vars.foregroundColor.link,
  },
  mapToProperty('color'),
);

export const invertableTone = {
  neutral: styleVariants({
    light: {
      color: vars.foregroundColor.neutral,
    },
    dark: {
      color: vars.foregroundColor.neutralInverted,
    },
  }),
  secondary: styleVariants({
    light: {
      color: vars.foregroundColor.secondary,
    },
    dark: {
      color: vars.foregroundColor.secondaryInverted,
    },
  }),
  brandAccent: styleVariants({
    light: {
      color: vars.foregroundColor.brandAccent,
    },
    dark: {
      color: vars.foregroundColor.brandAccentLight,
    },
  }),
  formAccent: styleVariants({
    light: {
      color: vars.foregroundColor.formAccent,
    },
    dark: {
      color: vars.foregroundColor.formAccentLight,
    },
  }),
  critical: styleVariants({
    light: {
      color: vars.foregroundColor.critical,
    },
    dark: {
      color: vars.foregroundColor.criticalLight,
    },
  }),
};

const makeTouchableSpacing = (touchableHeight: string, textHeight: string) => {
  const space = calc(touchableHeight).subtract(textHeight).divide(2).toString();

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

// Using "ts-ignore" here as we don't want users still on typescript < 4.5.0 to get errors
// @ts-ignore Type instantiation is excessively deep and possibly infinite. Any ideas?
export const touchable = styleVariants(vars.textSize, (textDefinition) =>
  responsiveStyle({
    mobile: makeTouchableSpacing(
      vars.touchableSize,
      textDefinition.mobile.lineHeight,
    ),
    tablet: makeTouchableSpacing(
      vars.touchableSize,
      textDefinition.tablet.lineHeight,
    ),
  }),
);

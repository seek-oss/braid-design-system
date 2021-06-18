import {
  composeStyles,
  style,
  styleVariants,
  assignVars,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import * as capsize from './capsize/prebuilt';

import { mapToProperty } from '../../utils';
import { BackgroundVariant } from './../../components/Box/BackgroundContext';

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
    trimmed: composeStyles(
      capsize.className,
      style(
        responsiveStyle({
          mobile: {
            vars: assignVars(capsize.vars, {
              fontSize: mobileFontSize,
              lineHeight: mobileLineHeight,
              ...mobileCapsizeTrims,
            }),
          },
          tablet: {
            vars: assignVars(capsize.vars, {
              fontSize: tabletFontSize,
              lineHeight: tabletLineHeight,
              ...tabletCapsizeTrims,
            }),
          },
        }),
        debug,
      ),
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

export const tone = {
  ...styleVariants(
    {
      brandAccent: vars.foregroundColor.brandAccent,
      caution: vars.foregroundColor.caution,
      critical: vars.foregroundColor.critical,
      formAccent: vars.foregroundColor.formAccent,
      info: vars.foregroundColor.info,
      positive: vars.foregroundColor.positive,
      promote: vars.foregroundColor.promote,
      secondary: vars.foregroundColor.secondary,
    },
    mapToProperty('color'),
  ),
  link: style({
    color: vars.foregroundColor.link,
    ...(vars.foregroundColor.link !== vars.foregroundColor.linkHover
      ? {
          ':hover': { color: vars.foregroundColor.linkHover },
          ':focus': { color: vars.foregroundColor.linkHover },
        }
      : {}),
  }),
};

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
};

type Foreground = keyof typeof tone;
type BoxBackground = NonNullable<BackgroundVariant>;
type ToneOverridesForBackground = {
  [background in BoxBackground]?: {
    [foreground in Foreground | 'neutral']?: string;
  };
};
export const toneOverridesForBackground: ToneOverridesForBackground = {
  criticalLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.critical.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.critical.graphic,
        },
      },
    }),
    critical: style({
      color: vars.accessibleForegroundColorOnLightVariant.critical.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.critical.graphic,
        },
      },
    }),
  },
  cautionLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.caution.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.caution.graphic,
        },
      },
    }),
    caution: style({
      color: vars.accessibleForegroundColorOnLightVariant.caution.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.caution.graphic,
        },
      },
    }),
  },
  positiveLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.positive.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.positive.graphic,
        },
      },
    }),
    positive: style({
      color: vars.accessibleForegroundColorOnLightVariant.positive.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.positive.graphic,
        },
      },
    }),
  },
  infoLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.info.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.info.graphic,
        },
      },
    }),
    info: style({
      color: vars.accessibleForegroundColorOnLightVariant.info.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.info.graphic,
        },
      },
    }),
  },
  promoteLight: {
    neutral: style({
      color: vars.accessibleForegroundColorOnLightVariant.promote.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.promote.graphic,
        },
      },
    }),
    promote: style({
      color: vars.accessibleForegroundColorOnLightVariant.promote.text,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColorOnLightVariant.promote.graphic,
        },
      },
    }),
  },
};

const makeTouchableSpacing = (touchableHeight: string, textHeight: string) => {
  const space = calc(touchableHeight).subtract(textHeight).divide(2).toString();

  return {
    paddingTop: space,
    paddingBottom: space,
  };
};

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

import {
  composeStyles,
  style,
  styleVariants,
  assignVars,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { vars } from '../../themes/vars.css';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { className, vars as capsizeVars } from './capsize/prebuilt';

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
    raw: style(
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
      className,
      style(
        responsiveStyle({
          mobile: {
            vars: assignVars(capsizeVars, {
              fontSize: mobileFontSize,
              lineHeight: mobileLineHeight,
              ...mobileCapsizeTrims,
            }),
          },
          tablet: {
            vars: assignVars(capsizeVars, {
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
      color: vars.accessibleForegroundColors.critical4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.critical3_1,
        },
      },
    }),
    critical: style({
      color: vars.accessibleForegroundColors.critical4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.critical3_1,
        },
      },
    }),
  },
  cautionLight: {
    neutral: style({
      color: vars.accessibleForegroundColors.caution4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.caution3_1,
        },
      },
    }),
    caution: style({
      color: vars.accessibleForegroundColors.caution4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.caution3_1,
        },
      },
    }),
  },
  positiveLight: {
    neutral: style({
      color: vars.accessibleForegroundColors.positive4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.positive3_1,
        },
      },
    }),
    positive: style({
      color: vars.accessibleForegroundColors.positive4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.positive3_1,
        },
      },
    }),
  },
  infoLight: {
    neutral: style({
      color: vars.accessibleForegroundColors.info4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.info3_1,
        },
      },
    }),
    info: style({
      color: vars.accessibleForegroundColors.info4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.info3_1,
        },
      },
    }),
  },
  promoteLight: {
    neutral: style({
      color: vars.accessibleForegroundColors.promote4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.promote3_1,
        },
      },
    }),
    promote: style({
      color: vars.accessibleForegroundColors.promote4_51,
      selectors: {
        ['svg&']: {
          color: vars.accessibleForegroundColors.promote3_1,
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

export const truncate = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

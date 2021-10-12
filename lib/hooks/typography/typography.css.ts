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
import { darkMode } from '../../css/atoms/sprinkles.css';

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

const lightModeRegularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.link,
  colorHover: vars.foregroundColor.linkHover,
  fontWeight: vars.textWeight.medium,
  textDecoration: 'none',
  textDecorationHover: 'underline',
});

const darkModeRegularLinkVars = assignVars(textLinkVars, {
  color: vars.foregroundColor.linkLight,
  colorHover: vars.foregroundColor.linkLight,
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

export const weakLink = style({
  vars: weakLinkVars,
});

export const textLinkVisitedLinkMode = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkMode}) &:visited`]: {
        color: vars.foregroundColor.linkVisited,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(${darkMode}) &:visited`]: {
        color: vars.foregroundColor.linkLightVisited,
      },
    },
  },
});

export const textLinkVisitedDarkMode = styleVariants({
  light: {
    selectors: {
      [`html${darkMode} &:visited`]: {
        color: vars.foregroundColor.linkVisited,
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkMode} &:visited`]: {
        color: vars.foregroundColor.linkLightVisited,
      },
    },
  },
});

export const inheritLinkColor = style({});

export const lightModeTextLink = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: lightModeRegularLinkVars,
      },
      [`html:not(${darkMode}) ${inheritLinkColor} > &`]: {
        vars: weakLinkVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: darkModeRegularLinkVars,
      },
      [`html:not(${darkMode}) ${inheritLinkColor} > &`]: {
        vars: weakLinkVars,
      },
    },
  },
});

export const darkModeTextLink = styleVariants({
  light: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: lightModeRegularLinkVars,
      },
      [`html${darkMode} ${inheritLinkColor} > &`]: {
        vars: weakLinkVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: darkModeRegularLinkVars,
      },
      [`html${darkMode} ${inheritLinkColor} > &`]: {
        vars: weakLinkVars,
      },
    },
  },
});

const textToneVars = createThemeContract({
  critical: null,
  caution: null,
  info: null,
  promote: null,
  positive: null,
  brandAccent: null,
  formAccent: null,
  neutral: null,
  secondary: null,
  link: null,
});

const lightContextToneVars = assignVars(textToneVars, {
  critical: vars.foregroundColor.critical,
  caution: vars.foregroundColor.caution,
  info: vars.foregroundColor.info,
  promote: vars.foregroundColor.promote,
  positive: vars.foregroundColor.positive,
  brandAccent: vars.foregroundColor.brandAccent,
  formAccent: vars.foregroundColor.formAccent,
  neutral: vars.foregroundColor.neutral,
  secondary: vars.foregroundColor.secondary,
  link: vars.foregroundColor.link,
});

const darkContextToneVars = assignVars(textToneVars, {
  critical: vars.foregroundColor.criticalLight,
  caution: vars.foregroundColor.cautionLight,
  info: vars.foregroundColor.infoLight,
  promote: vars.foregroundColor.promoteLight,
  positive: vars.foregroundColor.positiveLight,
  brandAccent: vars.foregroundColor.brandAccentLight,
  formAccent: vars.foregroundColor.neutralInverted,
  neutral: vars.foregroundColor.neutralInverted,
  secondary: vars.foregroundColor.secondaryInverted,
  link: vars.foregroundColor.linkLight,
});

export const lightModeTone = styleVariants({
  light: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: lightContextToneVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: darkContextToneVars,
      },
    },
  },
});

export const darkModeTone = styleVariants({
  light: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: lightContextToneVars,
      },
    },
  },
  dark: {
    selectors: {
      [`html${darkMode} &`]: {
        vars: darkContextToneVars,
      },
    },
  },
});

const neutralOverrideForBackground: Partial<
  Record<keyof typeof vars.backgroundColor, keyof typeof vars.foregroundColor>
> = {
  formAccentSoft: 'formAccent',
  formAccentSoftActive: 'formAccent',
  formAccentSoftHover: 'formAccent',
  criticalLight: 'critical',
  criticalSoft: 'critical',
  criticalSoftActive: 'critical',
  criticalSoftHover: 'critical',
  caution: 'caution',
  cautionLight: 'caution',
  positiveLight: 'positive',
  infoLight: 'info',
  promoteLight: 'promote',
};

export const lightModeNeutralOverride = styleVariants(
  neutralOverrideForBackground,
  (textTone) => ({
    selectors: {
      [`html:not(${darkMode}) &`]: {
        vars: {
          [textToneVars.neutral]:
            vars.foregroundColor[textTone as keyof typeof vars.foregroundColor],
        },
      },
    },
  }),
);

export const darkModeNeutralOverride = styleVariants(
  neutralOverrideForBackground,
  (textTone) => ({
    selectors: {
      [`html${darkMode} &`]: {
        vars: {
          [textToneVars.neutral]:
            vars.foregroundColor[textTone as keyof typeof vars.foregroundColor],
        },
      },
    },
  }),
);

export const tone = styleVariants(textToneVars, (toneVar) => ({
  color: toneVar,
}));

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

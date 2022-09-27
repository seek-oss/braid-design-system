import {
  assignVars,
  createThemeContract,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { createTextStyle } from '@capsizecss/vanilla-extract';

import { vars } from '../themes/vars.css';
import { breakpointQuery, responsiveStyle } from '../css/responsiveStyle';

import { mapToProperty } from '../utils';
import { colorModeStyle } from '../css/colorModeStyle';
import { BoxBackgroundVariant } from '../components/Box/Box';

export const fontFamily = style({
  fontFamily: vars.fontFamily,
});

export const fontWeight = styleVariants(
  vars.textWeight,
  mapToProperty('fontWeight'),
);

export const textSizeTrimmed = styleVariants(
  vars.textSize,
  ({ mobile, tablet }, variant) => [
    createTextStyle(
      {
        fontSize: mobile.fontSize,
        lineHeight: mobile.lineHeight,
        ...mobile.capsizeTrims,
      },
      {
        '@media': {
          [breakpointQuery.tablet]: {
            fontSize: tablet.fontSize,
            lineHeight: tablet.lineHeight,
            ...tablet.capsizeTrims,
          },
        },
      },
      `textSize_${variant}`,
    ),
  ],
);

export const textSizeUntrimmed = styleVariants(
  vars.textSize,
  ({ mobile, tablet }) =>
    responsiveStyle({
      mobile: {
        fontSize: mobile.fontSize,
        lineHeight: mobile.lineHeight,
      },
      tablet: {
        fontSize: tablet.fontSize,
        lineHeight: tablet.lineHeight,
      },
    }),
);

export const headingWeight = styleVariants(
  vars.headingWeight,
  mapToProperty('fontWeight'),
);

export const heading = styleVariants(
  vars.headingLevel,
  ({ mobile, tablet }, variant) => [
    createTextStyle(
      {
        fontSize: mobile.fontSize,
        lineHeight: mobile.lineHeight,
        ...mobile.capsizeTrims,
      },
      {
        '@media': {
          [breakpointQuery.tablet]: {
            fontSize: tablet.fontSize,
            lineHeight: tablet.lineHeight,
            ...tablet.capsizeTrims,
          },
        },
      },
      `heading_${variant}`,
    ),
  ],
);

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
  formAccent: vars.foregroundColor.formAccentLight,
  neutral: vars.foregroundColor.neutralInverted,
  secondary: vars.foregroundColor.secondaryInverted,
  link: vars.foregroundColor.linkLight,
});

export const lightModeTone = styleVariants({
  light: colorModeStyle({
    lightMode: {
      vars: lightContextToneVars,
    },
  }),
  dark: colorModeStyle({
    lightMode: {
      vars: darkContextToneVars,
    },
  }),
});

export const darkModeTone = styleVariants({
  light: colorModeStyle({
    darkMode: {
      vars: lightContextToneVars,
    },
  }),
  dark: colorModeStyle({
    darkMode: {
      vars: darkContextToneVars,
    },
  }),
});

const neutralOverrideForBackground: Partial<
  Record<BoxBackgroundVariant, keyof typeof textToneVars>
> = {
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
  (textTone) =>
    colorModeStyle({
      lightMode: {
        vars: {
          [textToneVars.neutral]:
            textToneVars[textTone as keyof typeof textToneVars],
        },
      },
    }),
);

export const darkModeNeutralOverride = styleVariants(
  neutralOverrideForBackground,
  (textTone) =>
    colorModeStyle({
      darkMode: {
        vars: {
          [textToneVars.neutral]:
            textToneVars[textTone as keyof typeof textToneVars],
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

export const touchableText = styleVariants(vars.textSize, (textDefinition) =>
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

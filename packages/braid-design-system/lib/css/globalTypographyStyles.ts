import type { StyleRule } from '@vanilla-extract/css';
import { vars } from '../../lib/themes/vars.css';
import { responsiveStyle } from './responsiveStyle';
import * as typographyStyles from '../css/typography.css';

interface GlobalTextStyleProps {
  weight?: keyof typeof typographyStyles.fontWeight;
  size?: keyof typeof typographyStyles.textSizeUntrimmed;
}

export const globalTextStyle = ({
  weight = 'regular',
  size = 'standard',
}: GlobalTextStyleProps = {}): StyleRule => ({
  fontFamily: vars.fontFamily,
  fontWeight: vars.textWeight[weight],
  color: vars.foregroundColor.neutral,
  ...responsiveStyle({
    mobile: {
      fontSize: vars.textSize[size].mobile.fontSize,
      lineHeight: vars.textSize[size].mobile.lineHeight,
    },
    tablet: {
      fontSize: vars.textSize[size].tablet.fontSize,
      lineHeight: vars.textSize[size].tablet.lineHeight,
    },
  }),
});

interface GlobalHeadingProps {
  weight?: keyof typeof typographyStyles.headingWeight;
  level: keyof typeof typographyStyles.heading;
}

export const globalHeadingStyle = ({
  weight = 'regular',
  level,
}: GlobalHeadingProps): StyleRule => ({
  fontFamily: vars.fontFamily,
  fontWeight: vars.headingWeight[weight],
  color: vars.foregroundColor.neutral,
  ...responsiveStyle({
    mobile: {
      fontSize: vars.headingLevel[level].mobile.fontSize,
      lineHeight: vars.headingLevel[level].mobile.lineHeight,
    },
    tablet: {
      fontSize: vars.headingLevel[level].tablet.fontSize,
      lineHeight: vars.headingLevel[level].tablet.lineHeight,
    },
  }),
});

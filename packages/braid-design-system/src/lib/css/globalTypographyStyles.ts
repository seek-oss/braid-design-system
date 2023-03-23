import type { StyleRule } from '@vanilla-extract/css';
import dedent from 'dedent';
import { vars } from '../../lib/themes/vars.css';
import { responsiveStyle } from './responsiveStyle';

interface GlobalTextStyleProps {
  weight?: keyof typeof vars.textWeight;
  size?: keyof typeof vars.textSize;
}

export const globalTextStyle = ({
  weight = 'regular',
  size = 'standard',
}: GlobalTextStyleProps = {}): StyleRule => {
  if (process.env.NODE_ENV !== 'production') {
    if (weight === 'medium') {
      // eslint-disable-next-line no-console
      console.warn(
        dedent`
          Passing \`medium\` to \`weight\` is deprecated and will be removed in a future version. Use \`strong\` instead.
            globalTextStyle({
            %c-   weight: "medium",
            %c+   weight: "strong,
            %c})
        `,
        'color: red',
        'color: green',
        'color: inherit',
      );
    }
  }

  return {
    fontFamily: vars.fontFamily,
    fontWeight: vars.textWeight[weight === 'strong' ? 'medium' : weight],
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
  };
};

interface GlobalHeadingProps {
  weight?: keyof typeof vars.headingWeight;
  level: keyof typeof vars.headingLevel;
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

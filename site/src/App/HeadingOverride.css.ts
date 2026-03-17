/**
 * TEMPORARY: Exploratory override for Heading level="2" (h2).
 * Delete this file and its import in App.tsx when done.
 */
import { globalStyle } from '@vanilla-extract/css';
import { responsiveStyle } from 'braid-src/css';
import { vars } from 'braid-src/lib/themes/vars.css';

globalStyle(
  'h2',
  responsiveStyle({
    mobile: {
      fontSize: `${vars.textSize.xsmall.mobile.fontSize} !important`,
      lineHeight: `${vars.textSize.xsmall.mobile.lineHeight} !important`,
      fontWeight: `${vars.textWeight.medium} !important`,
      textTransform: 'uppercase',
      // color: `${vars.foregroundColor.secondary} !important`,
    },
    tablet: {
      fontSize: `${vars.textSize.xsmall.tablet.fontSize} !important`,
      lineHeight: `${vars.textSize.xsmall.tablet.lineHeight} !important`,
    },
  }),
);

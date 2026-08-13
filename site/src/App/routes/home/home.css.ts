import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms } from 'braid-design-system/css';
import { palette } from 'braid-src/lib/color/palette';
import { responsiveStyle } from 'braid-src/lib/css/responsiveStyle';
import { vars } from 'braid-src/lib/themes/vars.css';

import { contentBlockXLWidth } from '../../Navigation/navigationSizes';

/**
 * Escapes the centered maxWidth container.
 * Expecets the content to be centered and free of the sidebar.
 */
export const hero = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    paddingY: 'xxlarge',
  }),
  {
    marginInline: 'calc(50% - 50vw)',
    minHeight: '40vh',
    marginTop: calc.negate(calc.add(vars.space.small, vars.space.xxlarge)),
    backgroundColor: palette.seekBlue['700'],
    backgroundImage:
      'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAwIiBoZWlnaHQ9IjQ4NSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMwMDAgNDg1Ij48Y2lyY2xlIGN4PSI1ODgiIGN5PSIyMjQiIHI9IjIwMCIgZmlsbD0iIzA3MjQ2MiIvPjxjaXJjbGUgY3g9IjI4MTYiIGN5PSIxMTYiIHI9IjEwMCIgZmlsbD0iIzA3MjQ2MiIvPjxwYXRoIGZpbGw9IiNlNjAyNzgiIGQ9Ik0zNDkgMGExMDAgMTAwIDAgMSAxLTE3MCAweiIvPjxwYXRoIGZpbGw9IiMwNzI0NjIiIGQ9Ik0yNjQzIDBhNDAxIDQwMSAwIDAgMS0zOTEgNDg0QTQwMCA0MDAgMCAwIDEgMTg2MSAweiIvPjwvc3ZnPg==")',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: 'auto 100%',
  },
]);

export const contentColumn = style([
  atoms({
    display: 'flex',
    flexDirection: { mobile: 'column', tablet: 'row' },
    alignItems: 'center',
    justifyContent: 'spaceBetween',
    gap: { mobile: 'large', tablet: 'xlarge' },
    width: 'full',
    paddingX: { mobile: 'medium', wide: 'xxlarge' },
  }),
  {
    maxWidth: contentBlockXLWidth,
    marginInline: 'auto',
  },
]);

export const heroCopy = style(
  responsiveStyle({
    mobile: { maxWidth: '100%' },
    desktop: { maxWidth: '50%' },
  }),
);

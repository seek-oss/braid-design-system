import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms } from 'braid-design-system/css';
import { palette } from 'braid-src/lib/color/palette';
import { responsiveStyle } from 'braid-src/lib/css/responsiveStyle';
import { vars } from 'braid-src/lib/themes/vars.css';
import { darken } from 'polished';

import { contentBlockXLWidth } from '../../Navigation/navigationSizes';

const canvas = darken(0.025, palette.grey['100']);

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
    backgroundColor: canvas,
    backgroundImage:
      'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAwIiBoZWlnaHQ9IjQ4NSIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDMwMDAgNDg1Ij48Y2lyY2xlIGN4PSI1ODgiIGN5PSIyMjQiIHI9IjIwMCIgZmlsbD0iIzgzOEZBNSIvPjxjaXJjbGUgY3g9IjI4MTYiIGN5PSIxMTYiIHI9IjEwMCIgZmlsbD0iIzgzOEZBNSIvPjxwYXRoIGZpbGw9IiM3NDhDRjAiIGQ9Ik0zNDkgMGExMDAgMTAwIDAgMSAxLTE3MCAweiIvPjxwYXRoIGZpbGw9IiNEMkQ3REYiIGQ9Ik0yNjQzIDBhNDAxIDQwMSAwIDAgMS0zOTEgNDg0QTQwMCA0MDAgMCAwIDEgMTg2MSAweiIvPjwvc3ZnPg==")',
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

export const gettingStartedCard = style([
  atoms({
    paddingX: 'xlarge',
    paddingY: 'xxlarge',
    borderRadius: 'large',
  }),
  {
    backgroundColor: canvas,
    // backgroundImage:
    //   'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDgwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjgwMCIgaGVpZ2h0PSIzMDAiIHJ4PSIxNiIgZmlsbD0iI2UyZTVlYyIvPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzAwIDMwMEw0MDAgMzAwQzQwMCAyNzIuMzg2IDQyMi4zODYgMjUwIDQ1MCAyNTBDNDc3LjYxNCAyNTAgNTAwIDI3Mi4zODYgNTAwIDMwMEw2MDAgMzAwQzYwMCAyMTcuMTU3IDUzMi44NDMgMTUwIDQ1MCAxNTBDMzY3LjE1NyAxNTAgMzAwIDIxNy4xNTcgMzAwIDMwMFoiIGZpbGw9IiM3NDhDRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTgwMCAxNTBWMjUwSDcwMEM3MDAgMTk0Ljc3MSA3NDQuNzcxIDE1MCA4MDAgMTUwWiIgZmlsbD0iIzJFMzg0OSIvPjxwYXRoIGQ9Ik02NTAgMTAwQzY1MCAxMjcuNjE0IDYyNy42MTQgMTUwIDYwMCAxNTBDNTcyLjM4NiAxNTAgNTUwIDEyNy42MTQgNTUwIDEwMEM1NTAgNzIuMzg1OCA1NzIuMzg2IDUwIDYwMCA1MEM2MjcuNjE0IDUwIDY1MCA3Mi4zODU4IDY1MCAxMDBaIiBmaWxsPSIjNzQ4Q0YwIi8+PC9zdmc+")',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
  },
]);

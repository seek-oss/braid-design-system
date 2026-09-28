import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { atoms, responsiveStyle } from 'braid-design-system/css';
import { palette } from 'braid-src/lib/color/palette';
import { vars } from 'braid-src/lib/themes/vars.css';
import { transparentize } from 'polished';

import {
  contentBlockXLWidth,
  pageContentSpaceTop,
  pageContentSpaceY,
  sideNavBreakpoint,
} from '../../Navigation/navigationSizes';

export const hero = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    paddingY: 'xxlarge',
  }),
  responsiveStyle({
    mobile: {
      minHeight: '25vh',
      marginTop: calc.negate(
        calc.add(
          vars.space[pageContentSpaceY],
          vars.space[pageContentSpaceTop.mobile],
        ),
      ),
    },
    [sideNavBreakpoint]: {
      minHeight: '35vh',
      marginTop: calc.negate(
        calc.add(
          vars.space[pageContentSpaceY],
          vars.space[pageContentSpaceTop[sideNavBreakpoint]],
        ),
      ),
    },
  }),
  {
    marginInline: 'calc(50% - 50vw)',
    backgroundColor: palette.grey['900'],
    backgroundImage: `url("data:image/svg+xml;base64,${Buffer.from(
      [
        '<svg xmlns="http://www.w3.org/2000/svg" width="3000" height="485" fill="none" viewBox="0 0 3000 485">',
        `  <circle cx="588" cy="224" r="200" fill="${palette.grey['800']}"/>`,
        `  <circle cx="2816" cy="116" r="100" fill="${palette.grey['800']}"/>`,
        `  <path fill="${palette.grey['800']}" d="M349 0a100 100 0 1 1-170 0z"/>`,
        `  <path fill="${transparentize(0.6, palette.grey['800'])}" d="M2643 0a401 401 0 0 1-391 484A400 400 0 0 1 1861 0z"/>`,
        '</svg>',
      ].join(''),
    ).toString('base64')}")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right center',
    backgroundSize: 'auto 100%',
  },
]);

export const contentColumn = style([
  atoms({
    display: 'flex',
    alignItems: 'center',
    width: 'full',
    paddingX: { mobile: 'medium', wide: 'xxlarge' },
  }),
  {
    maxWidth: contentBlockXLWidth,
    marginInline: 'auto',
  },
]);

export const heroColumn = style({
  minWidth: 0,
});

globalStyle(`${hero} ${heroColumn}`, {
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: '0%',
});

export const gettingStartedCard = style([
  atoms({
    padding: 'xlarge',
    borderRadius: 'large',
  }),
]);

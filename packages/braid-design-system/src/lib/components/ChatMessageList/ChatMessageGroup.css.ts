import {
  createVar,
  globalStyle,
  style,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { atoms } from '../../css/atoms/atoms';
import { px } from '../../utils/px';

import { vars } from '../../themes/vars.css';
import { avatarSizeInPx } from '../Avatar/Avatar.css';

/**
 * Tighter than the space scale, so user and participant bubbles can join.
 * Assistant messages use the `small` gap on Box instead: they have no padding.
 */
export const tight = style({
  gap: vars.grid,
});

export const avatarSize = 'small';

const avatarSizePx = px(avatarSizeInPx[avatarSize]);

/**
 * How many children the group has. CSS cannot count them, so it is set on the
 * avatar grid and the avatar spans that many rows.
 */
export const chatMessageCount = createVar();

/**
 * Avatar column beside the message column. The avatar spans the message rows
 * and lines up with their end, so a short message stays as tall as its text.
 */
export const avatarGrid = style([
  atoms({ alignItems: 'flexEnd' }),
  {
    display: 'grid',
    gridTemplateColumns: `${avatarSizePx} minmax(0, 1fr)`,
    columnGap: vars.space.small,
  },
]);

// Every direct child is message content, so it goes in the message column.
// That includes a child that is not a ChatMessage, which has no class of its own.
globalStyle(`${avatarGrid} > *`, {
  gridColumn: 2,
  minWidth: 0,
});

/**
 * Space between message rows. The avatar spans those rows, so it lines up
 * with the last message. The sent time and actions are a later row.
 */
export const avatarGridRowGap = styleVariants({
  // user and participant bubbles join, as with `tight`
  tight: {
    rowGap: vars.grid,
  },
  // assistant text has no bubble padding, so it uses the `small` space
  open: {
    rowGap: vars.space.small,
  },
});

/**
 * A sent time uses the `xsmall` space. The tight row gap already provides one
 * grid unit, so this adds the rest.
 */
export const sentRow = style({
  marginTop: calc.subtract(vars.space.xsmall, vars.grid),
});

export const avatarSlot = style({
  width: avatarSizePx,
  gridRow: `1 / span ${chatMessageCount}`,
  selectors: {
    // Overrides the message column rule on the grid. Both are child selectors,
    // so this one is more specific and wins.
    [`${avatarGrid} > &`]: {
      gridColumn: 1,
    },
  },
});

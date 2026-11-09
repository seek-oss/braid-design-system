import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { px } from '../../utils/px';

import { darkMode } from '../../css/atoms/sprinkles.css';
import { tone } from '../../css/typography.css';
import { vars } from '../../themes/vars.css';
import { avatarSizeInPx } from '../Avatar/Avatar.css';

// Marks the message root so the list can align a tall message to its top.
export const root = style({});

export const bubble = style({
  maxWidth: '75%',
});

export const radius = {
  user: style({
    borderBottomRightRadius: vars.borderRadius.small,
  }),
  userJoined: style({
    borderTopRightRadius: vars.borderRadius.small,
    borderBottomRightRadius: vars.borderRadius.small,
  }),
  start: style({
    borderBottomLeftRadius: vars.borderRadius.small,
  }),
  startJoined: style({
    borderTopLeftRadius: vars.borderRadius.small,
    borderBottomLeftRadius: vars.borderRadius.small,
  }),
};

export const alignEnd = style({
  marginLeft: 'auto',
});

export const avatarSize = 'small' as const;

const avatarSizePx = px(avatarSizeInPx[avatarSize]);

export const avatarSlot = style({
  width: avatarSizePx,
});

export const avatarOffset = style({
  paddingLeft: calc.add(avatarSizePx, vars.space.small),
});

// Marker for user bubbles. Text sets `color` from its tone class and discards
// `className`, so the override targets that class. On a dark background the
// `brandAccent` tone resolves to the light foreground token.
// `globalStyle` cannot nest the selectors `colorModeStyle` returns, so this
// uses the same `html${darkMode}` condition directly.
export const text = style({});

globalStyle(`html${darkMode} ${text} ${tone.neutral}`, {
  color: vars.foregroundColor.brandAccentLight,
});

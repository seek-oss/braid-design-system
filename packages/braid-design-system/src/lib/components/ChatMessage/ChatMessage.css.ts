import { globalStyle, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

import { darkMode } from '../../css/atoms/sprinkles.css';
import { tone } from '../../css/typography.css';
import { vars } from '../../themes/vars.css';

export const root = style({
  selectors: {
    '&:has(+ &)': {
      marginBottom: vars.space.medium,
    },
  },
});

const messageGroupSpacing = {
  selectors: {
    [`${root}&:has(+ &)`]: {
      marginBottom: vars.grid,
    },
  },
};

const user = style(messageGroupSpacing);
const assistant = style(messageGroupSpacing);
const participant = style(messageGroupSpacing);
export const sender = { user, assistant, participant };

export const avatar = style({
  width: '32px',
  selectors: {
    [[
      `${user}:has(+ ${user}) &`,
      `${assistant}:has(+ ${assistant}) &`,
      `${participant}:has(+ ${participant}) &`,
    ].join(',')]: {
      visibility: 'hidden',
      height: 0,
    },
  },
});

export const name = style({
  selectors: {
    // Only shown on the first message from this sender.
    [[
      `${user} + ${user} &`,
      `${assistant} + ${assistant} &`,
      `${participant} + ${participant} &`,
    ].join(',')]: {
      display: 'none',
    },
  },
});

const lastInGroup = [
  `${user}:has(+ ${user}) &`,
  `${assistant}:has(+ ${assistant}) &`,
  `${participant}:has(+ ${participant}) &`,
].join(',');

export const sent = style({
  selectors: {
    // Only shown on the last message from this sender.
    [lastInGroup]: {
      display: 'none',
    },
  },
});

export const actions = style({
  selectors: {
    [lastInGroup]: {
      display: 'none',
    },
  },
});

export const avatarOffset = style({
  paddingLeft: calc.add('32px', vars.space.small),
});

export const bubble = style({
  maxWidth: '75%',
  borderRadius: vars.borderRadius.large,
  selectors: {
    [`${user} &`]: {
      marginLeft: 'auto',
      borderBottomRightRadius: 0,
    },
    [`${user} + ${user} &`]: {
      borderTopRightRadius: 0,
    },
    [[`${assistant} &`, `${participant} &`].join(',')]: {
      borderBottomLeftRadius: 0,
    },
    // Not the first message from this sender. Assistant messages have no
    // bubble padding, so the following message keeps the looser top space
    // that the avatar row used to provide.
    [[
      `${assistant} + ${assistant} &`,
      `${participant} + ${participant} &`,
    ].join(',')]: {
      borderTopLeftRadius: 0,
    },
    [`${assistant} + ${assistant} &`]: {
      marginTop: vars.space.small,
    },
  },
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

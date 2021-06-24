import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { IconCritical, IconPositive } from '../icons';
import buildDataAttributes from '../private/buildDataAttributes';
export var tones = ['neutral', 'critical', 'positive'];
const Icon = {
  critical: /* #__PURE__*/ _jsx(IconCritical, {
    tone: 'critical',
  }),
  positive: /* #__PURE__*/ _jsx(IconPositive, {
    tone: 'positive',
  }),
};
export var FieldMessage = function FieldMessage(_ref) {
  const id = _ref.id,
    _ref$tone = _ref.tone,
    tone = _ref$tone === void 0 ? 'neutral' : _ref$tone,
    message = _ref.message,
    secondaryMessage = _ref.secondaryMessage,
    _ref$reserveMessageSp = _ref.reserveMessageSpace,
    reserveMessageSpace =
      _ref$reserveMessageSp === void 0 ? true : _ref$reserveMessageSp,
    disabled = _ref.disabled,
    data = _ref.data;

  if (tones.indexOf(tone) === -1) {
    throw new Error('Invalid tone: '.concat(tone));
  }

  if (!message && !secondaryMessage && !reserveMessageSpace) {
    return null;
  }

  const showMessage = !disabled && message;
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        id,
        display: 'flex',
        justifyContent: 'flexEnd',
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    /* #__PURE__*/ _jsx(
      Box,
      {
        flexGrow: 1,
      },
      void 0,
      /* #__PURE__*/ _jsx(
        Text,
        {
          size: 'small',
          tone: tone === 'neutral' ? 'secondary' : tone,
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Box,
          {
            display: 'flex',
            userSelect: showMessage ? undefined : 'none',
          },
          void 0,
          showMessage && tone !== 'neutral'
            ? /* #__PURE__*/ _jsx(
                Box,
                {
                  paddingRight: 'xxsmall',
                  flexShrink: 0,
                  flexGrow: 0,
                },
                void 0,
                Icon[tone],
              )
            : null,
          showMessage ? message : '\xA0',
        ),
      ),
    ),
    secondaryMessage && !disabled
      ? /* #__PURE__*/ _jsx(
          Box,
          {
            paddingLeft: 'xsmall',
            flexGrow: 0,
          },
          void 0,
          secondaryMessage,
        )
      : null,
  );
};
FieldMessage.displayName = 'FieldMessage';

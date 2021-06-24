import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Box } from '../Box/Box';
import {
  IconInfo,
  IconCritical,
  IconPositive,
  IconPromote,
  IconCaution,
} from '../icons';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { Overlay } from '../private/Overlay/Overlay';
import { useBackground } from '../Box/BackgroundContext';
import { textAlignedToIcon } from '../../atoms/textAlignedToIcon.css';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './Alert.css';
const backgroundForTone = {
  promote: 'promoteLight',
  info: 'infoLight',
  positive: 'positiveLight',
  caution: 'cautionLight',
  critical: 'criticalLight',
};
const borderForTone = {
  promote: 'borderPromote',
  info: 'borderInfo',
  positive: 'borderPositive',
  caution: 'borderCaution',
  critical: 'borderCritical',
};
const icons = {
  positive: IconPositive,
  info: IconInfo,
  promote: IconPromote,
  caution: IconCaution,
  critical: IconCritical,
};
const highlightBarSize = 'xxsmall';
export var Alert = function Alert(_ref) {
  let _ref2;

  const _ref$tone = _ref.tone,
    tone = _ref$tone === void 0 ? 'info' : _ref$tone,
    children = _ref.children,
    id = _ref.id,
    _ref$closeLabel = _ref.closeLabel,
    closeLabel = _ref$closeLabel === void 0 ? 'Close' : _ref$closeLabel,
    data = _ref.data,
    onClose = _ref.onClose;
  const parentBackground = useBackground();
  const Icon = icons[tone];
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        id,
        background: backgroundForTone[tone],
        padding: 'medium',
        borderRadius: 'standard',
        position: 'relative',
        overflow: 'hidden',
        role: 'alert',
        'aria-live': 'polite',
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    /* #__PURE__*/ _jsx(
      Box,
      {
        paddingLeft: highlightBarSize,
      },
      void 0,
      /* #__PURE__*/ _jsx(
        Columns,
        {
          space: 'small',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Column,
          {
            width: 'content',
          },
          void 0,
          /* #__PURE__*/ _jsx(Icon, {
            tone,
          }),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Box,
            {
              className: textAlignedToIcon.standard,
            },
            void 0,
            children,
          ),
        ),
        onClose
          ? /* #__PURE__*/ _jsx(
              Column,
              {
                width: 'content',
              },
              void 0,
              /* #__PURE__*/ _jsx(ClearButton, {
                tone: 'neutral',
                label: closeLabel,
                onClick: onClose,
              }),
            )
          : null,
      ),
    ),
    parentBackground !== 'card' &&
      /* #__PURE__*/ _jsx(Overlay, {
        borderRadius: 'standard',
        boxShadow: borderForTone[tone],
        visible: true,
        className:
          ((_ref2 = {}),
          _defineProperty(_ref2, styles.toneBorder, tone !== 'caution'),
          _defineProperty(_ref2, styles.cautionBorder, tone === 'caution'),
          _ref2),
      }),
    /* #__PURE__*/ _jsx(Box, {
      background: tone,
      paddingLeft: highlightBarSize,
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
    }),
  );
};
Alert.displayName = 'Alert';

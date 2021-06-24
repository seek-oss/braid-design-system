import _jsx from '@babel/runtime/helpers/jsx';

let _Badge, _Placeholder;

import React from 'react';
import { Badge, Checkbox, Stack } from '../';
import source from '../../utils/source.macro';
import { Placeholder } from '../../playroom/components';
export var galleryItems = [
  {
    label: 'Standard',
    Example: function Example(_ref) {
      const id = _ref.id,
        getState = _ref.getState,
        toggleState = _ref.toggleState;
      return source(
        /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: getState('checked'),
          onChange: function onChange() {
            return toggleState('checked');
          },
          label: 'Label',
        }),
      );
    },
  },
  {
    label: 'With a description',
    Example: function Example(_ref2) {
      const id = _ref2.id,
        getState = _ref2.getState,
        toggleState = _ref2.toggleState;
      return source(
        /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: getState('checked'),
          onChange: function onChange() {
            return toggleState('checked');
          },
          label: 'Label',
          description: 'Extra information about the field',
        }),
      );
    },
  },
  {
    label: 'With a Badge',
    Example: function Example(_ref3) {
      const id = _ref3.id,
        getState = _ref3.getState,
        toggleState = _ref3.toggleState;
      return source(
        /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: getState('checked'),
          onChange: function onChange() {
            return toggleState('checked');
          },
          label: 'Label',
          badge:
            _Badge ||
            (_Badge = /* #__PURE__*/ _jsx(
              Badge,
              {
                tone: 'positive',
                weight: 'strong',
              },
              void 0,
              'Badge',
            )),
        }),
      );
    },
  },
  {
    label: 'Toggling nested content',
    Example: function Example(_ref4) {
      const id = _ref4.id,
        getState = _ref4.getState,
        toggleState = _ref4.toggleState,
        setDefaultState = _ref4.setDefaultState;
      return source(
        /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          setDefaultState('checked', true),
          /* #__PURE__*/ _jsx(
            Checkbox,
            {
              id,
              checked: getState('checked'),
              onChange: function onChange() {
                return toggleState('checked');
              },
              label: 'Label',
            },
            void 0,
            _Placeholder ||
              (_Placeholder = /* #__PURE__*/ _jsx(Placeholder, {
                height: 100,
              })),
          ),
        ),
      );
    },
  },
  {
    label: 'States',
    background: 'card',
    Example: function Example(_ref5) {
      const id = _ref5.id,
        handler = _ref5.handler;
      return source(
        /* #__PURE__*/ _jsx(
          Stack,
          {
            space: 'medium',
          },
          void 0,
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'chk_states_'.concat(id, '_1'),
            checked: false,
            label: 'Unchecked',
            onChange: handler,
          }),
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'chk_states_'.concat(id, '_2'),
            checked: true,
            label: 'Checked',
            onChange: handler,
          }),
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'chk_states_'.concat(id, '_3'),
            checked: 'mixed',
            label: 'Mixed',
            onChange: handler,
          }),
          /* #__PURE__*/ _jsx(Checkbox, {
            id: 'chk_states_'.concat(id, '_4'),
            disabled: true,
            checked: false,
            onChange: handler,
            label: 'Disabled',
          }),
        ),
      );
    },
  },
  {
    label: 'Small',
    Example: function Example(_ref6) {
      const id = _ref6.id,
        getState = _ref6.getState,
        toggleState = _ref6.toggleState;
      return source(
        /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: getState('checked'),
          onChange: function onChange() {
            return toggleState('checked');
          },
          label: 'Label',
          size: 'small',
        }),
      );
    },
  },
];

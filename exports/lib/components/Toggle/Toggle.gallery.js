import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Toggle } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Standard',
    Example: function Example(_ref) {
      const id = _ref.id,
        getState = _ref.getState,
        toggleState = _ref.toggleState;
      return source(
        /* #__PURE__*/ _jsx(Toggle, {
          label: 'Label',
          id,
          on: getState('toggle'),
          onChange: function onChange() {
            return toggleState('toggle');
          },
        }),
      );
    },
  },
  {
    label: 'Small',
    Example: function Example(_ref2) {
      const id = _ref2.id,
        getState = _ref2.getState,
        toggleState = _ref2.toggleState;
      return source(
        /* #__PURE__*/ _jsx(Toggle, {
          label: 'Label',
          id,
          on: getState('toggle'),
          onChange: function onChange() {
            return toggleState('toggle');
          },
          size: 'small',
        }),
      );
    },
  },
  {
    label: 'Toggle Alignment: "left" | "justify" | "right"',
    Example: function Example(_ref3) {
      const id = _ref3.id,
        getState = _ref3.getState,
        toggleState = _ref3.toggleState;
      return source(
        /* #__PURE__*/ _jsx(Toggle, {
          align: 'right',
          label: 'Right aligned',
          id,
          on: getState('toggle'),
          onChange: function onChange() {
            return toggleState('toggle');
          },
        }),
      );
    },
  },
];

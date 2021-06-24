import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Toggle } from '../';
import { Text } from '../Text/Text';
import { Strong } from '../Strong/Strong';
import source from '../../utils/source.macro';
import { Stack } from '../Stack/Stack';
const docs = {
  category: 'Content',
  migrationGuide: true,
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
  alternatives: [
    {
      name: 'Checkbox',
      description: 'For selections part of a form submission.',
    },
  ],
  additional: [
    {
      label: 'Alignment',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Toggles can be aligned via the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'align'),
        ' prop.',
      ),
      Example: function Example(_ref2) {
        const id = _ref2.id,
          getState = _ref2.getState,
          toggleState = _ref2.toggleState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
              dividers: true,
            },
            void 0,
            /* #__PURE__*/ _jsx(Toggle, {
              label: 'Left',
              id: ''.concat(id, '_1'),
              on: getState('toggle1'),
              onChange: function onChange() {
                return toggleState('toggle1');
              },
              align: 'left',
            }),
            /* #__PURE__*/ _jsx(Toggle, {
              label: 'Justify',
              id: ''.concat(id, '_2'),
              on: getState('toggle2'),
              onChange: function onChange() {
                return toggleState('toggle2');
              },
              align: 'justify',
            }),
            /* #__PURE__*/ _jsx(Toggle, {
              label: 'Right',
              id: ''.concat(id, '_3'),
              on: getState('toggle3'),
              onChange: function onChange() {
                return toggleState('toggle3');
              },
              align: 'right',
            }),
          ),
        );
      },
    },
    {
      label: 'Sizes',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'You can customise the size of the toggle via the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'size'),
        ' ',
        'prop, which accepts either ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'standard'),
        ' or',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'small.'),
      ),
      Example: function Example(_ref3) {
        const id = _ref3.id,
          getState = _ref3.getState,
          toggleState = _ref3.toggleState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'medium',
            },
            void 0,
            /* #__PURE__*/ _jsx(Toggle, {
              id: ''.concat(id, '_standard'),
              label: 'Standard',
              on: getState('two'),
              onChange: function onChange() {
                return toggleState('two');
              },
              size: 'standard',
            }),
            /* #__PURE__*/ _jsx(Toggle, {
              id: ''.concat(id, '_small'),
              label: 'Small',
              on: getState('one'),
              onChange: function onChange() {
                return toggleState('one');
              },
              size: 'small',
            }),
          ),
        );
      },
    },
  ],
};
export default docs;

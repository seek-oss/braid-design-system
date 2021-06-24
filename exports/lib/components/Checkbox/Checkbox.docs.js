import _jsx from '@babel/runtime/helpers/jsx';

let _Badge, _Placeholder;

import React from 'react';
import {
  CheckboxStandalone,
  Badge,
  Checkbox,
  List,
  Stack,
  Strong,
  Text,
  TextLink,
  Alert,
} from '../';
import source from '../../utils/source.macro';
import { Placeholder } from '../../playroom/components';
const docs = {
  category: 'Content',
  subComponents: ['CheckboxStandalone'],
  migrationGuide: true,
  Example: function Example(_ref) {
    const id = _ref.id,
      setDefaultState = _ref.setDefaultState,
      getState = _ref.getState,
      toggleState = _ref.toggleState;
    return source(
      /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        setDefaultState('checked', true),
        /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: getState('checked'),
          onChange: function onChange() {
            return toggleState('checked');
          },
          label: 'Label',
        }),
      ),
    );
  },
  accessibility: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'Follows the',
    ' ',
    /* #__PURE__*/ _jsx(
      TextLink,
      {
        href: 'https://www.w3.org/TR/wai-aria-practices/#checkbox',
      },
      void 0,
      'WAI-ARIA Checkbox Pattern',
    ),
    ', supporting both dual-state and tri-state specifications.',
  ),
  alternatives: [
    {
      name: 'Toggle',
      description: 'For settings that do not require a form submission.',
    },
    {
      name: 'RadioGroup',
      description: 'For single select.',
    },
  ],
  additional: [
    {
      label: 'Message and tone',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'A ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'message'),
          ' is typically used to communicate the status of a field, such as an error message. This will be announced on focus of the field and can be combined with a',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/foundations/tones',
            },
            void 0,
            'tone',
          ),
          ' to illustrate its purpose.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The supported tones are: ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, '"critical"'),
          ' and',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, '"neutral"'),
          '.',
        ),
      ),
      Example: function Example(_ref2) {
        const id = _ref2.id,
          getState = _ref2.getState,
          setState = _ref2.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(Checkbox, {
              id: ''.concat(id, '_1'),
              onChange: setState('checkbox'),
              checked: getState('checkbox'),
              label: 'Label',
              tone: 'critical',
              message: 'Critical message',
            }),
            /* #__PURE__*/ _jsx(Checkbox, {
              id: ''.concat(id, '_2'),
              onChange: setState('checkbox2'),
              checked: getState('checkbox2'),
              label: 'Label',
              tone: 'neutral',
              message: 'Neutral message',
            }),
          ),
        );
      },
    },
    {
      label: 'Field description',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Additional context can be provided with a ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'description'),
        '. This will display below the field label and also be announced by a screen reader when the field is focused.',
      ),
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
            description: 'Extra information about the field',
          }),
        );
      },
    },
    {
      label: 'Sizes',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'You can customise the size of the checkbox via the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'size'),
        ' prop, which accepts either',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'standard'),
        ' or ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'small.'),
      ),
      Example: function Example(_ref4) {
        const id = _ref4.id,
          getState = _ref4.getState,
          toggleState = _ref4.toggleState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'medium',
            },
            void 0,
            /* #__PURE__*/ _jsx(Checkbox, {
              id: ''.concat(id, '_standard'),
              label: 'Standard',
              checked: getState('two'),
              onChange: function onChange() {
                return toggleState('two');
              },
              size: 'standard',
            }),
            /* #__PURE__*/ _jsx(Checkbox, {
              id: ''.concat(id, '_small'),
              label: 'Small',
              checked: getState('one'),
              onChange: function onChange() {
                return toggleState('one');
              },
              size: 'small',
            }),
          ),
        );
      },
    },
    {
      label: 'Disabled field',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'A Checkbox can be marked as disabled by passing ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'true'),
        ' ',
        'to the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'disabled'),
        ' prop.',
      ),
      background: 'card',
      Example: function Example(_ref5) {
        const id = _ref5.id,
          handler = _ref5.handler;
        return source(
          /* #__PURE__*/ _jsx(Checkbox, {
            id,
            disabled: true,
            checked: false,
            onChange: handler,
            label: 'Label',
          }),
        );
      },
    },
    {
      label: 'Badge support',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Add a ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Badge',
          },
          void 0,
          'Badge',
        ),
        ' alongside the field label using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'badge'),
        ' prop.',
      ),
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
            badge:
              _Badge ||
              (_Badge = /* #__PURE__*/ _jsx(
                Badge,
                {
                  tone: 'positive',
                  weight: 'strong',
                },
                void 0,
                'Positive',
              )),
          }),
        );
      },
    },
    {
      label: 'Toggling nested content',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Nesting content inside of a Checkbox will both align the content with the field label, and toggle it\u2019s visibility based on the checked state.',
      ),
      Example: function Example(_ref7) {
        const id = _ref7.id,
          setDefaultState = _ref7.setDefaultState,
          getState = _ref7.getState,
          toggleState = _ref7.toggleState;
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
      label: 'Tri-state support',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'A Checkbox can be used to represent the value of a group of checkboxes, presenting as:',
        ),
        /* #__PURE__*/ _jsx(
          List,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'checked'),
            ', when the entire group is checked,',
          ),
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'unchecked'),
            ', when the entire group is unchecked, or',
          ),
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'mixed'),
            ', when the group has some of each.',
          ),
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'For mixed state checkboxes, you can set the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'checked'),
          ' ',
          'prop to ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, '"mixed"'),
          ', or provide an array of checked values (e.g. ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, '[true, false, false]'),
          ') to calculate the tri-state value.',
        ),
      ),
      Example: function Example(_ref8) {
        const id = _ref8.id,
          getState = _ref8.getState,
          setState = _ref8.setState,
          toggleState = _ref8.toggleState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
              dividers: true,
            },
            void 0,
            /* #__PURE__*/ _jsx(Checkbox, {
              id,
              label: 'Select all',
              checked: [getState('one'), getState('two'), getState('three')],
              onChange: function onChange(_ref9) {
                const checked = _ref9.currentTarget.checked;
                setState('one', checked);
                setState('two', checked);
                setState('three', checked);
              },
            }),
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(Checkbox, {
                id: ''.concat(id, '_1'),
                label: 'One',
                checked: getState('one'),
                onChange: function onChange() {
                  return toggleState('one');
                },
              }),
              /* #__PURE__*/ _jsx(Checkbox, {
                id: ''.concat(id, '_2'),
                label: 'Two',
                checked: getState('two'),
                onChange: function onChange() {
                  return toggleState('two');
                },
              }),
              /* #__PURE__*/ _jsx(Checkbox, {
                id: ''.concat(id, '_3'),
                label: 'Three',
                checked: getState('three'),
                onChange: function onChange() {
                  return toggleState('three');
                },
              }),
            ),
          ),
        );
      },
    },
    {
      label: 'Standalone',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'For cases where a Checkbox needs to be used without a form field style label, you can use the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'CheckboxStandalone'),
          ' ',
          'component.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'To maintain accessibility, it is required to provide either a',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'aria-label'),
          ' or ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'aria-labelledby'),
          ' ',
          'property, to describe the field\u2019s intent.',
        ),
        /* #__PURE__*/ _jsx(
          Alert,
          {
            tone: 'info',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'medium',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'Given there is no visual label, the following features cannot be supported:',
            ),
            /* #__PURE__*/ _jsx(
              List,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'description'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'message'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'badge'),
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'children (nested content)',
              ),
            ),
          ),
        ),
      ),
      Example: function Example(_ref10) {
        const id = _ref10.id,
          setDefaultState = _ref10.setDefaultState,
          getState = _ref10.getState,
          toggleState = _ref10.toggleState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('checked', true),
            /* #__PURE__*/ _jsx(CheckboxStandalone, {
              id,
              checked: getState('checked'),
              onChange: function onChange() {
                return toggleState('checked');
              },
              'aria-label': 'Standalone checkbox example',
            }),
          ),
        );
      },
    },
  ],
};
export default docs;

import _jsx from '@babel/runtime/helpers/jsx';

let _Placeholder,
  _Placeholder2,
  _Placeholder3,
  _Placeholder4,
  _Placeholder5,
  _Placeholder6,
  _Placeholder7,
  _Placeholder8,
  _Placeholder9;

import React from 'react';
import source from '../../utils/source.macro';
import { Accordion, AccordionItem, Card, Text, TextLink, Strong } from '../';
import { Placeholder } from '../../playroom/components';
import { validSpaceValues } from './Accordion';
const docs = {
  category: 'Content',
  subComponents: ['AccordionItem'],
  migrationGuide: true,
  Example: function Example(_ref) {
    const id = _ref.id;
    return source(
      /* #__PURE__*/ _jsx(
        Accordion,
        {},
        void 0,
        /* #__PURE__*/ _jsx(
          AccordionItem,
          {
            label: 'Accordion item 1',
            id: ''.concat(id, '_1'),
          },
          void 0,
          _Placeholder ||
            (_Placeholder = /* #__PURE__*/ _jsx(Placeholder, {
              height: 80,
            })),
        ),
        /* #__PURE__*/ _jsx(
          AccordionItem,
          {
            label: 'Accordion item 2',
            id: ''.concat(id, '_2'),
          },
          void 0,
          _Placeholder2 ||
            (_Placeholder2 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 80,
            })),
        ),
        /* #__PURE__*/ _jsx(
          AccordionItem,
          {
            label: 'Accordion item 3',
            id: ''.concat(id, '_3'),
          },
          void 0,
          _Placeholder3 ||
            (_Placeholder3 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 80,
            })),
        ),
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
        href: 'https://www.w3.org/TR/wai-aria-practices/#disclosure',
      },
      void 0,
      'WAI-ARIA Disclosure Pattern.',
    ),
  ),
  alternatives: [
    {
      name: 'Disclosure',
      description: 'For a lighter visual treatment.',
    },
    {
      name: 'Tabs',
      description: 'For a horizontal selection of multiple content panels.',
    },
    {
      name: 'Dialog',
      description: 'For exposing a smaller amount of content in a modal.',
    },
    {
      name: 'Drawer',
      description: 'For exposing a larger amount of content in a modal.',
    },
  ],
  additional: [
    {
      label: 'Customising the appearance',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'You can customise the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'size'),
          ' and',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'tone'),
          ' props, and optionally set the',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'dividers'),
          ' prop to ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'false.'),
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'While we aim to provide sensible defaults, you can also provide a custom ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'space'),
          ' value to adjust the spacing between items. Note that, to ensure adequate space for touch targets, the',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'space'),
          ' prop only accepts values of',
          ' ',
          validSpaceValues.map(function (value, i) {
            return /* #__PURE__*/ _jsx(
              React.Fragment,
              {},
              value,
              i === validSpaceValues.length - 1 ? ' and ' : '',
              i !== validSpaceValues.length - 1 && i !== 0 ? ', ' : '',
              /* #__PURE__*/ _jsx(
                Strong,
                {},
                void 0,
                '\u201C',
                value,
                '\u201D',
              ),
            );
          }),
          '.',
        ),
      ),
      Example: function Example(_ref2) {
        const id = _ref2.id;
        return source(
          /* #__PURE__*/ _jsx(
            Card,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Accordion,
              {
                size: 'standard',
                tone: 'secondary',
                space: 'xlarge',
                dividers: false,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                AccordionItem,
                {
                  label: 'Accordion item 1',
                  id: ''.concat(id, '_1'),
                },
                void 0,
                _Placeholder4 ||
                  (_Placeholder4 = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                  })),
              ),
              /* #__PURE__*/ _jsx(
                AccordionItem,
                {
                  label: 'Accordion item 2',
                  id: ''.concat(id, '_2'),
                },
                void 0,
                _Placeholder5 ||
                  (_Placeholder5 = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                  })),
              ),
              /* #__PURE__*/ _jsx(
                AccordionItem,
                {
                  label: 'Accordion item 3',
                  id: ''.concat(id, '_3'),
                },
                void 0,
                _Placeholder6 ||
                  (_Placeholder6 = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                  })),
              ),
            ),
          ),
        );
      },
    },
    {
      label: 'Managing state',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'An ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'AccordionItem'),
        ', by default, manages its own state internally. If you\u2019d like to take control of the state, you can do so using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'expanded'),
        ' and',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'onToggle'),
        ' props.',
      ),
      Example: function Example(_ref3) {
        const id = _ref3.id,
          setDefaultState = _ref3.setDefaultState,
          getState = _ref3.getState,
          toggleState = _ref3.toggleState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('expanded1', false),
            setDefaultState('expanded2', true),
            setDefaultState('expanded3', false),
            /* #__PURE__*/ _jsx(
              Accordion,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                AccordionItem,
                {
                  label: 'Accordion item 1',
                  id: ''.concat(id, '_1'),
                  expanded: getState('expanded1'),
                  onToggle: function onToggle() {
                    return toggleState('expanded1');
                  },
                },
                void 0,
                _Placeholder7 ||
                  (_Placeholder7 = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                  })),
              ),
              /* #__PURE__*/ _jsx(
                AccordionItem,
                {
                  label: 'Accordion item 2',
                  id: ''.concat(id, '_2'),
                  expanded: getState('expanded2'),
                  onToggle: function onToggle() {
                    return toggleState('expanded2');
                  },
                },
                void 0,
                _Placeholder8 ||
                  (_Placeholder8 = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                  })),
              ),
              /* #__PURE__*/ _jsx(
                AccordionItem,
                {
                  label: 'Accordion item 3',
                  id: ''.concat(id, '_3'),
                  expanded: getState('expanded3'),
                  onToggle: function onToggle() {
                    return toggleState('expanded3');
                  },
                },
                void 0,
                _Placeholder9 ||
                  (_Placeholder9 = /* #__PURE__*/ _jsx(Placeholder, {
                    height: 80,
                  })),
              ),
            ),
          ),
        );
      },
    },
  ],
};
export default docs;

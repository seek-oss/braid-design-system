import _jsx from '@babel/runtime/helpers/jsx';

let _TextLink;

import React from 'react';
import { Textarea, TextLink, IconHelp, List, Text, Strong, Stack } from '../';
import source from '../../utils/source.macro';
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example(_ref) {
    const id = _ref.id,
      getState = _ref.getState,
      setState = _ref.setState;
    return source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        id,
        onChange: setState('textarea'),
        value: getState('textarea'),
      }),
    );
  },
  alternatives: [
    {
      name: 'TextField',
      description: 'For shorter-form text.',
    },
  ],
  additional: [
    {
      label: 'Additional labels',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Supports all three levels of',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/FieldLabel',
            },
            void 0,
            'FieldLabel',
          ),
          ':',
        ),
        /* #__PURE__*/ _jsx(
          List,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'label'),
            ' \u2014 primary title of the field,',
          ),
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'secondaryLabel'),
            ' \u2014 additional context, typically used to indicate optionality of a field,',
          ),
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'tertiaryLabel'),
            ' \u2014 further context, typically used for providing assistance with a field.',
          ),
        ),
      ),
      Example: function Example(_ref2) {
        const id = _ref2.id,
          getState = _ref2.getState,
          setState = _ref2.setState;
        return source(
          /* #__PURE__*/ _jsx(Textarea, {
            label: 'Label',
            id,
            onChange: setState('textarea'),
            value: getState('textarea'),
            secondaryLabel: 'optional',
            tertiaryLabel:
              _TextLink ||
              (_TextLink = /* #__PURE__*/ _jsx(
                TextLink,
                {
                  href: '#',
                },
                void 0,
                /* #__PURE__*/ _jsx(IconHelp, {}),
                ' Help',
              )),
          }),
        );
      },
    },
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
          ',',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, '"positive"'),
          ', and ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, '"neutral"'),
          '.',
        ),
      ),
      Example: function Example(_ref3) {
        const id = _ref3.id,
          getState = _ref3.getState,
          setState = _ref3.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(Textarea, {
              label: 'Label',
              id: ''.concat(id, '_1'),
              onChange: setState('textarea'),
              value: getState('textarea'),
              tone: 'critical',
              message: 'Critical message',
            }),
            /* #__PURE__*/ _jsx(Textarea, {
              label: 'Label',
              id: ''.concat(id, '_2'),
              onChange: setState('textarea2'),
              value: getState('textarea2'),
              tone: 'positive',
              message: 'Positive message',
            }),
            /* #__PURE__*/ _jsx(Textarea, {
              label: 'Label',
              id: ''.concat(id, '_3'),
              onChange: setState('textarea3'),
              value: getState('textarea3'),
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
      Example: function Example(_ref4) {
        const id = _ref4.id,
          getState = _ref4.getState,
          setState = _ref4.setState;
        return source(
          /* #__PURE__*/ _jsx(Textarea, {
            label: 'Label',
            id,
            onChange: setState('textarea'),
            value: getState('textarea'),
            description: 'Extra information about the field',
          }),
        );
      },
    },
    {
      label: 'Disabled field',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Mark the field as disabled by passing ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'true'),
        ' to the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'disabled'),
        ' prop.',
      ),
      background: 'card',
      Example: function Example(_ref5) {
        const id = _ref5.id,
          getState = _ref5.getState,
          setState = _ref5.setState;
        return source(
          /* #__PURE__*/ _jsx(Textarea, {
            label: 'Label',
            id,
            onChange: setState('textarea'),
            value: getState('textarea'),
            disabled: true,
          }),
        );
      },
    },
    {
      label: 'Specifying a height',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The height is defaulted to 3 lines. This can be overridden by passing a number to the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'lines'),
        ' prop.',
      ),
      Example: function Example(_ref6) {
        const id = _ref6.id,
          getState = _ref6.getState,
          setState = _ref6.setState;
        return source(
          /* #__PURE__*/ _jsx(Textarea, {
            label: 'Label',
            id,
            onChange: setState('textarea'),
            value: getState('textarea'),
            description: 'Height set to 5 lines',
            lines: 5,
          }),
        );
      },
    },
    {
      label: 'Grow height with user input',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'By default, the field grows in height as the user types. You can set a limit to the number of lines by passing a number to the',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'lineLimit'),
          ' prop.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Alternatively, this behaviour can be disabled by setting',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'grow'),
          ' to ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, '"false"'),
          '.',
        ),
      ),
      Example: function Example(_ref7) {
        const id = _ref7.id,
          getState = _ref7.getState,
          setState = _ref7.setState;
        return source(
          /* #__PURE__*/ _jsx(Textarea, {
            label: 'Label',
            id,
            onChange: setState('textarea'),
            value: getState('textarea'),
            description: 'Height limited to 6 lines',
            lineLimit: 6,
          }),
        );
      },
    },
    {
      label: 'Limiting the number of characters',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Specifying a ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'characterLimit'),
          ' will communicate when the input text exceeds the limit. All characters entered beyond the specified limit will be visually highlighted. To reduce visual noise, the character count is only displayed when the user is approaching or exceeding the specified limit.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'To prevent loss of information, exceeding the limit is permitted, however the count will present in a critical tone.',
        ),
      ),
      Example: function Example(_ref8) {
        const id = _ref8.id,
          getState = _ref8.getState,
          setState = _ref8.setState,
          setDefaultState = _ref8.setDefaultState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState(
              'textarea',
              'A long piece of text exceeding the specified character limit of 50',
            ),
            /* #__PURE__*/ _jsx(Textarea, {
              label: 'Label',
              id,
              onChange: setState('textarea'),
              value: getState('textarea'),
              description: 'Chactacter limit of 50',
              characterLimit: 50,
            }),
          ),
        );
      },
    },
    {
      label: 'Highlighting ranges',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'To support targeted validations, specific character ranges can be highlighted as critical. The ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'highlightRanges'),
        ' prop accepts and array of ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'start'),
        ' and ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'end'),
        ' ',
        'character positions.',
      ),
      Example: function Example(_ref9) {
        const id = _ref9.id,
          getState = _ref9.getState,
          setState = _ref9.setState,
          setDefaultState = _ref9.setDefaultState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState(
              'textarea',
              'A long piece of text with a highlighted range',
            ),
            /* #__PURE__*/ _jsx(Textarea, {
              label: 'Label',
              id,
              onChange: setState('textarea'),
              value: getState('textarea'),
              tone: 'critical',
              message: 'Critical message',
              description: 'Characters 7-20 are highlighted',
              highlightRanges: [
                {
                  start: 7,
                  end: 20,
                },
              ],
            }),
          ),
        );
      },
    },
  ],
};
export default docs;

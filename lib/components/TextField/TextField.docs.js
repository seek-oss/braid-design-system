import _jsx from '@babel/runtime/helpers/jsx';

let _TextLink, _IconSearch;

import React from 'react';
import {
  IconSearch,
  TextField,
  TextLink,
  Text,
  Strong,
  List,
  IconHelp,
  Stack,
} from '../';
import source from '../../utils/source.macro';
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example(_ref) {
    const id = _ref.id,
      getState = _ref.getState,
      setState = _ref.setState;
    return source(
      /* #__PURE__*/ _jsx(TextField, {
        label: 'Label',
        id,
        onChange: setState('textfield'),
        value: getState('textfield'),
        onClear: function onClear() {
          return setState('textfield', '');
        },
      }),
    );
  },
  alternatives: [
    {
      name: 'Autosuggest',
      description: 'For autocompletion.',
    },
    {
      name: 'PasswordField',
      description: 'For password input.',
    },
    {
      name: 'Textarea',
      description: 'For long-form text.',
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
          /* #__PURE__*/ _jsx(TextField, {
            label: 'Label',
            id,
            onChange: setState('textfield'),
            value: getState('textfield'),
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
            /* #__PURE__*/ _jsx(TextField, {
              label: 'Label',
              id: ''.concat(id, '_1'),
              onChange: setState('textfield'),
              value: getState('textfield'),
              tone: 'critical',
              message: 'Critical message',
            }),
            /* #__PURE__*/ _jsx(TextField, {
              label: 'Label',
              id: ''.concat(id, '_2'),
              onChange: setState('textfield2'),
              value: getState('textfield2'),
              tone: 'positive',
              message: 'Positive message',
            }),
            /* #__PURE__*/ _jsx(TextField, {
              label: 'Label',
              id: ''.concat(id, '_3'),
              onChange: setState('textfield3'),
              value: getState('textfield3'),
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
          /* #__PURE__*/ _jsx(TextField, {
            label: 'Label',
            id,
            onChange: setState('textfield'),
            value: getState('textfield'),
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
          /* #__PURE__*/ _jsx(TextField, {
            label: 'Label',
            id,
            onChange: setState('textfield'),
            value: getState('textfield'),
            disabled: true,
          }),
        );
      },
    },
    {
      label: 'Placeholder prompt',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Providing a ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'placeholder'),
        ' will display as a prompt to the user no value is selected.',
      ),
      Example: function Example(_ref6) {
        const id = _ref6.id,
          getState = _ref6.getState,
          setState = _ref6.setState;
        return source(
          /* #__PURE__*/ _jsx(TextField, {
            label: 'Label',
            id,
            onChange: setState('textfield'),
            value: getState('textfield'),
            placeholder: 'Enter text',
          }),
        );
      },
    },
    {
      label: 'Clearing the field',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'A ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/IconClear',
          },
          void 0,
          'clear icon',
        ),
        ' button will appear in the field when the user has entered text. You must pass a function to the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'onClear'),
        ' prop, which will be called when the button is clicked.',
      ),
      Example: function Example(_ref7) {
        const id = _ref7.id,
          getState = _ref7.getState,
          setState = _ref7.setState,
          setDefaultState = _ref7.setDefaultState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('textfield', 'User entered text'),
            /* #__PURE__*/ _jsx(TextField, {
              label: 'Label',
              id,
              onChange: setState('textfield'),
              value: getState('textfield'),
              onClear: function onClear() {
                return setState('textfield', '');
              },
            }),
          ),
        );
      },
    },
    {
      label: 'Inserting an icon',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'For decoration and help disguinishing fields an ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'icon'),
        ' ',
        'can be provided. This will be placed in the left of the field and is not interactive.',
      ),
      Example: function Example(_ref8) {
        const id = _ref8.id,
          getState = _ref8.getState,
          setState = _ref8.setState;
        return source(
          /* #__PURE__*/ _jsx(TextField, {
            id,
            label: 'Label',
            onChange: setState('textfield'),
            value: getState('textfield'),
            icon:
              _IconSearch ||
              (_IconSearch = /* #__PURE__*/ _jsx(IconSearch, {})),
            placeholder: 'Enter text',
          }),
        );
      },
    },
    {
      label: 'Adding a prefix',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'prefix'),
        ' prop allows you to prepend read-only content on the left-hand side of the field. This is typically used for currency symbols, country codes, etc.',
      ),
      Example: function Example(_ref9) {
        const id = _ref9.id,
          getState = _ref9.getState,
          setState = _ref9.setState;
        return source(
          /* #__PURE__*/ _jsx(TextField, {
            id,
            label: 'Phone number',
            onChange: setState('textfield'),
            value: getState('textfield'),
            prefix: '+61',
          }),
        );
      },
    },
  ],
};
export default docs;

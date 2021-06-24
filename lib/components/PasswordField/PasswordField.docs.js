import _jsx from '@babel/runtime/helpers/jsx';

let _TextLink;

import React from 'react';
import { List, PasswordField, Strong, Stack, Text, TextLink } from '../';
import source from '../../utils/source.macro';
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example(_ref) {
    const id = _ref.id,
      getState = _ref.getState,
      setState = _ref.setState;
    return source(
      /* #__PURE__*/ _jsx(PasswordField, {
        label: 'Label',
        id,
        onChange: setState('password'),
        value: getState('password'),
      }),
    );
  },
  alternatives: [
    {
      name: 'TextField',
      description: 'For free text.',
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
          /* #__PURE__*/ _jsx(PasswordField, {
            label: 'Label',
            id,
            onChange: setState('password'),
            value: getState('password'),
            secondaryLabel: 'optional',
            tertiaryLabel:
              _TextLink ||
              (_TextLink = /* #__PURE__*/ _jsx(
                TextLink,
                {
                  href: '#',
                },
                void 0,
                'Forgot password?',
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
            /* #__PURE__*/ _jsx(PasswordField, {
              label: 'Label',
              id: ''.concat(id, '_1'),
              onChange: setState('passwordfield'),
              value: getState('passwordfield'),
              tone: 'critical',
              message: 'Critical message',
            }),
            /* #__PURE__*/ _jsx(PasswordField, {
              label: 'Label',
              id: ''.concat(id, '_2'),
              onChange: setState('passwordfield2'),
              value: getState('passwordfield2'),
              tone: 'positive',
              message: 'Positive message',
            }),
            /* #__PURE__*/ _jsx(PasswordField, {
              label: 'Label',
              id: ''.concat(id, '_3'),
              onChange: setState('passwordfield3'),
              value: getState('passwordfield3'),
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
          /* #__PURE__*/ _jsx(PasswordField, {
            label: 'Label',
            id,
            onChange: setState('passwordfield'),
            value: getState('passwordfield'),
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
          /* #__PURE__*/ _jsx(PasswordField, {
            label: 'Label',
            id,
            onChange: setState('password'),
            value: getState('password'),
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
          /* #__PURE__*/ _jsx(PasswordField, {
            label: 'Label',
            id,
            onChange: setState('textfield'),
            value: getState('textfield'),
            placeholder: 'Enter password',
          }),
        );
      },
    },
  ],
};
export default docs;

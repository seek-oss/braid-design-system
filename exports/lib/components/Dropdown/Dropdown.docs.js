import _jsx from '@babel/runtime/helpers/jsx';

let _option,
  _option2,
  _optgroup,
  _optgroup2,
  _TextLink,
  _option3,
  _option4,
  _option5,
  _option6,
  _option7,
  _option8,
  _option9,
  _option10,
  _option11,
  _option12,
  _option13,
  _option14,
  _option15,
  _option16,
  _IconLocation,
  _option17,
  _option18,
  _option19;

import React from 'react';
import {
  Dropdown,
  List,
  IconHelp,
  Strong,
  Text,
  TextLink,
  IconLocation,
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
      /* #__PURE__*/ _jsx(
        Dropdown,
        {
          label: 'Label',
          id,
          onChange: setState('dropdown'),
          value: getState('dropdown'),
          placeholder: 'Please select',
        },
        void 0,
        _option ||
          (_option = /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1')),
        _option2 ||
          (_option2 = /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2')),
      ),
    );
  },
  alternatives: [
    {
      name: 'Autosuggest',
      description: 'For larger lists.',
    },
    {
      name: 'TextDropdown',
      description: 'For minimal selection lists, outside of forms.',
    },
    {
      name: 'TextField',
      description: 'For free text.',
    },
  ],
  additional: [
    {
      label: 'Option groups',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Grouping is supported via native ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'optgroup'),
        ' elements.',
      ),
      Example: function Example(_ref2) {
        const id = _ref2.id,
          getState = _ref2.getState,
          setState = _ref2.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Dropdown,
            {
              label: 'Label',
              id,
              onChange: setState('dropdown'),
              value: getState('dropdown'),
              placeholder: 'Please select',
            },
            void 0,
            _optgroup ||
              (_optgroup = /* #__PURE__*/ _jsx(
                'optgroup',
                {
                  label: 'Group 1',
                },
                void 0,
                /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1'),
                /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2'),
                /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 3'),
              )),
            _optgroup2 ||
              (_optgroup2 = /* #__PURE__*/ _jsx(
                'optgroup',
                {
                  label: 'Group 2',
                },
                void 0,
                /* #__PURE__*/ _jsx('option', {}, void 0, 'Option A'),
                /* #__PURE__*/ _jsx('option', {}, void 0, 'Option B'),
                /* #__PURE__*/ _jsx('option', {}, void 0, 'Option C'),
              )),
          ),
        );
      },
    },
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
      Example: function Example(_ref3) {
        const id = _ref3.id,
          getState = _ref3.getState,
          setState = _ref3.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Dropdown,
            {
              label: 'Label',
              id,
              onChange: setState('dropdown'),
              value: getState('dropdown'),
              placeholder: 'Please select',
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
            },
            void 0,
            _option3 ||
              (_option3 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 1',
              )),
            _option4 ||
              (_option4 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 2',
              )),
          ),
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
      Example: function Example(_ref4) {
        const id = _ref4.id,
          getState = _ref4.getState,
          setState = _ref4.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Dropdown,
              {
                label: 'Label',
                id: ''.concat(id, '_1'),
                onChange: setState('dropdown'),
                value: getState('dropdown'),
                tone: 'critical',
                message: 'Critical message',
                placeholder: 'Please select',
              },
              void 0,
              _option5 ||
                (_option5 = /* #__PURE__*/ _jsx(
                  'option',
                  {},
                  void 0,
                  'Option 1',
                )),
              _option6 ||
                (_option6 = /* #__PURE__*/ _jsx(
                  'option',
                  {},
                  void 0,
                  'Option 2',
                )),
            ),
            /* #__PURE__*/ _jsx(
              Dropdown,
              {
                label: 'Label',
                id: ''.concat(id, '_2'),
                onChange: setState('dropdown2'),
                value: getState('dropdown2'),
                tone: 'positive',
                message: 'Positive message',
                placeholder: 'Please select',
              },
              void 0,
              _option7 ||
                (_option7 = /* #__PURE__*/ _jsx(
                  'option',
                  {},
                  void 0,
                  'Option 1',
                )),
              _option8 ||
                (_option8 = /* #__PURE__*/ _jsx(
                  'option',
                  {},
                  void 0,
                  'Option 2',
                )),
            ),
            /* #__PURE__*/ _jsx(
              Dropdown,
              {
                label: 'Label',
                id: ''.concat(id, '_3'),
                onChange: setState('dropdown3'),
                value: getState('dropdown3'),
                tone: 'neutral',
                message: 'Neutral message',
                placeholder: 'Please select',
              },
              void 0,
              _option9 ||
                (_option9 = /* #__PURE__*/ _jsx(
                  'option',
                  {},
                  void 0,
                  'Option 1',
                )),
              _option10 ||
                (_option10 = /* #__PURE__*/ _jsx(
                  'option',
                  {},
                  void 0,
                  'Option 2',
                )),
            ),
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
      Example: function Example(_ref5) {
        const id = _ref5.id,
          getState = _ref5.getState,
          setState = _ref5.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Dropdown,
            {
              label: 'Label',
              id,
              onChange: setState('dropdown'),
              value: getState('dropdown'),
              placeholder: 'Please select',
              description: 'Extra information about the field',
            },
            void 0,
            _option11 ||
              (_option11 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 1',
              )),
            _option12 ||
              (_option12 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 2',
              )),
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
        'Mark the field as disabled by passing ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'true'),
        ' to the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'disabled'),
        ' prop.',
      ),
      background: 'card',
      Example: function Example(_ref6) {
        const id = _ref6.id,
          getState = _ref6.getState,
          setState = _ref6.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Dropdown,
            {
              label: 'Label',
              id,
              onChange: setState('dropdown'),
              value: getState('dropdown'),
              disabled: true,
            },
            void 0,
            _option13 ||
              (_option13 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 1',
              )),
            _option14 ||
              (_option14 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 2',
              )),
          ),
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
      Example: function Example(_ref7) {
        const id = _ref7.id,
          getState = _ref7.getState,
          setState = _ref7.setState;
        return source(
          /* #__PURE__*/ _jsx(
            Dropdown,
            {
              label: 'Label',
              id,
              onChange: setState('dropdown'),
              value: getState('dropdown'),
              placeholder: 'Please select',
            },
            void 0,
            _option15 ||
              (_option15 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 1',
              )),
            _option16 ||
              (_option16 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 2',
              )),
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
          /* #__PURE__*/ _jsx(
            Dropdown,
            {
              id,
              label: 'Location',
              onChange: setState('dropdown'),
              value: getState('dropdown'),
              icon:
                _IconLocation ||
                (_IconLocation = /* #__PURE__*/ _jsx(IconLocation, {})),
              placeholder: 'Please select',
            },
            void 0,
            _option17 ||
              (_option17 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 1',
              )),
            _option18 ||
              (_option18 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 2',
              )),
            _option19 ||
              (_option19 = /* #__PURE__*/ _jsx(
                'option',
                {},
                void 0,
                'Option 3',
              )),
          ),
        );
      },
    },
  ],
};
export default docs;

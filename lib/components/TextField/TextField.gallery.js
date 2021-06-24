import _jsx from '@babel/runtime/helpers/jsx';

let _TextLink, _IconSearch;

import React from 'react';
import { IconSearch, IconHelp, TextField, TextLink } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Standard',
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
  },
  {
    label: 'With additional labels',
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
    label: 'With a description',
    Example: function Example(_ref3) {
      const id = _ref3.id,
        getState = _ref3.getState,
        setState = _ref3.setState;
      return source(
        /* #__PURE__*/ _jsx(TextField, {
          label: 'Label',
          id,
          onChange: setState('textfield'),
          value: getState('textfield'),
          onClear: function onClear() {
            return setState('textfield', '');
          },
          description: 'Longer description of this field',
        }),
      );
    },
  },
  {
    label: 'With a critical message',
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
          tone: 'critical',
          message: 'Critical message',
        }),
      );
    },
  },
  {
    label: 'With a positive message',
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
          tone: 'positive',
          message: 'Positive message',
        }),
      );
    },
  },
  {
    label: 'With a neutral message',
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
          tone: 'neutral',
          message: 'Neutral message',
        }),
      );
    },
  },
  {
    label: 'With an icon',
    Example: function Example(_ref7) {
      const id = _ref7.id,
        getState = _ref7.getState,
        setState = _ref7.setState;
      return source(
        /* #__PURE__*/ _jsx(TextField, {
          label: 'Job Title',
          id,
          onChange: setState('textfield'),
          value: getState('textfield'),
          icon:
            _IconSearch || (_IconSearch = /* #__PURE__*/ _jsx(IconSearch, {})),
          placeholder: 'Enter a job title',
        }),
      );
    },
  },
  {
    label: 'With a prefix',
    Example: function Example(_ref8) {
      const id = _ref8.id,
        getState = _ref8.getState,
        setState = _ref8.setState;
      return source(
        /* #__PURE__*/ _jsx(TextField, {
          label: 'Phone number',
          id,
          onChange: setState('textfield'),
          value: getState('textfield'),
          prefix: '+61',
        }),
      );
    },
  },
  {
    label: 'Disabled field',
    background: 'card',
    Example: function Example(_ref9) {
      const id = _ref9.id,
        getState = _ref9.getState,
        setState = _ref9.setState;
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
];

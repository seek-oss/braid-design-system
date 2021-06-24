import _jsx from '@babel/runtime/helpers/jsx';

let _TextLink, _TextLink2;

import React from 'react';
import { FieldLabel, TextLink } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Standard',
    Example: function Example(_ref) {
      const id = _ref.id;
      return source(
        /* #__PURE__*/ _jsx(FieldLabel, {
          htmlFor: id,
          label: 'Label',
        }),
      );
    },
  },
  {
    label: 'With secondary label',
    Example: function Example(_ref2) {
      const id = _ref2.id;
      return source(
        /* #__PURE__*/ _jsx(FieldLabel, {
          htmlFor: id,
          label: 'Label',
          secondaryLabel: 'Secondary label',
        }),
      );
    },
  },
  {
    label: 'With tertiary label',
    Example: function Example(_ref3) {
      const id = _ref3.id;
      return source(
        /* #__PURE__*/ _jsx(FieldLabel, {
          htmlFor: id,
          label: 'Label',
          tertiaryLabel:
            _TextLink ||
            (_TextLink = /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'Tertiary label',
            )),
        }),
      );
    },
  },
  {
    label: 'With all types',
    Example: function Example(_ref4) {
      const id = _ref4.id;
      return source(
        /* #__PURE__*/ _jsx(FieldLabel, {
          htmlFor: id,
          label: 'Label',
          secondaryLabel: 'Secondary label',
          tertiaryLabel:
            _TextLink2 ||
            (_TextLink2 = /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'Tertiary label',
            )),
        }),
      );
    },
  },
];

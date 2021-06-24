import _jsx from '@babel/runtime/helpers/jsx';

let _Placeholder,
  _Placeholder2,
  _Placeholder3,
  _Placeholder4,
  _Placeholder5,
  _Placeholder6;

import React from 'react';
import { Placeholder } from '../../playroom/components';
import { DrawerContent } from './Drawer';
export var screenshots = {
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default layout',
      Example: function Example(_ref) {
        const id = _ref.id;
        return /* #__PURE__*/ _jsx(
          DrawerContent,
          {
            id,
            title: 'Default test',
            onClose: function onClose() {},
            width: 'medium',
            scrollLock: false,
          },
          void 0,
          _Placeholder ||
            (_Placeholder = /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
              width: '100%',
            })),
        );
      },
    },
    {
      label: 'Layout with a description',
      Example: function Example(_ref2) {
        const id = _ref2.id;
        return /* #__PURE__*/ _jsx(
          DrawerContent,
          {
            id,
            title: 'Description test',
            description:
              _Placeholder2 ||
              (_Placeholder2 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 'auto',
                width: '100%',
                label: 'Description',
              })),
            onClose: function onClose() {},
            scrollLock: false,
          },
          void 0,
          _Placeholder3 ||
            (_Placeholder3 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
              width: '100%',
            })),
        );
      },
    },
    {
      label: 'Layout: Small width',
      Example: function Example(_ref3) {
        const id = _ref3.id;
        return /* #__PURE__*/ _jsx(
          DrawerContent,
          {
            id,
            title: 'Small',
            width: 'small',
            onClose: function onClose() {},
            scrollLock: false,
          },
          void 0,
          _Placeholder4 ||
            (_Placeholder4 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
              width: '100%',
              label: 'Small Drawer',
            })),
        );
      },
    },
    {
      label: 'Layout: Medium width',
      Example: function Example(_ref4) {
        const id = _ref4.id;
        return /* #__PURE__*/ _jsx(
          DrawerContent,
          {
            id,
            title: 'Medium',
            width: 'medium',
            onClose: function onClose() {},
            scrollLock: false,
          },
          void 0,
          _Placeholder5 ||
            (_Placeholder5 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
              width: '100%',
              label: 'Medium Drawer',
            })),
        );
      },
    },
    {
      label: 'Layout: Large width',
      Example: function Example(_ref5) {
        const id = _ref5.id;
        return /* #__PURE__*/ _jsx(
          DrawerContent,
          {
            id,
            title: 'Large',
            width: 'large',
            onClose: function onClose() {},
            scrollLock: false,
          },
          void 0,
          _Placeholder6 ||
            (_Placeholder6 = /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
              width: '100%',
              label: 'Large Drawer',
            })),
        );
      },
    },
  ],
};
